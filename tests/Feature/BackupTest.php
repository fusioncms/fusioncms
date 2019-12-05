<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tests\Feature;

use Tests\Foundation\TestCase;
use App\Jobs\Backups\BackupRun;
use App\Jobs\Backups\RestoreFromBackup;
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

        config(['backup.backup.source.databases' => ['sqlite']]);

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

        Bus::assertDispatched(BackupRun::class);
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

        Bus::assertNotDispatched(BackupRun::class);
	}

	/**
     * @test
     * @group fusioncms
     * @group backups
     */
	public function a_request_to_backup_will_first_clean_then_create_a_backup()
	{
		Event::fake();
		Storage::fake('public');

		// Create new backup..
		(new BackupRun)->handle();

		// ...assert cleanup was successful.
		Event::assertDispatched(\Spatie\Backup\Events\CleanupWasSuccessful::class);

		// ...assert backup was successful.
		Event::assertDispatched(\Spatie\Backup\Events\BackupWasSuccessful::class, function($ev) use (&$backup) {
			return $ev->backupDestination->backups()->count() == 1;
		});
	}

	/**
     * @test
     * @group fusioncms
     * @group backups
     */
	public function a_request_to_restore_from_backup_will_restore_database_data()
	{
		Storage::fake('public');

		//TODO: unable to dump sql database for testing
		\Spatie\DbDumper\Databases\Sqlite::create()
			->setDbName(Storage::disk('public')->path('database.sqlite'))
			->dumpToFile(Storage::disk('public')->path('database.sql'));

		//TODO: need `$backup` to restore from

		// \App\Models\User::find(2)->delete();
		// $this->assertDatabaseMissing('users', ['email' => 'guest@example.com']);

		// // Restore from backup...
		// (new RestoreFromBackup($backup))->handle();

		// // ...assert cleanup was successful.
		// Event::assertDispatched(\App\Events\Backups\RestoreManifestWasCreated::class);
		// Event::assertDispatched(\App\Events\Backups\BackupExtractionSuccessful::class);
		// Event::assertDispatched(\App\Events\Backups\DatabaseRestoreSuccessful::class);
		// Event::assertDispatched(\App\Events\Backups\FileRestoreSuccessful::class);

		// $this->assertDatabaseHas('users', ['email' => 'guest@example.com']);
	}
}