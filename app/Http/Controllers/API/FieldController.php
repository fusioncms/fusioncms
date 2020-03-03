<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\API;

use App\Models\Field;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Resources\FieldResource;

class FieldController extends Controller
{
    /**
     * Reorder fields in storage.
     * 
     * @param  Request $request
     * @return void
     */
    public function reorder(Request $request)
    {
        $this->authorize('fields.update');

        DB::transaction(function () {
            foreach (request()->get('fields') as $index => $field) {
                Field::find($field)->update([ 'order' => $index ]);
            }
        });
    }

    /**
     * Validate field, but don't persist to storage.
     * 
     * @param  Request $request
     * @return void
     */
    public function valid(Request $request)
    {
        $rules = [
            'name'   => 'required',
            'handle' => 'required',
        ];
        
        /**
         * Pull additional validation rules from `fieldtypes`
         * 
         * - rules      - Laravel validation rules
         * - messages   - Custom error message
         * - attributes - Custom field name
         */
        $fieldtype = fieldtypes()->get($request->input('type')['handle']);

        foreach ($fieldtype->rules as $handle => $rule) {
            $rules[$handle] = $rule;
        }

        $request->validate(
            $rules,
            $fieldtype->messages,
            $fieldtype->attributes
        );

        return response()->json($request->all());
    }
}
