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
use App\Models\Form as FormModel;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use App\Contracts\Builder as BuilderContract;

class Form extends Builder implements BuilderContract
{
    /**
     * @var string
     */
    protected $form;

    /**
     * @var string
     */
    protected $namespace = 'App\Models\Form';

    /**
     * @var \App\Database\Eloquent\Model
     */
    protected $model;

    /**
     * Create a new Form instance.
     *
     * @param  string  $form
     */
    public function __construct($form)
    {
        parent::__construct();

        $this->form  = FormModel::where('handle', $form)->firstOrFail();
        $this->model = $this->make();
    }

    /**
     * Make a new form model instance.
     */
    public function make()
    {
        $className = Str::studly($this->form->handle);
        $traits    = [];
        $fillable  = ['form_id', 'identifiable_ip_address'];
        $casts     = [];

        if ($this->form->fieldset) {
            $fields    = $this->form->fieldset->fields->reject(function ($field) {
                $fieldtype = fieldtypes()->get($field->type);

                return is_null($fieldtype->column);
            });

            foreach ($fields as $field) {
                $fieldtype  = fieldtypes()->get($field->type);
                $fillable[] = $field->handle;
                $casts[]    = $field->handle . '\' => \'' . $fieldtype->cast ;
            }
        }

        $path = app_path('Models/Forms/' . $className . '.php');
        $stub = File::get(resource_path('stubs/form.stub'));

        $contents = strtr($stub, [
            '{class}'         => $className,
            '{handle}'        => $this->form->handle,
            '{fillable}'      => '[\'' . implode('\', \'', $fillable) . '\']',
            '{casts}'         => '[\'' . implode('\', \'', $casts) . '\']',
            '{with}'          => '[\'' . implode('\', \'', $this->getWith()) . '\']',
            '{dates}'         => '[\'' . implode('\', \'', $this->getDates()) . '\']',
            '{trait_classes}' => $this->getTraitImportStatements($traits),
            '{traits}'        => $this->getTraitUseStatements($traits),
            '{form_id}'       => $this->form->id,
            '{relationships}' => $this->generateRelationships(),
        ]);

        File::put($path, $contents);

        register_shutdown_function(function () use ($path) {
            if (file_exists($path)) {
                unlink($path);
            }
        });

        return app()->make('App\Models\Forms\\'. $className);
    }

    /**
     * Get the form.
     */
    public function get()
    {
        return $this->model->where('form_id', $this->form->id)->firstOrCreate(['form_id' => $this->form->id]);
    }
}
