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

use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use App\Models\Extension as ExtensionModel;
use App\Contracts\Builder as BuilderContract;

class Extension extends Builder implements BuilderContract
{
    /**
     * @var \App\Models\Extension
     */
    protected $extension;

    /**
     * @var string
     */
    protected $namespace = 'App\Models\Extension';

    /**
     * Constructor.
     * 
     * @param string $handle
     */
    public function __construct($handle)
    {
        $this->extension = ExtensionModel::where(['handle' => $handle])->firstOrFail();
        $this->model     = $this->make();
    }

    /**
     * Make a new model instance.
     *
     * @return \App\Models\Extensions\...
     */
    public function make()
    {
        $fillable = [ 'extension_id', 'related_id' ];
        $casts    = [];
        $fields   = [];

        if ($this->extension->fieldset) {
            $fields = $this->extension->fieldset->fields->reject(function ($field) {
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

        $path = app_path("Models/Extensions/{$this->extension->name}.php");
        $stub = File::get(resource_path('stubs/extension.stub'));

        $contents = strtr($stub, [
            '{class}'         => $this->extension->name,
            '{handle}'        => $this->extension->handle,
            '{fillable}'      => '[\'' . implode('\', \'', $fillable) . '\']',
            '{casts}'         => '[\'' . implode('\', \'', $casts) . '\']',
            '{relationships}' => $this->generateRelationships(),
        ]);

        File::put($path, $contents);

        return app()->make('App\Models\Extensions\\'. $this->extension->name);
    }
}
