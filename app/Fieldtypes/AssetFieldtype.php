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
    public function persistRelationship($model, Field $field)
    {
        $oldValues = $model->{$field->handle}()->where('field_id', $field->id)->pluck('id');
        $newValues = collect(request()->input($field->handle))->mapWithKeys(function($item, $key) use ($field) {
            return [
                $item['id'] => [
                    'field_id' => $field->id,
                    'order'    => $key + 1
                ]];
        });

        $model->{$field->handle}()->detach($oldValues);
        $model->{$field->handle}()->attach($newValues);
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
    }

    /**
     * Returns value of field.
     * 
     * @return mixed
     */
    public function getValue($model, Field $field)
    {
        return $model
            ->{$field->handle}()
            ->where('field_id', $field->id)
            ->orderBy('order')
            ->get();
    }

    /**
     * Returns resource object of field.
     *
     * @param  Illuminate\Eloquent\Model  $model
     * @param  App\Models\Field           $field
     * @return FileResource
     */
    public function getResource($model, Field $field)
    {
        return FileResource::collection($this->getValue($model, $field));
    }
}
