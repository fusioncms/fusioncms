<?php

namespace Fusion\Tests\Feature;

use File;
use ZipArchive;
use Fusion\Tests\TestCase;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Storage;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BackupTest extends TestCase
{
	use RefreshDatabase;

	public function setUp(): void
    {
		parent::setUp();

        Storage::fake('public');
        Storage::fake('temp');

        // Establish fake db connection..
        config(['backup.backup.source.databases' => ['sqlite']]);

        // Establish backup `backup-temp`..
		config(['backup.backup.temporary_directory' => Storage::disk('temp')->path('backup-temp')]);

		// Establish backup destination disks
		config(['backup.backup.destination.disks' => ['public']]);

		// Establish backup source env variables
		config(['backup.backup.source.env' => ['APP_KEY']]);

        // Establish included files to backup..
		config(['backup.backup.source.files.include' => [
			Storage::disk('public')->path('files'),
			Storage::disk('temp')->path('env.json'),
		]]);

		// Add multiple files..
		Storage::disk('public')->put('files/testing-file1.txt', 'dummy content');
		Storage::disk('public')->put('files/testing-file2.txt', 'dummy content');

        $this->handleValidationExceptions();
    }

    /**
     * @test
     * @group fusioncms
     * @group backups
     */
	public function a_user_with_permission_can_create_a_backup()
	{
		Bus::fake();

        $response = $this->actingAs($this->admin, 'api')
        	->json('POST', '/api/backups')
        	->assertStatus(200);

        Bus::assertDispatched(\Fusion\Jobs\Backups\BackupRun::class);
	}

	/**
     * @test
     * @group fusioncms
     * @group backups
     */
	public function a_guest_cannot_not_create_a_backup()
	{
		Bus::fake();

		$this->expectException(AuthenticationException::class);

        $response = $this->json('POST', '/api/backups')
        	->assertStatus(422);

        Bus::assertNotDispatched(\Fusion\Jobs\Backups\BackupRun::class);
	}

	/**
     * @test
     * @group fusioncms
     * @group backups
     */
	public function a_request_to_backup_will_first_clean_then_create_a_backup()
	{
		Event::fake();

		// Create new backup..
		(new \Fusion\Jobs\Backups\BackupRun)->handle();

		// ...assert cleanup was successful.
		Event::assertDispatched(\Spatie\Backup\Events\CleanupWasSuccessful::class);

		// ...assert backup was successful.
		Event::assertDispatched(\Spatie\Backup\Events\BackupWasSuccessful::class, function($ev) use (&$backup) {
			return Storage::disk('public')->assertExists($ev->backupDestination->newestBackup()->path());
		});
	}

	/**
     * @test
     * @group fusioncms
     * @group backups
     */
	public function a_request_to_backup_will_save_env_variables_with_the_backup_zip()
	{
		Event::fake();

		// Create new backup..
		(new \Fusion\Jobs\Backups\BackupRun)->handle();

		// ...assert backup was successful.
		Event::assertDispatched(\Spatie\Backup\Events\BackupWasSuccessful::class, function($ev) {
			$backupPath = Storage::disk('public')->path($ev->backupDestination->newestBackup()->path());
			$zipArchive = new ZipArchive;

			// Verify env variables were backed-up correctly..
			if ($zipArchive->open($backupPath) === true) {
				$contents  = $zipArchive->getFromName(ltrim(Storage::disk('temp')->path('env.json'), '/'));
				$variables = json_decode($contents, true);

				foreach(config('backup.backup.source.env') as $key) {
					if ($variables[$key] != env($key)) {
						return false;
					}
				}
			}

			return true;
		});

	}

	/**
     * @test
     * @group fusioncms
     * @group backups
     */
	public function a_request_to_restore_from_backup_will_restore_files()
	{
		Event::fake();

		// Create new backup..
		(new \Fusion\Jobs\Backups\BackupRun)->handle();

		// Alter one of the test files..
		// Delete another test file..
		Storage::disk('public')->append('files/testing-file1.txt', 'more content');
		Storage::disk('public')->delete('files/testing-file2.txt');

		// ...assert backup was successful.
		Event::assertDispatched(\Spatie\Backup\Events\BackupWasSuccessful::class, function($ev) {
			$backup = $ev->backupDestination->newestBackup();

			// Restore backup..
			(new \Fusion\Jobs\Backups\RestoreFromBackup($backup))->handle();

			// Assert events were dispatched..
			Event::assertDispatched(\Fusion\Events\Backups\RestoreManifestWasCreated::class);
			Event::assertDispatched(\Fusion\Events\Backups\BackupExtractionSuccessful::class);
			Event::assertDispatched(\Fusion\Events\Backups\FileRestoreSuccessful::class, function($ev) {
				foreach ($ev->filesToCopy as $file) {
					if (Storage::disk('public')->exists('files/' . basename($file['target']))) {
						$this->assertEquals(
							Storage::disk('public')->get('files/' . basename($file['target'])),
							'dummy content'
						);
					}

				}

				return true;
			});

			return true;
		});
	}

	/**
     * @test
     * @group fusioncms
     * @group backups
     */
	public function a_request_to_restore_from_backup_will_restore_env_variables()
	{
		Event::fake();

		// Create new backup..
		(new \Fusion\Jobs\Backups\BackupRun)->handle();

		// Make edit to the .env.testing file..
		// So we can restore the variables upon restoration..
		$envContents = File::get(app()->environmentFilePath());

		foreach(config('backup.backup.source.env') as $key) {
			$envContents = preg_replace("/^({$key})=([^\r\n]*)$/m", "$1=" . Str::random(), $envContents);
		}

		File::put(app()->environmentFilePath(), $envContents);

		// ...assert backup was successful.
		Event::assertDispatched(\Spatie\Backup\Events\BackupWasSuccessful::class, function($ev) {
			$backup = $ev->backupDestination->newestBackup();

			// Restore backup..
			(new \Fusion\Jobs\Backups\RestoreFromBackup($backup))->handle();

			$envContents = File::get(app()->environmentFilePath());
			$matches     = [];

			foreach(config('backup.backup.source.env') as $key) {
				preg_match("/^({$key})=([^\r\n]*)$/m", $envContents, $matches);

				if (!isset($matches[2]) or ($matches[2] != env($key))) {
					return false;
				}
			}

			return true;
		});
	}

	//TODO: unable to dump sql database for testing
	public function a_request_to_restore_from_backup_will_restore_database()
	{
		// \Spatie\DbDumper\Databases\Sqlite::create()
		// 	->setDbName(Storage::disk('public')->path('database.sqlite'))
		// 	->dumpToFile(Storage::disk('public')->path('database.sql'));

		//TODO: need `$backup` to restore from

		// \Fusion\Models\User::find(2)->delete();
		// $this->assertDatabaseMissing('users', ['email' => 'guest@example.com']);

		// // Restore from backup...
		// (new RestoreFromBackup($backup))->handle();

		// // ...assert cleanup was successful.
		// Event::assertDispatched(\Fusion\Events\Backups\RestoreManifestWasCreated::class);
		// Event::assertDispatched(\Fusion\Events\Backups\BackupExtractionSuccessful::class);
		// Event::assertDispatched(\Fusion\Events\Backups\DatabaseRestoreSuccessful::class);
		// Event::assertDispatched(\Fusion\Events\Backups\FileRestoreSuccessful::class);

		// $this->assertDatabaseHas('users', ['email' => 'guest@example.com']);
	}
}