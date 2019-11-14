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

use App\Models\Import;
use Maatwebsite\Excel\Excel;
use Tests\Foundation\TestCase;
use App\Services\Imports\UserImport;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Queue;
use App\Services\Exports\GoogleExport;
use Illuminate\Support\Facades\Storage;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Maatwebsite\Excel\Facades\Excel as ExcelFacade;
use Maatwebsite\Excel\Jobs\{QueueImport, ReadChunk, AfterImportJob};

class ExcelTest extends TestCase
{
	use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();
    }

    /**
     * @test
     * @group fusioncms
     * @group excel
     */
    public function a_user_can_queue_an_import()
    {
        Queue::fake();

    	list($import, $filepath) = $this->generateFakeImport();

		$response = $this->actingAs($this->admin, 'api')
			->json(
				'POST',
				'/api/imports/queue/' . $import->id
			);

    	$response->assertStatus(201);

        Queue::assertPushed(\App\Jobs\Importer\BeforeImport::class);
    }

    /**
     * @test
     * @group fusioncms
     * @group excel
     */
    public function a_guest_cannot_queue_an_import()
    {
        $this->expectException(AuthenticationException::class);

        list($import, $filepath) = $this->generateFakeImport();

        $response = $this->json(
            'POST',
            '/api/imports/queue/' . $import->id
        );

        $response->assertStatus(422);
    }

    /**
     * @test
     * @group fusioncms
     * @group excel
     */
    public function an_import_with_source_will_have_data_pulled_in_locally()
    {
        list($import, $filepath) = $this->generateFakeImport();

        Storage::assertExists($filepath);
        
        $contents = Storage::get($filepath);

        $this->assertStringContainsString('"ID","Name","Email","Password","Status"', $contents);
        $this->assertStringContainsString('"1","Mrs. Nora Hickle","boyer.alberto@example.org","kHONkRQOqB6jpK2kp7W2","1"', $contents);
    }

    /**
     * @test
     * @group fusioncms
     * @group excel
     */
    public function a_queued_import_will_create_an_import_log_record()
    {
    	Queue::fake();

    	list($import, $filepath) = $this->generateFakeImport();

        // Store file locally..
        (new GoogleExport($import->source))->store($filepath);

		// When a new import job is throw on the queue...
		(new UserImport($import))->queue($filepath, null, Excel::CSV);

		// ...assert the queue has all jobs...
		Queue::assertPushedWithChain(QueueImport::class, [
			ReadChunk::class,
			AfterImportJob::class
		]);

        // ...assert database has an unfinished `import_log` record.
        $this->assertDatabaseHas('import_logs', [
        	'import_id'    => $import->id,
        	'total_rows'   => 10,
        	'progress'     => 0,
            'log_file'     => "logs/imports/imports-{$import->id}.log",
        	'completed_at' => null
        ]);
	}

	/**
     * @test
     * @group fusioncms
     * @group excel
     */
	public function an_completed_import_will_complete_log_record()
	{
		list($import, $filepath) = $this->generateFakeImport();

		// When a new import job is imported...
		(new UserImport($import))->import($filepath, null, Excel::CSV);

		// ...assert database has a completed `import_log` record.
		$this->assertDatabaseHas('import_logs', [
			'import_id'    => $import->id,
			'total_rows'   => 10,
			'progress'     => 100,
			'completed_at' => now()
		]);
	}

	// -------------------------------------------------
	// Import Strategies

	/**
     * @test
     * @group fusioncms
     * @group import_strategies
     */
	public function an_import_with_only_create_strategy_will_persist_the_database()
	{
		// When we generate an import to with 3 rows + header..
		list($import, $filepath) = $this->generateFakeImport([
			'source'   => 'https://sheets.googleapis.com/v4/spreadsheets/1YUnhy4SIZN_SfJ5uRbgYcVkdzWPa0v7kOmAbwWahb9k/values:batchGet?ranges=1:2&ranges=4:4&key=AIzaSyDjYCkYTworIrz3SA8yvaGFYifW0EpUX8Q',
			'strategy' => ['create']
		]);

		// Expedite import job!
        (new UserImport($import))->import($filepath, null, Excel::CSV);

        // ..assert existing record has been skipped (due to import strategy selection)
		$this->assertDatabaseHas('users', [
			'id'    => 1,
			'name'  => 'Jane Doe',
			'email' => 'admin@example.com',
		]);

		// ...assert new record has been created
		$this->assertDatabaseHas('users', [
			'id'    => 3,
			'name'  => 'Kirk Blanda',
			'email' => 'lexi05@example.net',
		]);

		// ...assert `import_log` has been updated correctly
		$this->assertDatabaseHas('import_logs', [
			'import_id'  => $import->id,
			'total_rows' => 2,
			'processed'  => '[1]',
		]);
	}

	/**
     * @test
     * @group fusioncms
     * @group import_strategies
     */
	public function an_import_with_only_update_strategy_will_persist_the_database()
	{
		// When we generate an import to with 3 rows + header..
		list($import, $filepath) = $this->generateFakeImport([
			'source'   => 'https://sheets.googleapis.com/v4/spreadsheets/1YUnhy4SIZN_SfJ5uRbgYcVkdzWPa0v7kOmAbwWahb9k/values:batchGet?ranges=1:2&ranges=4:4&key=AIzaSyDjYCkYTworIrz3SA8yvaGFYifW0EpUX8Q',
			'strategy' => ['update']
		]);

		// Expedite import job!
        (new UserImport($import))->import($filepath, null, Excel::CSV);

        // ..assert existing record has been updated
		$this->assertDatabaseHas('users', [
			'id'    => 1,
			'name'  => 'Mrs. Nora Hickle',
			'email' => 'boyer.alberto@example.org',
		]);

		// ...assert new record has been skipped (due to import strategy selection)
		$this->assertDatabaseMissing('users', ['id' => 3]);

		// ...assert `import_log` has been updated correctly
		$this->assertDatabaseHas('import_logs', [
			'import_id'  => $import->id,
			'total_rows' => 2,
			'processed'  => '[1]',
		]);
	}

	/**
     * @test
     * @group fusioncms
     * @group import_strategies
     */
	public function an_import_with_only_disable_strategy_will_disable_any_unprocessed_records()
	{
		// When we generate an import to with 1 row + header..
		list($import, $filepath) = $this->generateFakeImport([
			'source'   => 'https://sheets.googleapis.com/v4/spreadsheets/1YUnhy4SIZN_SfJ5uRbgYcVkdzWPa0v7kOmAbwWahb9k/values:batchGet?ranges=1:1&ranges=4:4&key=AIzaSyDjYCkYTworIrz3SA8yvaGFYifW0EpUX8Q',
			'strategy' => ['disable']
		]);

		// Expedite import job!
        (new UserImport($import))->import($filepath, null, Excel::CSV);

		// ..assert unprocessed records are now inactive
		$this->assertDatabaseHas('users', ['id' => 1, 'status' => false]);
		$this->assertDatabaseHas('users', ['id' => 2, 'status' => false]);

		// ...assert new row has been skipped (due to import strategy selection)
		$this->assertDatabaseMissing('users', ['id' => 3]);
	}

	/**
     * @test
     * @group fusioncms
     * @group import_strategies
     */
	public function an_import_with_only_delete_strategy_will_remove_any_unprocessed_records()
	{
		// When we generate an import to with 1 row + header..
		list($import, $filepath) = $this->generateFakeImport([
			'source'   => 'https://sheets.googleapis.com/v4/spreadsheets/1YUnhy4SIZN_SfJ5uRbgYcVkdzWPa0v7kOmAbwWahb9k/values:batchGet?ranges=1:1&ranges=4:4&key=AIzaSyDjYCkYTworIrz3SA8yvaGFYifW0EpUX8Q',
			'strategy' => ['delete']
		]);

		// Expedite import job!
        (new UserImport($import))->import($filepath, null, Excel::CSV);

		// ..assert unprocessed records have been removed
		$this->assertDatabaseMissing('users', ['id' => 1]);
		$this->assertDatabaseMissing('users', ['id' => 2]);

		// ...assert new row has been skipped (due to import strategy selection)
		$this->assertDatabaseMissing('users', ['id' => 3]);
	}

	/**
     * @test
     * @group fusioncms
     * @group import_strategies
     */
	public function an_import_with_create_and_update_strategies_will_persist_the_database()
	{
		// When we generate an import to with 3 rows + header..
		list($import, $filepath) = $this->generateFakeImport([
			'source'   => 'https://sheets.googleapis.com/v4/spreadsheets/1YUnhy4SIZN_SfJ5uRbgYcVkdzWPa0v7kOmAbwWahb9k/values:batchGet?ranges=1:2&ranges=4:4&key=AIzaSyDjYCkYTworIrz3SA8yvaGFYifW0EpUX8Q',
			'strategy' => ['create','update']
		]);

		// Expedite import job!
        (new UserImport($import))->import($filepath, null, Excel::CSV);

		// ..assert existing record has been updated
		$this->assertDatabaseHas('users', [
			'id'    => 1,
			'name'  => 'Mrs. Nora Hickle',
			'email' => 'boyer.alberto@example.org',
		]);

		// ...assert new record has been created
		$this->assertDatabaseHas('users', [
			'id'    => 3,
			'name'  => 'Kirk Blanda',
			'email' => 'lexi05@example.net',
		]);

		// ...assert `import_log` has been updated correctly
		$this->assertDatabaseHas('import_logs', [
			'import_id'  => $import->id,
			'total_rows' => 2,
			'processed'  => '[1]',
		]);
	}

	/**
     * @test
     * @group fusioncms
     * @group import_strategies
     */
	public function an_import_with_create_and_delete_strategies_will_correctly_persist_database()
	{
		// When we generate an import to with 1 row + header..
		list($import, $filepath) = $this->generateFakeImport([
			'source'   => 'https://sheets.googleapis.com/v4/spreadsheets/1YUnhy4SIZN_SfJ5uRbgYcVkdzWPa0v7kOmAbwWahb9k/values:batchGet?ranges=1:2&ranges=4:4&key=AIzaSyDjYCkYTworIrz3SA8yvaGFYifW0EpUX8Q',
			'strategy' => ['create', 'delete']
		]);

		// Expedite import job!
        (new UserImport($import))->import($filepath, null, Excel::CSV);

		// ..assert existing row will be skipped due to import strategy selection
		$this->assertDatabaseHas('users', [
			'id'     => 1,
			'name'   => 'Jane Doe',
			'email'  => 'admin@example.com',
		]);

		// ...assert existing, unprocessed row will be removed
		$this->assertDatabaseMissing('users', ['id' => 2]);

		// ...assert new record has been created
		$this->assertDatabaseHas('users', [
			'id'    => 3,
			'name'  => 'Kirk Blanda',
			'email' => 'lexi05@example.net',
		]);

		// ...assert `import_log` has been updated correctly
		$this->assertDatabaseHas('import_logs', [
			'import_id'  => $import->id,
			'total_rows' => 2,
			'processed'  => '[1]',
		]);
	}

	/**
     * @test
     * @group fusioncms
     * @group import_strategies
     */
	public function an_import_with_update_and_disable_strategies_will_correctly_persist_database()
	{
		// When we generate an import to with 1 row + header..
		list($import, $filepath) = $this->generateFakeImport([
			'source'   => 'https://sheets.googleapis.com/v4/spreadsheets/1YUnhy4SIZN_SfJ5uRbgYcVkdzWPa0v7kOmAbwWahb9k/values:batchGet?ranges=1:2&ranges=4:4&key=AIzaSyDjYCkYTworIrz3SA8yvaGFYifW0EpUX8Q',
			'strategy' => ['update', 'disable']
		]);

		// Expedite import job!
        (new UserImport($import))->import($filepath, null, Excel::CSV);

		// ..assert existing record has been updated
		$this->assertDatabaseHas('users', [
			'id'    => 1,
			'name'  => 'Mrs. Nora Hickle',
			'email' => 'boyer.alberto@example.org',
		]);

		// ...assert existing, unprocessed row will be disabled
		$this->assertDatabaseHas('users', ['id' => 2, 'status' => false]);

		// ...assert new row has been skipped (due to import strategy selection)
		$this->assertDatabaseMissing('users', ['id' => 3]);

		// ...assert `import_log` has been updated correctly
		$this->assertDatabaseHas('import_logs', [
			'import_id'  => $import->id,
			'total_rows' => 2,
			'processed'  => '[1]',
		]);
	}

	// -------------------------------------------------
	// Helper

	protected function generateFakeImport(array $overrides = [])
    {
    	Storage::fake();

    	$import   = factory(Import::class)->states('users')->create($overrides);
        $filepath = "imports/{$import->handle}.csv";

        // Store file locally..
        (new \App\Services\Exports\GoogleExport($import->source))->store($filepath);

        return [$import, $filepath];
    }
}