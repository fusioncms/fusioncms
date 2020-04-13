<?php

namespace Fusion\Observers;

use Fusion\Models\Fieldset;
use Illuminate\Support\Facades\DB;

class FieldsetObserver
{
    /**
     * Listen to the Fieldset deleting event.
     *
     * @param  Fieldset  $section
     */
    public function deleting(Fieldset $fieldset)
    {
        DB::table('fieldsettables')->where('fieldset_id', $fieldset->id)->get()->each(function($morph){
            $model = app()->make($morph->fieldsettable_type);
            $model = $model->find($morph->fieldsettable_id);
            $model->detachFieldset();
        });

        $fieldset->sections->each(function ($section) {
            $section->delete();
        });
    }
}
