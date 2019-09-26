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

use App\Models\Matrix;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use App\Contracts\Builder as BuilderContract;

class Page extends Builder implements BuilderContract
{
    /**
     * @var string
     */
    protected $matrix;

    /**
     * @var string
     */
    protected $namespace = 'App\Models\Matrix';

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
        $className = Str::studly($this->matrix->handle);
        $traits    = [];
        $fillable  = ['matrix_id', 'status'];

        if (isset($this->matrix->fieldset->fields)) {
            $fields    = $this->matrix->fieldset->fields->reject(function ($field) {
                $fieldtype = fieldtypes()->get($field->type);

                return is_null($fieldtype->column);
            });

            foreach ($fields as $field) {
                $fillable[] = $field->handle;
            }
        }

        $path     = app_path('Models/Pages/' . $className . '.php');
        $stub     = File::get(resource_path('stubs/matrix/page.stub'));
        $contents = strtr($stub, [
            '{class}'         => $className,
            '{handle}'        => $this->matrix->handle,
            '{fillable}'      => '[\'' . implode('\', \'', $fillable) . '\']',
            '{with}'          => $this->getWith(),
            '{trait_classes}' => $this->getTraitImportStatements($traits),
            '{traits}'        => $this->getTraitUseStatements($traits),
            '{matrix_id}'     => $this->matrix->id,
        ]);

        File::put($path, $contents);

        if (! config('app.debug')) {
            register_shutdown_function(function () use ($path) {
                if (file_exists($path)) {
                    unlink($path);
                }
            });
        }

        return app()->make('App\Models\Pages\\' . $className);
    }

    /**
     * Get the page.
     */
    public function get()
    {
        return $this->model->where('matrix_id', $this->matrix->id)->firstOrCreate(['matrix_id' => $this->matrix->id]);
    }

    /**
     * Update the page in the database.
     *
     * @param  array  $attributes
     * @param  array  $options
     * @return bool
     */
    public function update(array $attributes = [], array $options = [])
    {
        $page                    = $this->get();
        $attributes['matrix_id'] = $this->matrix->id;

        $fields = $this->matrix->fieldset->fields->reject(function ($field) {
            $fieldtype = fieldtypes()->get($field->type);

            return is_null($fieldtype->column);
        });

        foreach ($fields as $field) {
            $page->{$field->handle} = $attributes[$field->handle];
        }

        $page->status = $attributes['status'];

        $page->save();
    }
}
