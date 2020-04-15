<?php

namespace Fusion\Fieldtypes;

use File;
use Fusion\Models\Field;
use Fusion\Models\Taxonomy;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use Fusion\Http\Resources\TermResource;

class TaxonomyFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Taxonomy';

    /**
     * @var string
     */
    public $icon = 'sitemap';

    /**
     * @var string
     */
    public $description = 'Relate and organize under a taxonomy.';

    /**
     * @var array
     */
    public $settings = [
        'taxonomy' => null
    ];

    /**
     * @var array
     */
    public $rules = [
        'settings.taxonomy' => 'required'
    ];

    /**
     * @var array
     */
    public $attributes = [
        'settings.taxonomy' => 'taxonomy'
    ];

    /**
     * @var string
     */
    public $relationship = 'morphToMany';

    /**
     * @var string
     */
    public $namespace = 'Fusion\Models\Taxonomies';

    /**
     * Generate relationship methods for associated Model.
     *
     * @param  Fusion\Models\Field $field
     * @return string
     */
    public function generateRelationship($field)
    {
        $model     = Taxonomy::find($field->settings['taxonomy']);
        $namespace = $this->namespace . '\\' . Str::studly($model->handle);
        $stub      = File::get(fusion_path("/stubs/relationships/{$this->relationship}.stub"));

        return strtr($stub, [
            '{handle}'            => $field->handle,
            '{studly_handle}'     => Str::studly($field->handle),
            '{related_pivot_key}' => $model->handle . '_id',
            '{related_namespace}' => $namespace,
            '{related_table}'     => $model->pivot_table,
            '{where_clause}'      => "->where('field_id', {$field->id})",
            '{order_clause}'      => '',
        ]);
    }

    /**
     * Update relationship data in storage.
     *
     * @param  Illuminate\Eloquent\Model  $model
     * @param  Fusion\Models\Field           $field
     * @return void
     */
    public function persistRelationship($model, Field $field)
    {
        $oldValues = $model->{$field->handle}->pluck('id');
        $newValues = collect(request()->input($field->handle))->mapWithKeys(function($id) use ($field) {
            return [
                $id => ['field_id' => $field->id]];
        });

        $model->{$field->handle}()->detach($oldValues);
        $model->{$field->handle}()->attach($newValues);
    }

    /**
     * Returns resource object of field.
     *
     * @param  Illuminate\Eloquent\Model  $model
     * @param  Fusion\Models\Field           $field
     * @return TermResource
     */
    public function getResource($model, Field $field)
    {
        return TermResource::collection($this->getValue($model, $field));
    }
}
