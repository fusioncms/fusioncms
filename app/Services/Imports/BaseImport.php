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
use App\Concerns\HasAttributes;
use Maatwebsite\Excel\Concerns\OnEachRow;
use Maatwebsite\Excel\Events\AfterImport;
use Maatwebsite\Excel\Concerns\Importable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;

class BaseImport implements OnEachRow, WithChunkReading, WithHeadingRow //, ShouldQueue
{
	use Importable, RegistersEventListeners, HasAttributes;

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

        // Save attributes..
        $this->import->mappings->each(function($item) use ($row) {
            $this->setAttribute(
                $item['handle'],
                $row[$item['column']] ?? @$item['default']
            );
        });

        dd($this->attributes, $this->casts);

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

    public static function afterImport(AfterImport $event)
    {
        // TODO: Notify user of completed import
    }
}