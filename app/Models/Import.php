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

use App\Database\Eloquent\Model;

class Import extends Model
{
    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'handle',
        'location',
        'module',
        'strategy',
        'headings',
        'mappings',
        'backup',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'strategy' => 'collection',
        'headings' => 'collection',
        'mappings' => 'collection',
        'backup'   => 'boolean',
    ];
}
