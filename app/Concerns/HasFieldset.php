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
    public function attachFieldset($fieldset)
    {
        return $this->fieldsets()->sync($fieldset);
    }

    public function detachFieldset()
    {
        return $this->fieldsets()->detach();
    }

    public function getFieldsetAttribute()
    {
        return $this->fieldsets->count() ? $this->fieldsets()->first() : null;
    }

    public function fieldsets()
    {
        return $this->morphToMany(Fieldset::class, 'fieldsettable');
    }

    public function setAppends(array $appends)
    {
        $appends = parent::getAppends();

        $appends[] = 'fieldset';

        return $appends;
    }
}
