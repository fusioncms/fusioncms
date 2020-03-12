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
use App\Services\Builders\Page;
use App\Http\Requests\PageRequest;
use App\Http\Resources\PageResource;
use App\Http\Controllers\Controller;
use App\Http\Resources\MatrixResource;

class PageController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  string  $matrix
     * @return JsonResponse
     */
    public function show($matrix)
    {
        $this->authorize('entry.show');

        $matrix = Matrix::where('slug', $matrix)->firstOrFail();
        $model  = (new Page($matrix->handle))->make();

        try {
            return new PageResource($model->firstOrFail());
        } catch (\Exception $exception) {
            return new MatrixResource($matrix);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\PageRequest $request
     * @param  integer $id
     * @return \App\Http\Resources\PageResource
     */
    public function update(PageRequest $request, $id)
    {
        $matrix     = $request->matrix;
        $attributes = $request->validated();

        $entry = $request->model->updateOrCreate(['matrix_id' => $id], $attributes);

        // persist relationships..
        foreach ($request->relationships as $relationship) {
            $relationship->type()->persistRelationship($entry, $relationship);
        }

        return new PageResource($entry);
    }
}
