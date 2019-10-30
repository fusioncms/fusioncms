<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Observers;

use App\Models\Fieldset;

class FieldsetObserver
{
    /**
     * Listen to the Fieldset deleting event.
     *
     * @param  Fieldset  $section
     */
    public function deleting(Fieldset $fieldset)
    {
        $fieldset->sections->each(function ($section) {
            $section->delete();
        });
    }
}
