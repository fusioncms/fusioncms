<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Services\Imports;

use App\Models\Import;
use Maatwebsite\Excel\Row;
use Illuminate\Support\Str;
use App\Concerns\HasAttributes;
use App\Concerns\HasCustomLogger;
use App\Concerns\HasImportStrategies;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Events\AfterImport;
use Maatwebsite\Excel\Events\BeforeImport;
use Maatwebsite\Excel\Events\ImportFailed;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\Importable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;

class BaseImport implements ToCollection, WithChunkReading, WithHeadingRow, WithEvents, ShouldQueue
{
	use Importable, RegistersEventListeners, HasAttributes, HasCustomLogger, HasImportStrategies;

    /**
     * Import configuration.
     * 
     * @var App\Models\Import
     */
    protected $import;

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
    protected $chunkSize = 10;

    /**
     * Constructor.
     * 
     * @param Import $import
     */
    public function __construct(Import $import)
    {
        $this->import = $import;
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
            $this->rowIndex += 1;

            $attributes = $this->setAttributes($row);

            // Validate and strategize persistence..
            if ($this->validate($attributes)) {
                $this->strategize($attributes);
            }
        }

        // Persist import log data..
        $importLog->next_row  = $this->rowIndex;
        $importLog->progress  = floor($this->rowIndex / $this->totalRows * 100);
        $importLog->processed = $this->processed;
        $importLog->save();
    }

    /**
     * Run validation on current row attributes.
     *
     * @param  array $attributes
     * @return boolean
     */
    protected function validate($attributes)
    {
        $validator = validator(
            $attributes,
            $this->rules(),
            $this->messages()
        );

        if ($validator->fails()) {
            $this->onError($validator->errors());
            
            return false;
        }

        return true;
    }

    /**
     * Strategize data persistence.
     *
     * @param  array $attributes
     * @return void
     */
    protected function strategize($attributes)
    {
        if ($this->hasExistingId($attributes['id'])) {
            /*
                Existing record found
             */
            $this->info("Existing record found [ID {$attributes['id']}].");
            
            // Mark existing processed, so we don't disable/delete it..
            $this->processed[] = $attributes['id'];

            if ($this->onlyContainsStrategies('create')) {
                $this->notice("Row {$this->rowIndex} skipped due to existing record found and import strategy set to create only.");
                return;
            } else {
                if ($this->containsStrategies('update')) {
                    // Update existing record..
                    $this->info("Updating existing record [row {$this->rowIndex}]:", $attributes);
                    $this->update($attributes);
                }
            }
        } else {
            /*
                New record may need to be created
             */
            $this->info("New record:", $attributes);

            if ($this->onlyContainsStrategies('update')) {
                $this->notice("Row {$this->rowIndex} skipped due to existing record not found and import strategy set to update only.");
                return;
            } elseif ($this->containsStrategies('create')) {
                // Create new record..
                $this->info("Creating new record [row {$this->rowIndex}].");
                $this->store($attributes);
            }
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [];
    }

    /**
     * Set custom attributes for validator errors.
     *
     * @return array
     */
    public function messages()
    {
        return [];
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
     * Handles `onError` events.
     *
     * @param  MessageBag $errors
     * @return void
     */
    protected function onError($errors)
    {
        $this->error("Errors was found on row: {$this->rowIndex}", $errors->all());
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
        
        // Setup logger..
        $importable->createLogger("logs/imports/imports-{$import->id}.log");
        $importable->createLogRecord();

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
            'progress'     => 100,
            'completed_at' => now()
        ]);
    }

    /**
     * Handle failed job.
     * 
     * @param  ImportFailed $event
     * @return void
     */
    public static function importFailed(ImportFailed $event)
    {
        Log::error(static::class . ": " . $event->getException()->getMessage());
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
}