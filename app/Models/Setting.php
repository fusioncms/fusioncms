<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Models;

use App\Foundation\Concerns\CachesQueries;
use App\Foundation\Database\Eloquent\Model;
use App\Foundation\Support\SettingCollection;

class Setting extends Model
{
    use CachesQueries;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = ['handle', 'name', 'description', 'type', 'options', 'default', 'value', 'is_required', 'is_gui', 'order', 'group'];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'options' => 'array',
    ];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'system_settings';

    /**
     * @var bool
     */
    protected $searchable = false;

    /**
     * Create a new Eloquent Collection instance.
     *
     * @param  array  $Models
     * @return SettingCollection
     */
    public function newCollection(array $models = [])
    {
        return new SettingCollection($models);
    }
}
