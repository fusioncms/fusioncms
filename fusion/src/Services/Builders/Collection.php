<?php

namespace Fusion\Services\Builders;

use Fusion\Models\Matrix;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use Fusion\Contracts\Builder as BuilderContract;

class Collection extends Builder implements BuilderContract
{
    /**
     * @var string
     */
    protected $matrix;

    /**
     * @var string
     */
    protected $namespace = 'Fusion\Models\Matrix';

    protected $model;

    /**
     * Create a new Page instance.
     *
     * @param  string  $matrix
     */
    public function __construct($matrix)
    {
        parent::__construct();

        $this->matrix = Matrix::where('handle', $matrix)->firstOrFail();
        $this->model  = $this->make();
    }

    /**
     * Make a new matrix model instance.
     */
    public function make()
    {
        $className     = Str::studly($this->matrix->handle);
        $traits        = [];
        $fillable      = ['matrix_id', 'parent_id', 'name', 'slug', 'status'];
        $casts         = ['status' => 'boolean'];
        $fields        = [];

        if ($this->matrix->fieldset) {
            $fields = $this->matrix->fieldset->fields->reject(function ($field) {
                $fieldtype = fieldtypes()->get($field->type);

                if ($fieldtype->hasRelationship()) {
                    $this->addRelationship($field, $fieldtype);
                }

                return is_null($fieldtype->column);
            });

            foreach ($fields as $field) {
                $fieldtype  = fieldtypes()->get($field->type);
                $fillable[] = $field->handle;
                $casts[]    = $field->handle . '\' => \'' . $fieldtype->cast;
            }
        }

        $path = fusion_path('/src/Models/Collections/'.$className.'.php');
        $stub = File::get(fusion_path('/stubs/matrices/collection.stub'));

        $contents = strtr($stub, [
            '{class}'         => $className,
            '{matrix_id}'     => $this->matrix->id,
            '{handle}'        => $this->matrix->handle,
            '{fillable}'      => '[\'' . implode('\', \'', $fillable) . '\']',
            '{casts}'         => '[\'' . implode('\', \'', $casts) . '\']',
            '{with}'          => '[\'' . implode('\', \'', $this->getWith()) . '\']',
            '{dates}'         => '[\'' . implode('\', \'', $this->getDates()) . '\']',
            '{references}'    => '[\'' . implode('\', \'', $this->getReferences($fields)) . '\']',
            '{trait_classes}' => $this->getTraitImportStatements($traits),
            '{traits}'        => $this->getTraitUseStatements($traits),
            '{relationships}' => $this->generateRelationships(),
        ]);

        File::put($path, $contents);

        return app()->make('Fusion\Models\Collections\\'. $className);
    }

    /**
     * Get the collection.
     */
    public function get()
    {
        return $this->model->where('matrix_id', $this->matrix->id)->firstOrCreate(['matrix_id' => $this->matrix->id]);
    }
}
