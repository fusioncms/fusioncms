<?php

namespace Fusion\Services\Exports;

use Fusion\Models\Taxonomy;
use Maatwebsite\Excel\Excel;
use Fusion\Database\Eloquent\Model;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMapping;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Fusion\Services\Builders\Taxonomy as Builder;

class TaxonomyExport implements FromQuery, WithHeadings, WithMapping, ShouldQueue
{
	use Exportable;

	/**
	 * @var Taxonomy
	 */
	private $taxonomy;

	/**
	 * @var Term
	 */
	private $term;

	/**
	 * @var Fieldset
	 */
	private $fieldset;

	/**
	 * Optional Writer Type
	 *
	 * @var string
	 */
    private $writerType = Excel::XLSX;

    /**
    * Optional headers
    *
    * @var arry
    */
    private $headers = [
        'Content-Type' => 'text/csv',
    ];

    /**
     * Constructor
     *
     * @param Taxonomy $taxonomy
     */
	public function __construct(Taxonomy $taxonomy)
	{
		$this->taxonomy = $taxonomy;
		$this->fieldset = $taxonomy->fieldset;
		$this->term     = (new Builder($taxonomy->handle))->make();
	}

	/**
	 * Set headings for export.
	 *
	 * @return array
	 */
	public function headings(): array
	{
		$headings = [
			'ID',
			'Name',
			'Slug',
			'Status'
		];

		if ($this->fieldset) {
			foreach ($this->fieldset->fields as $field) {
				array_push($headings, $field->name);
			}
		}

		return $headings;
	}

	/**
	 * Map each row's values.
	 *
	 * @param  Term $row
	 * @return array
	 */
	public function map($row): array
	{
		$mappings = [
			$row->id,
			$row->name,
			$row->slug,
			$row->status,
		];

		if ($this->fieldset) {
			foreach ($this->fieldset->fields as $field) {
				array_push($mappings, $row->{$field->handle});
            }
		}

		return $mappings;
	}

	/**
	 * Provide query to be executed in chunks.
	 *
	 * @return Builder
	 */
	public function query()
	{
		return $this->term->query();
	}
}