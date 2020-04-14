<?php

namespace Fusion\Services\Builders;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use Fusion\Models\Extension as ExtensionModel;
use Fusion\Contracts\Builder as BuilderContract;

class Extension extends Builder implements BuilderContract
{
    /**
     * @var \Fusion\Models\Extension
     */
    protected $extension;

    /**
     * @var string
     */
    protected $namespace = 'Fusion\Models\Extension';

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
     * @return \Fusion\Models\Extensions\...
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

        $path = fusion_path("/src/Models/Extensions/{$this->extension->name}.php");
        $stub = File::get(fusion_path('/stubs/extension.stub'));

        $contents = strtr($stub, [
            '{class}'         => $this->extension->name,
            '{handle}'        => $this->extension->handle,
            '{fillable}'      => '[\'' . implode('\', \'', $fillable) . '\']',
            '{casts}'         => '[\'' . implode('\', \'', $casts) . '\']',
            '{relationships}' => $this->generateRelationships(),
        ]);

        File::put($path, $contents);

        return app()->make('Fusion\Models\Extensions\\'. $this->extension->name);
    }
}
