<?php

namespace Fusion\Services\Imports;

use Fusion\Models\Import;
use Fusion\Models\Taxonomy;
use Fusion\Models\ImportLog;
use Fusion\Services\Builders\Taxonomy as Builder;

class TaxonomyImport extends BaseImport
{
    /**
     * Taxonomy record.
     *
     * @var \Fusion\Models\Taxonomy
     */
    protected $taxonomy;

    /**
     * Taxonomy terms to import into.
     *
     * @var \Fusion\Models\Taxonomies\{$import->handle}
     */
    protected $terms;

    /**
     * Constructor.
     *
     * @param Import $import
     */
    public function __construct(Import $import, ImportLog $log)
    {
        parent::__construct($import, $log);

        $this->taxonomy = Taxonomy::findOrFail($import->group);
        $this->terms    = (new Builder($this->taxonomy->handle))->make();
    }

    /**
     * Collect existing records for Import Strategies.
     *
     * @throws Exception
     * @return void
     */
    protected function collectExistingIds()
    {
        return $this->terms->all()->modelKeys();
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
            ->post(
                "taxonomies/{$this->taxonomy->slug}",
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
            ->patch(
                "taxonomies/{$this->taxonomy->slug}/{$attributes['id']}",
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
                $this->terms->where('id', $id)->update(['status' => false]);
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
            $this->terms->destroy($ids);
        }
    }
}
