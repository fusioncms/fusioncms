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
use App\Models\ImportLog;
use Maatwebsite\Excel\Row;
use App\Concerns\HasAttributes;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\OnEachRow;
use Maatwebsite\Excel\Events\AfterImport;
use Maatwebsite\Excel\Events\BeforeImport;
use Maatwebsite\Excel\Events\ImportFailed;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\Importable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;

class BaseImport implements OnEachRow, WithChunkReading, WithHeadingRow, WithEvents, ShouldQueue
{
	use Importable, RegistersEventListeners, HasAttributes;

	/**
     * Import configuration.
     * 
     * @var App\Models\Import
     */
    protected $import;

    /**
     * Import log.
     * 
     * @var App\Models\ImportLog
     */
    protected $log;

    /**
     * Current row index.
     * 
     * @var integer
     */
    protected $rowIndex;

    /**
     * Total row count.
     * 
     * @var integer
     */
    protected $totalRows;

    /**
     * Progress bar.
     * 
     * @var integer
     */
    protected $progress;
    
    /**
     * Queue Chunk Size.
     * 
     * @var integer
     */
    protected $chunkSize = 1000;

    /**
     * Constructor.
     * 
     * @param Import $import
     */
    public function __construct(Import $import)
    {
        $this->import = $import;

        $this->import->mappings->each(function($item) {
            $this->setCast($item['handle'], $item['cast']);
        });
    }
    /**
     * Persist each row manually.
     * (Alternative to using the ToModel concern.)
     * 
     * @param  Row  $row
     * @return void
     */
    public function onRow(Row $row)
    {
        $this->rowIndex = $row->getIndex();

        $row = $row->toArray();

        $this->updateProgress();

        // Save attributes..
        $this->import->mappings->each(function($item) use ($row) {
            $this->setAttribute(
                $item['handle'],
                $row[$item['column']] ?? @$item['default']
            );
        });

        // Validate and persist..
        if ($this->validate()) {
            $this->handle();
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
     * Persist data.
     *
     * @throws Exception
     * @return void
     */
    public function handle()
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
     * Run validation on current row attributes.
     * 
     * @return boolean
     */
    protected function validate()
    {
        $validator = validator(
        	$this->getAttributes(),
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
     * Handles `onError` events.
     *
     * @param  MessageBag $errors
     * @return void
     */
    protected function onError($errors)
    {
        \Log::error("Import:{$this->import->id}:{$this->rowIndex} errors found:", $errors->all());
    }

    /**
     * Update progress.
     * 
     * @return void
     */
    protected function updateProgress()
    {
        $progress = floor($this->rowIndex / $this->totalRows) * 100;

        if ($progress % 5 == 0) {
            $this->log->update(['progress' => $progress]);
        }
    }

    /**
     * Event gets raised at the start of the process.
     * 
     * @param  BeforeImport $event [description]
     * @return void
     */
    public static function beforeImport(BeforeImport $event)
    {
        $import    = $event->getConcernable()->import;
        $totalRows = collect($event->reader->getTotalRows())->first();

        $log = ImportLog::create([
            'import_id'  => $import->id,
            'total_rows' => $totalRows
        ]);

        $event->getConcernable()->log       = $log;
        $event->getConcernable()->totalRows = $totalRows;
    }

    /**
     * Event gets raised at the end of the process.
     * 
     * @param  AfterImport $event
     * @return void
     */
    public static function afterImport(AfterImport $event)
    {
        $log = $event->getConcernable()->log;

        $log->update([
            'progress'     => 100,
            'completed_at' => now()
        ]);

        \Mail::to('admin@example.com')
            ->send(new \App\Mail\ImportComplete($event->getConcernable()->import));
    }

    /**
     * Handle failed job.
     * 
     * @param  ImportFailed $event
     * @return void
     */
    public static function importFailed(ImportFailed $event)
    {
        $import = $event->getConcernable()->import;

        \Log::error("Import:{$import->id}: failed!");
    }
}