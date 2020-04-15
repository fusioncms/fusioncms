<?php

namespace Fusion\Services\Exports;

use Fusion\Models\User;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Excel;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;

class DummyUserExport implements FromArray, WithHeadings, WithMapping
{
	use Exportable;

	/**
	 * Optional Writer Type
	 *
	 * @var string
	 */
    private $writerType = Excel::CSV;

    /**
    * Optional headers
    *
    * @var arry
    */
    private $headers = [
        'Content-Type' => 'text/csv',
    ];

	/**
	 * Set headings for export.
	 *
	 * @return array
	 */
	public function headings(): array
	{
		return [
			'ID',
			'Name',
			'Email',
			'Password',
			'Status',
		];
	}

	public function map($row): array
    {
    	static $index = 0;

    	return [
    		++$index,
    		$row['name'],
    		$row['email'],
    		Str::random(20),
    		$row['status'],
    	];
    }

	public function array(): array
	{
		return factory(User::class, 10000)->make()->toArray();
	}
}