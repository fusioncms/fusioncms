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
use App\Models\Field;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use App\Http\Resources\FileResource;

class AssetFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Asset';

    /**
     * @var string
     */
    public $icon = 'folder-open';

    /**
     * @var string
     */
    public $description = 'A set of assets';

    /**
     * @var string
     */
    public $relationship = 'morphToMany';

    /**
     * @var array
     */
    public $settings = [
        'limit'                 => null,
        'root_directory'        => null,
        'filetype_restrictions' => [],
    ];

    /**
     * @var string
     */
    public $namespace = 'App\Models\File';

    /**
     * Generate relationship methods for associated Model.
     *
     * @param  App\Models\Field $field
     * @return string
     */
    public function generateRelationship($field)
    {
        $stub = File::get(resource_path("stubs/relationships/{$this->relationship}.stub"));

        return strtr($stub, [
            '{handle}'            => $field->handle,
            '{studly_handle}'     => Str::studly($field->handle),
            '{related_pivot_key}' => 'file_id',
            '{related_namespace}' => $this->namespace,
            '{related_table}'     => 'files_pivot',
        ]);
    }

    /**
     * Update relationship data in storage.
     * 
     * @param  Illuminate\Eloquent\Model  $model
     * @param  App\Models\Field           $field
     * @return void
     */
    public function updateRelationship($model, Field $field)
    {
        $model->{$field->handle}()->sync(collect(request()->input($field->handle))->pluck('id'));
        $model->save();
    }

    /**
     * Destroy relationship data in storage.
     * 
     * @param  Illuminate\Eloquent\Model  $model
     * @param  App\Models\Field           $field
     * @return void
     */
    public function destroyRelationship($model, Field $field)
    {
        $model->{$field->handle}()->detach();
        $model->save();
    }

    /**
     * Returns value of field.
     *
     * @param  Illuminate\Eloquent\Model  $model
     * @param  App\Models\Field           $field
     * @return FileResource
     */
    public function getValue($model, Field $field)
    {
        $value = parent::getValue($model, $field);

        if ($value instanceOf Collection) {
            return FileResource::collection($value);
        } else {
            return new FileResource($value);
        }
    }
}
