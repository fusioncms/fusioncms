<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Fieldtypes;

use File;
use App\Models\Taxonomy;
use Illuminate\Support\Str;

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
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $settings = [
        // 
    ];

    /**
     * @var array
     */
    public $column = null;

    // The following three public properties are
    // required for setting up fieldtypes
    // that generate relationships.

    /**
     * @var string
     */
    public $relationship = 'morphToMany';

    /**
     * @var string
     */
    public $namespace = 'App\Models\Taxonomies';

    /**
     * Generate relationship methods for associated Model.
     *
     * @param  App\Models\Field $field
     * @return string
     */
    public function generateRelationship($field)
    {
        $model     = Taxonomy::find($field->settings['taxonomy']);
        $namespace = 'App\Models\Taxonomies\\' . Str::studly($model->handle);
        $stub      = File::get(resource_path('stubs/relationships/morphToMany.stub'));

        return strtr($stub, [
            '{handle}'            => $field->handle,
            '{studly_handle}'     => Str::studly($field->handle),
            '{related_pivot_key}' => $field->handle . '_id',
            '{related_namespace}' => 'App\Models\Taxonomy',
            '{related_table}'     => $model->pivot_table,
        ]);
    }

    /**
     * Update relationship data in storage.
     * 
     * @param  Illuminate\Eloquent\Model  $model
     * @param  App\Models\Field           $field
     * @return void
     */
    public function updateRelationship($model, $field)
    {
        $model->{$field->handle}()->sync(request()->input($field->handle));
    }
}
