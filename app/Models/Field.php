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

class Field extends Model
{
    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'handle',
        'help',
        'required',
        'type',
        'settings',
        'validation',
        'order',
        'section_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'required' => 'boolean',
        'settings' => 'collection',
        'status'   => 'boolean',
    ];

    /**
     * A field belongs to a section.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function section()
    {
        return $this->belongsTo(Section::class);
    }

    /**
     * Return the fieldtype instance of this field.
     * 
     * @return Fieldtype
     */
    public function type()
    {
        return fieldtypes()->get($this->type);
    }
}
