<?php

namespace Fusion\Observers;

use Fusion\Models\Section;

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
