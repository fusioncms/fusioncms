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

use App\Models\Section;

class SectionObserver
{
    /**
     * Listen to the Section deleting event.
     *
     * @param  Section  $section
     */
    public function deleting(Section $section)
    {
        $section->fields->each(function ($field) {
            $field->delete();
        });
    }
}
