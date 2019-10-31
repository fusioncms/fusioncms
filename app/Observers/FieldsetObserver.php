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
