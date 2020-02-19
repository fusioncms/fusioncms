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

use App\Models\Matrix;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Services\Builders\Page;
use App\Http\Controllers\Controller;
use App\Http\Resources\MatrixResource;
use App\Http\Resources\MatrixPageResource;

class MatrixPageController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  string  $matrix
     * @return JsonResponse
     */
    public function show($matrix)
    {
        $matrix = Matrix::where('slug', $matrix)->firstOrFail();
        $model  = (new Page($matrix->handle))->make();

        try {
            return new MatrixPageResource($model->firstOrFail());
        } catch (\Exception $exception) {
            return new MatrixResource($matrix);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  integer  $id
     * @return JsonResponse
     */
    public function update(Request $request, $id)
    {
        $matrix = Matrix::findOrFail($id);
        $model  = (new Page($matrix->handle))->make();
        $rules  = [
            'name'   => 'required',
            'slug'   => 'required',
            'status' => 'required|boolean',
        ];

        if (isset($matrix->fieldset)) {
            foreach ($matrix->fieldset->database() as $field) {
                $rules[$field->handle] = $field->validation ?: 'sometimes';
            }
        }

        $attributes              = $request->validate($rules);
        $attributes['matrix_id'] = $matrix->id;

        $entry = $model->updateOrCreate(['matrix_id' => $matrix->id], $attributes);

        if (isset($matrix->fieldset)) {
            foreach ($matrix->fieldset->relationships() as $relationship) {
                $relationship->type()->persistRelationship($page, $relationship);
            }
        }

        activity()
            ->performedOn($entry)
            ->withProperties([
                'icon' => $matrix->icon,
                'link' => 'pages/' . $matrix->slug,
            ])
            ->log('Updated ' . Str::singular($matrix->name));

        return new MatrixPageResource($entry);
    }
}
