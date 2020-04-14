<?php

namespace App\Models;

use App\Concerns\HasFieldset;
use App\Concerns\CachesQueries;
use App\Database\Eloquent\Model;
use App\Services\Builders\Extension as Builder;

class Extension extends Model
{
    use CachesQueries, HasFieldset;

    protected $with = ['fieldsets'];

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [ 'name', 'handle', 'status' ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [ 'status' => 'boolean' ];

    /**
     * Get the builder instance.
     *
     * @return Model
     */
    public function getBuilder()
    {
        return (new Builder($this->handle))->make();
    }

    /**
     * Get the "table" attribute value.
     *
     * @return string
     */
    public function getTableAttribute()
    {
        return 'ext_' . $this->handle;
    }
}
