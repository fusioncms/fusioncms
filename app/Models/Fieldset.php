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

use App\Concerns\HasSections;
use App\Database\Eloquent\Model;
use App\Concerns\HasDynamicRelationships;

class Fieldset extends Model
{
    use HasDynamicRelationships, HasSections;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = ['name', 'handle'];

    public function fieldsetable()
    {
        return $this->morphTo();
    }
}
