<?php

namespace App\Models;

use App\Concerns\HasFieldset;
use App\Concerns\CachesQueries;
use App\Database\Eloquent\Model;

class Menu extends Model
{
    use CachesQueries, HasFieldset;

    protected $with = ['fieldsets'];

    protected $appends = ['fieldset'];

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'handle',
        'description',
    ];

    /**
     * Get the builder instance.
     *
     * @return Model
     */
    public function getBuilder()
    {
        $builder = new \App\Services\Builders\Menu($this->handle);

        return $builder->make();
    }

    /**
     * Get the "table" attribute value.
     *
     * @return string
     */
    public function getTableAttribute()
    {
        return 'menu_' . $this->handle;
    }

    /**
     * Menus have many nodes.
     *
     * @return HasManyRelationship
     */
    public function nodes()
    {
        $model = $this->getBuilder();
        $class = new \ReflectionClass($model);

        return $this->hasMany('\\'.$class->getName())->orderBy('order', 'asc');
    }
}
