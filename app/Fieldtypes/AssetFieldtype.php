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
    public $cast = 'collection';

    /**
     * @var array
     */
    public $settings = [
        'limit'                 => null,
        'root_directory'        => null,
        'filetype_restrictions' => [],
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'text',
    ];

    /**
     * @var string
     */
    public $relationship = 'hasMany';

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
        $stub = \File::get(resource_path('stubs/relationships/hasMany.stub'));

        return strtr($stub, [
            '{handle}'            => $field->handle,
            '{related_namespace}' => 'App\Models\File',
            '{foreign_key}'       => 'id',
            '{local_key}'         => $field->handle,
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
        $model->update([$field->handle => request()->input($field->handle)]);
    }
}
