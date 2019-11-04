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
use App\Models\Taxonomy;
use App\Services\Builders\Taxonomy as Builder;

class TaxonomyImport extends BaseImport
{
    /**
     * Taxonomy record.
     * 
     * @var \App\Models\Taxonomy
     */
    protected $taxonomy;

    /**
     * Taxonomy collection to import into.
     * 
     * @var \App\Models\Taxonomies\{$import->handle}
     */
    protected $collection;

    /**
     * Constructor.
     * 
     * @param Import $import
     */
    public function __construct(Import $import)
    {
        parent::__construct($import);

        $this->taxonomy   = Taxonomy::findOrFail($import->group);
        $this->collection = (new Builder($this->taxonomy->handle))->make();
    }
    
    /**
     * Row validation rules.
     * [override]
     * 
     * @return array
     */
    public function rules()
    {
        $rules = [
            'id'     => 'sometimes|integer',
            'name'   => 'required',
            'slug'   => 'required',
            'status' => 'required|boolean',
        ];

        if(isset($taxonomy->fieldset)) {
            $fields = $taxonomy->fieldset->database();

            foreach ($fields as $field) {
                $rules[$field->handle] = 'sometimes';
            }
        }

        return $rules;
    }

    /**
     * Set custom attributes for validator errors.
     * [override]
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
     * @return void
     */
    public function handle()
    {
        $attributes                = $this->getAttributes();
        $attributes['taxonomy_id'] = $this->taxonomy->id;

        // $relationships = $taxonomy->fieldset->relationships();
        // foreach ($relationships as $relationship) {
        //     $term->{$relationship->handle}()->sync($request->input($relationship->handle));
        // }
        $this->collection->updateOrCreate(
            ['id' => $attributes['id']],
            $attributes
        );
    }
}
