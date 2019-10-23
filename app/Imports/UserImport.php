<?php

namespace App\Imports;

use App\ModelsUser;
use Maatwebsite\Excel\Row;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Events\AfterImport;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\SkipsFailures;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;

class UserImport implements ToModel,
                            WithBatchInserts,
                            WithChunkReading,
                            WithHeadingRow,
                            WithValidation,
                            SkipsOnFailure
{
    use Importable, SkipsFailures, RegistersEventListeners;

    protected $batchSize = 1000;
    protected $chunkSize = 1000;

    public function model(array $row)
    {
        dd($row);
        // return new User([
        //     'name' => $row['name'],
        // ]);
    }

    /**
     * Row validation rules
     * 
     * @return array
     */
    public function rules(): array
    {
        return [];
    }

    public function batchSize(): int
    {
        return $this->batchSize;
    }

    public function chunkSize(): int
    {
        return $this->chunkSize;
    }

    public static function afterImport(AfterImport $event)
    {
        // TODO: Notify user of completed import
    }
}
