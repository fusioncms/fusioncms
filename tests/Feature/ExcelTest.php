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
    	ExcelFacade::fake();

    	$import   = $this->generateFakeImport();
		$response = $this->actingAs($this->admin, 'api')
			->json(
				'POST',
				'/api/imports/queue/' . $import->id
			);

    	$response->assertStatus(201);

    	ExcelFacade::assertQueued("imports/{$import->handle}.csv");
    }

    /**
     * @test
     * @group fusioncms
     * @group excel
     */
	public function a_guest_cannot_queue_an_import()
	{
		$this->expectException(AuthenticationException::class);

		$import   = $this->generateFakeImport();
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
	public function a_queued_import_will_create_an_import_log_record()
	{
		Queue::fake();

		$import = $this->generateFakeImport();

		// When a new import job is throw on the queue...
        (new UserImport($import))
            ->queue("imports/{$import->handle}.csv", null, Excel::CSV)
            ->onQueue('imports');

        // ...assert the queue has all jobs...
        Queue::assertPushedWithChain(QueueImport::class, [
			ReadChunk::class,
			AfterImportJob::class
		]);

        // ...assert database has an unfinished `import_log` record.
        $this->assertDatabaseHas('import_logs', [
        	'import_id'    => $import->id,
        	'total_rows'   => 5,
        	'progress'     => 0,
            'log_file'     => storage_path("logs/imports/imports-{$import->id}.log"),
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
		Mail::fake();

		$import = $this->generateFakeImport();

		// When a new import job is imported...
        (new UserImport($import))
            ->import("imports/{$import->handle}.csv", null, Excel::CSV);

        // ...assert database has a completed `import_log` record...
        $this->assertDatabaseHas('import_logs', [
        	'import_id'    => $import->id,
        	'total_rows'   => 5,
        	'progress'     => 100,
        	'completed_at' => now()
        ]);

        // ...and completion mail was sent.
        Mail::assertSent(\App\Mail\ImportComplete::class, function($mail) use ($import) {
        	return $mail->import->id === $import->id;
        });
	}

	/**
     * @test
     * @group fusioncms
     * @group excel
     */
	public function an_import_will_populate_the_database()
	{
		$import = $this->generateFakeImport();

		// When a new import job is imported...
        (new UserImport($import))
            ->import("imports/{$import->handle}.csv", null, Excel::CSV);

        // ...assert database now has added records.
		$this->assertDatabaseHas('users', [
			'id'     => 1,
			'name'   => 'Janet Doe',
			'email'  => 'admin@example.com',
		]);

		$this->assertDatabaseHas('users', [
			'id'     => 2,
			'name'   => 'Ducky Consumer',
			'email'  => 'janedoe@example.com',
		]);

		$this->assertDatabaseHas('users', [
			'id'     => 3,
			'name'   => 'Justin Timberlake',
			'email'  => 'justin.timberlake@nsync.com',
		]);

		$this->assertDatabaseHas('users', [
			'id'     => 4,
			'name'   => 'Lance Bass',
			'email'  => 'lance.bass@nsync.com',
		]);
	}

	// ----

	protected function generateFakeImport()
    {
    	$import   = factory(Import::class)->states('users')->create();
    	$filepath = "imports/{$import->handle}.csv";
    	$contents = file_get_contents($import->location);

    	Storage::fake();
    	Storage::put($filepath, $contents);

    	return $import;
    }

	/*
	use Illuminate\Http\Testing\File;
	use PhpOffice\PhpSpreadsheet\IOFactory;

    protected function read(string $filePath, string $writerType)
    {
        $reader = IOFactory::createReader($writerType);

        return $reader->load($filePath);
    }

    protected function givenUploadedFile(string $filePath, string $filename = null): File
    {
        $filename = $filename ?? basename($filePath);

        // Create temporary file.
        $newFilePath = tempnam(sys_get_temp_dir(), 'import-');

        // Copy the existing file to a temporary file.
        copy($filePath, $newFilePath);

        return new File($filename, fopen($newFilePath, 'r'));
    }

    protected function readAsArray(string $filePath, string $writerType, int $sheetIndex = null)
    {
        $spreadsheet = $this->read($filePath, $writerType);
        if (null === $sheetIndex) {
            $sheet = $spreadsheet->getActiveSheet();
        } else {
            $sheet = $spreadsheet->getSheet($sheetIndex);
        }
        return $sheet->toArray();
    }
    */
}