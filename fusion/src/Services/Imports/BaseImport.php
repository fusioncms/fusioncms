<?php

namespace Fusion\Services\Imports;

use Exception;
use Fusion\Models\Import;
use Fusion\Models\ImportLog;
use Maatwebsite\Excel\Row;
use Illuminate\Support\Str;
use Fusion\Concerns\HasAttributes;
use Fusion\Concerns\HasCustomLogger;
use Fusion\Concerns\HasImportStrategies;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Events\AfterImport;
use Maatwebsite\Excel\Events\BeforeImport;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\Importable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;

class BaseImport implements ToCollection, WithChunkReading, WithHeadingRow, WithEvents, ShouldQueue
{
	use Importable, RegistersEventListeners, HasAttributes, HasCustomLogger, HasImportStrategies;

    /**
     * Import configuration.
     *
     * @var Fusion\Models\Import
     */
    protected $import;

    /**
     * Import log for this job.
     *
     * @var Fusion\Models\ImportLog
     */
    protected $log;

    /**
     * Current row index.
     *
     * @var integer
     */
    protected $rowIndex;

    /**
     * Total nimber of rows.
     *
     * @var integer
     */
    protected $totalRows;

    /**
     * Processed records.
     *
     * @var array
     */
    protected $processed = [];

    /**
     * Queue Chunk Size.
     *
     * @var integer
     */
    protected $chunkSize = 250;



    /**
     * Constructor.
     *
     * @param Import $import
     */
    public function __construct(Import $import, ImportLog $log)
    {
        $this->import = $import;
        $this->log    = $log;
    }

    /**
     * Persist each row manually.
     * (Alternative to using the ToModel concern.)
     *
     * @param  Row  $row
     * @return void
     */
    public function collection(Collection $rows)
    {
        // Pick up where we left off..
        $importLog       = $this->log->fresh();
        $this->rowIndex  = $importLog->next_row;
        $this->processed = $importLog->processed->toArray();

        foreach ($rows as $row) {
            ++$this->rowIndex;

            // Process row data..
            $this->process($row);
        }

        // Persist import log data..
        $importLog->next_row  = $this->rowIndex;
        $importLog->progress  = floor($this->rowIndex / $this->totalRows * 100);
        $importLog->processed = $this->processed;
        $importLog->save();
    }

    /**
     * Process single row of import.
     *
     * @param  Collection $row
     * @return void
     */
    protected function process(Collection $row)
    {
        $attributes = $this->setAttributes($row);

        if ($this->hasExistingId($attributes['id'])) {
            $this->processExistingRecord($attributes);
        } else {
            $this->processNewRecord($attributes);
        }
    }

    /**
     * Handle update of existing record.
     *
     * @param  array $attributes
     * @return void
     */
    protected function processExistingRecord(array $attributes)
    {
        $this->info("Existing record found [ID {$attributes['id']}].");

        // Mark existing processed, so we don't disable/delete it..
        $this->processed[] = $attributes['id'];

        // Skip row if only `create` import strategy has been selected..
        if ($this->onlyContainsStrategies('create')) {
            $this->notice("Row {$this->rowIndex} skipped due to existing record found and import strategy set to create only.");
            return;
        }

        // Continue if `update` import strategy has been selected..
        if ($this->containsStrategies('update')) {
            $this->info("Attempting to update existing record [row {$this->rowIndex}]:", $attributes);

            // Update existing record..
            try {
                $this->update($attributes);
                $this->info("Successfully updated record [ID {$attributes['id']}]!");
            } catch (ValidationException $ex) {
                $this->error("Failed to update record [ID {$attributes['id']}].", $ex->errors());
            }
        }
    }

    /**
     * Handle creation of new record.
     *
     * @param  array $attributes
     * @return void
     */
    protected function processNewRecord(array $attributes)
    {
        $this->info("New record:", $attributes);

        // Skip row if only `update` import strategy has been selected..
        if ($this->onlyContainsStrategies('update')) {
            $this->notice("Row {$this->rowIndex} skipped due to existing record not found and import strategy set to update only.");
            return;
        }

        // Continue if `create` import strategy has been selected..
        if ($this->containsStrategies('create')) {
            $this->info("Attempting to create new record [row {$this->rowIndex}].");

            // Create new record..
            try {
                $this->store($attributes);
                $this->info("Successfully created record [ID {$attributes['id']}]!");
            } catch (ValidationException $ex) {
                $this->error("Failed to create record [ID {$attributes['id']}].", $ex->errors());
            }
        }
    }

