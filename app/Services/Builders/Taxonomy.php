<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Services\Builders;

use App\Models\Field;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use App\Models\Taxonomy as TaxonomyModel;
use App\Contracts\Builder as BuilderContract;

class Taxonomy extends Builder implements BuilderContract
{
    /**
     * @var string
     */
    protected $taxonomy;

    /**
     * @var string
     */
    protected $namespace = 'App\Models\Taxonomy';

    /**
     * @var \App\Database\Eloquent\Model
     */
    protected $model;

    /**
     * Create a new Page instance.
     *
     * @param  string  $taxonomy
     */
    public function __construct($taxonomy)
    {
        parent::__construct();

        $this->taxonomy = TaxonomyModel::where('handle', $taxonomy)->firstOrFail();
        $this->model    = $this->make();
    }

    /**
     * Make a new taxonomy model instance.
     */
    public function make()
    {
        $className = Str::studly($this->taxonomy->handle);
        $traits    = [];
        $fillable  = ['taxonomy_id', 'parent_id', 'name', 'slug', 'status'];
        $casts     = [];

        if ($this->taxonomy->fieldset) {
            $fields    = $this->taxonomy->fieldset->fields->reject(function ($field) {
                $fieldtype = fieldtypes()->get($field->type);

                if ($fieldtype->hasRelationship()) {
                    $this->addRelationship($field, $fieldtype);
                }

                return is_null($fieldtype->column);
            });

            foreach ($fields as $field) {
                $fieldtype = fieldtypes()->get($field->type);
                $fillable[] = $field->handle;
                $casts[]    = $field->handle . '\' => \'' . $fieldtype->cast ;
            }
        }

        $path     = app_path('Models/Taxonomies/' . $className . '.php');
        $stub     = File::get(resource_path('stubs/taxonomy.stub'));

        $contents = strtr($stub, [
            '{class}'         => $className,
            '{handle}'        => $this->taxonomy->handle,
            '{fillable}'      => '[\'' . implode('\', \'', $fillable) . '\']',
            '{casts}'         => '[\'' . implode('\', \'', $casts) . '\']',
            '{with}'          => '[\'' . implode('\', \'', $this->getWith()) . '\']',
            '{dates}'         => '[\'' . implode('\', \'', $this->getDates()) . '\']',
            '{trait_classes}' => $this->getTraitImportStatements($traits),
            '{traits}'        => $this->getTraitUseStatements($traits),
            '{taxonomy_id}'   => $this->taxonomy->id,
            '{relationships}' => $this->generateRelationships(),
        ]);

        File::put($path, $contents);

        if (! config('app.debug')) {
            register_shutdown_function(function () use ($path) {
                if (file_exists($path)) {
                    unlink($path);
                }
            });
        }

        return app()->make('App\Models\Taxonomies\\'. $className);
    }

    /**
     * Get the taxonomy.
     */
    public function get()
    {
        return $this->model->where('taxonomy_id', $this->taxonomy->id)->firstOrCreate(['taxonomy_id' => $this->taxonomy->id]);
    }

    public function generateRelationships()
    {
        $generated     = '';
        $relationships = [];
        $morphedBy     = Field::with('section.fieldset')
            ->where('type', 'taxonomy')
            ->where('settings->taxonomy', $this->taxonomy->id)
            ->get();

        if ($morphedBy->isEmpty()) {
            return parent::generateRelationships();
        }

        foreach ($morphedBy as $field) {
            $models = $this->getFieldsettables($field->section->fieldset);

            foreach ($models as $model) {
                /**
                 * Note:
                 * Add relationship method only once
                 *   per `$model->handle`.
                 * 
                 */
                if (! in_array($model->handle, $relationships)) {
                    array_push($relationships, $model->handle);

                    $namespace = (new \ReflectionClass($model->getBuilder()))->getName();
                    $stub      = File::get(resource_path('stubs/relationships/morphedByMany.stub'));

                    $contents = strtr($stub, [
                        '{handle}'            => $model->handle,
                        '{related_namespace}' => $namespace,
                        '{related_table}'     => $this->taxonomy->pivot_table,
                    ]);

                    $generated .= $contents."\n\n";
                }
            }
        }

        return trim($generated .= parent::generateRelationships());
    }
}
