<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Concerns;

use App\Models\Fieldset;

trait HasFieldset
{
    abstract public function getBuilder();

    public function attachFieldset($fieldset)
    {
        return $this->fieldsets()->sync($fieldset);
    }

    public function detachFieldset()
    {
        return $this->fieldsets()->detach();
    }

    public function fieldset()
    {
        return $this->fieldsets()->first();
    }
        
    public function getFieldsetAttribute()
    {
        return $this->fieldset();
    }

    public function fieldsets()
    {
        return $this->morphToMany(Fieldset::class, 'fieldsettable');
    }
}