    /**
     * Save newly created record into storage.
     *
     * @param  array $attributes
     * @throws Exception
     * @return void
     */
    protected function store(array $attributes)
    {
        throw new Exception('Method not implemented!');
    }

    /**
     * Update existing record into storage.
     *
     * @param  array $attributes
     * @throws Exception
     * @return void
     */
    protected function update(array $attributes)
    {
        throw new Exception('Method not implemented!');
    }

    /**
     * Disable existing records in storage.
     *
     * @param  array $ids
     * @throws Exception
     * @return void
     */
    protected function disableCollection(array $ids)
    {
        throw new Exception('Method not implemented!');
    }

    /**
     * Remove existing records from storage.
     *
     * @param  array $ids
     * @throws Exception
     * @return void
     */
    protected function deleteCollection(array $ids)
    {
        throw new Exception('Method not implemented!');
    }

    /**
     * Collect existing records for Import Strategies.
     *
     * @throws Exception
     * @return void
     */
    protected function collectExistingIds()
    {
        throw new Exception('Method not implemented!');
    }

    /**
     * Returns read chunk size.
     *
     * @return int
     */
    public function chunkSize(): int
    {
        return $this->chunkSize;
    }

    /**
     * Event gets raised at the start of the process.
     *
     * @param  BeforeImport $event
     * @return void
     */
    public static function beforeImport(BeforeImport $event)
    {
        // Get instance data..
        $importable = $event->getConcernable();
        $import     = $importable->import;
        $reader     = $event->getReader();

        // Set field casts..
        $importable->setCasts();

        // Record total number of rows for progress watch..
        $importable->totalRows = collect($reader->getTotalRows())->first();
        $importable->totalRows = $importable->totalRows - 1;  // Exclude header row

        // Setup logger..
        $importable->createLogger("logs/imports/imports-{$importable->log->id}.log");

        // Update import log record..
        $importable->log->update([
            'total_rows' => $importable->totalRows,
            'log_file'   => $importable->logPath,
            'status'     => 'running'
        ]);

        // Collect existing records for import strategies..
        $importable->setExistingIds($importable->collectExistingIds());

        $importable->info("Starting import process for Import #{$import->id}");
    }

    public static function afterImport(AfterImport $event)
    {
        // Get instance data..
        $importable = $event->getConcernable();
        $import     = $importable->import;
        $importLog  = $importable->log->fresh();

        $importable->info("Finalizing import process for Import #{$import->id}");

        /*
            Delete or disable unprocessed records
         */

        // Handle unprocessed records in storage.
        $unprocessed   = array_diff($importable->existingIds, $importLog->processed->toArray());
        $shouldDisable = $importable->containsStrategies('disable');
        $shouldDelete  = $importable->containsStrategies('delete');

        if ($unprocessed and ($shouldDisable or $shouldDelete)) {
            if ($shouldDisable) {
                $importable->info('Disabling existing records:', $unprocessed);

                $importable->disableCollection($unprocessed);
            } else {
                $importable->info('Deleting existing records:', $unprocessed);

                $importable->deleteCollection($unprocessed);
            }
        }

        // Finialize ImportLog record.
        $importLog->update([
            'status'       => 'complete',
            'completed_at' => now()
        ]);
    }

    /**
     * Save field casts for easy access.
     *
     * @return void
     */
    private function setCasts()
    {
        $this->import->mappings->each(function($item) {
            $this->setCast($item['handle'], $item['cast']);
        });
    }

    /**
     * Set attributes for easy access.
     *
     * @param  Collection $row
     * @return array
     */
    private function setAttributes(Collection $row)
    {
        $this->import->mappings->each(function($item) use ($row) {
            $this->setAttribute(
                $item['handle'],
                $row->get(Str::slug($item['column'], '_'), $item['default'])
            );
        });

        return $this->getAttributes();
    }

    /**
     * The job failed to process.
     *
     * @param  Exception  $exception
     * @return void
     */
    public function failed(Exception $exception)
    {
        $this->log->update(['status' => 'failed']);
    }
}