<?php

namespace Fusion\Services\Imports;

use Fusion\Models\Import;
use Fusion\Models\Matrix;
use Fusion\Models\ImportLog;
use Fusion\Services\Builders\Collection as Builder;

class MatrixImport extends BaseImport
{
    /**
     * Taxonomy record.
     *
     * @var \Fusion\Models\Matrix
     */
    protected $matrix;

    /**
     * Matrix collection to import into.
     *
     * @var \Fusion\Models\Matrix\{$import->handle}
     */
    protected $collection;

    /**
     * Constructor.
     *
     * @param Import $import
     */
    public function __construct(Import $import, ImportLog $log)
    {
        parent::__construct($import, $log);

        $this->matrix     = Matrix::findOrFail($import->group);
        $this->collection = (new Builder($this->matrix->handle))->make();
    }

    /**
     * Collect existing records for Import Strategies.
     *
     * @throws Exception
     * @return void
     */
    protected function collectExistingIds()
    {
        return $this->collection->all()->modelKeys();
    }

    /**
     * Store newly created record in storage.
     *
     * @param  array $attributes
     * @return void
     */
    protected function store(array $attributes)
    {
        fusion()
            ->authorize()
            ->dethrottle()
            ->post(
                "collections/{$this->matrix->slug}",
                $attributes
            );
    }

    /**
     * Update existing record in storage.
     *
     * @param  array $attributes
     * @return void
     */
    protected function update(array $attributes)
    {
        fusion()
            ->authorize()
            ->dethrottle()
            ->patch(
                "collections/{$this->matrix->slug}/{$attributes['id']}",
                $attributes
            );
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
        if (count($ids)) {
            foreach ($ids as $id) {
                $this->collection->where('id', $id)->update(['status' => false]);
            }
        }
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
        if (count($ids)) {
            $this->collection->destroy($ids);
        }
    }
}
