<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Models\Matrix;
use Illuminate\Support\Str;
use Fusion\Services\Builders\Page;
use Fusion\Http\Requests\PageRequest;
use Fusion\Http\Resources\PageResource;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\MatrixResource;

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
     * @param  \Fusion\Http\Requests\PageRequest $request
     * @param  integer $id
     * @return \Fusion\Http\Resources\PageResource
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
