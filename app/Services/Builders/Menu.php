<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license inmenuation, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Services\Builders;

use App\Models\Field;
use Illuminate\Support\Str;
use App\Models\Menu as MenuModel;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use App\Contracts\Builder as BuilderContract;

class Menu extends Builder implements BuilderContract
{
    /**
     * @var string
     */
    protected $menu;

    /**
     * @var string
     */
    protected $namespace = 'App\Models\Menus';

    /**
     * @var \App\Database\Eloquent\Model
     */
    protected $model;

    /**
     * Create a new Menu instance.
     *
     * @param  string  $menu
     */
    public function __construct($menu)
    {
        parent::__construct();

        $this->menu  = MenuModel::where('handle', $menu)->firstOrFail();
        $this->model = $this->make();
    }

    /**
     * Make a new menu model instance.
     */
    public function make()
    {
        $className = Str::studly($this->menu->handle);
        $traits    = [];
        $fillable  = ['menu_id', 'name', 'url', 'new_window', 'order', 'status'];
        $casts     = [
            'order'      => 'integer',
            'new_window' => 'boolean',
            'status'     => 'boolean',
        ];

        if ($this->menu->fieldset) {
            $fields    = $this->menu->fieldset->fields->reject(function ($field) {
                $fieldtype = fieldtypes()->get($field->type);

                if ($fieldtype->hasRelationship()) {
                    $this->addRelationship($field, $fieldtype);
                }

                return is_null($fieldtype->column);
            });

            foreach ($fields as $field) {
                $fieldtype  = fieldtypes()->get($field->type);
                $fillable[] = $field->handle;
                $casts[]    = $field->handle . '\' => \'' . $fieldtype->cast ;
            }
        }

        $path = app_path('Models/Menus/' . $className . '.php');
        $stub = File::get(resource_path('stubs/menu.stub'));

        $contents = strtr($stub, [
            '{class}'         => $className,
            '{handle}'        => $this->menu->handle,
            '{fillable}'      => '[\'' . implode('\', \'', $fillable) . '\']',
            '{casts}'         => '[\'' . implode('\', \'', $casts) . '\']',
            '{with}'          => '[\'' . implode('\', \'', $this->getWith()) . '\']',
            '{dates}'         => '[\'' . implode('\', \'', $this->getDates()) . '\']',
            '{trait_classes}' => $this->getTraitImportStatements($traits),
            '{traits}'        => $this->getTraitUseStatements($traits),
            '{menu_id}'       => $this->menu->id,
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

        return app()->make('App\Models\Menus\\'. $className);
    }

    /**
     * Get the menu.
     */
    public function get()
    {
        return $this->model->where('menu_id', $this->menu->id)->firstOrCreate(['menu_id' => $this->menu->id]);
    }
}
