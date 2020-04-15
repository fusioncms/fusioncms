<?php

namespace Fusion\Services\Imports;

use Maatwebsite\Excel\Concerns\WithLimit;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Imports\HeadingRowFormatter;

class PreviewImport implements WithStartRow, WithLimit, WithMapping
{
    use Importable;

    /**
     * @var int
     */
    private $rowIndex;

    /**
     * Generates row data for `startRow` until `limit` number of rows.
     *
     * @param int $startRow
     * @param int $limit
     */
    public function __construct(int $startRow = 1, int $limit = 5)
    {
        $this->startRow  = $startRow;
        $this->limit     = $limit;
        $this->rowIndex  = 0;
    }

    /**
     * Starting row.
     *
     * @return int
     */
    public function startRow(): int
    {
        return $this->startRow;
    }

    /**
     * Number of rows to include.
     *
     * @return int
     */
    public function limit(): int
    {
        return $this->limit;
    }

    /**
     * Row Mapping.
     *
     * @param  mixed $row
     * @return array
     */
    public function map($row): array
    {
        if (++$this->rowIndex == $this->startRow)
            $row = HeadingRowFormatter::format($row);

        return $row;
    }
}
