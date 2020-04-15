<?php

namespace Fusion\Services\Exports;

use Illuminate\Support\Str;
use Maatwebsite\Excel\Excel;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;

class DummyCollectionExport implements FromArray, WithHeadings, WithMapping
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
     * @var Faker\Factory
     */
    private $faker;


    public function __construct()
    {
    	$this->faker = \Faker\Factory::create();
    }

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
			'Slug',
			'Summary',
			'Text',
			'Status',
		];
	}

	public function map($row): array
    {
    	static $index = 0;

    	return [
    		++$index,
    		$row['name'],
    		$row['slug'],
    		$row['summary'],
    		$row['text'],
    		$row['status'],
    	];
    }

	public function array(): array
	{
		$items = [];

		for ($i = 0; $i < 1000; ++$i) {
			$items[] = [
				'name'     => ($name = $this->faker->unique()->words(2, true)),
				'slug'     => Str::slug($name, '_'),
				'summary'  => $this->faker->text(250) ,
				'text'     => $this->faker->sentences(5, true),
				'status'   => $this->faker->boolean(75),
			];
		}

		return $items;
	}
}