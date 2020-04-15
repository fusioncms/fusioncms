<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Models\Matrix;
use Illuminate\Http\Request;
use Fusion\Http\Requests\MatrixRequest;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\MatrixResource;

class MatrixController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('matrices.show');

        $matrices = Matrix::orderBy('name')->paginate(25);

        return MatrixResource::collection($matrices);
    }

    /**
     * Display the specified resource.
     *
     * @param  \Fusion\Models\Matrix  $matrix
     * @return \Illuminate\Http\Response
     */
    public function show(Matrix $matrix)
    {
        $this->authorize('matrices.show');

        return new MatrixResource($matrix);
    }

    /**
     * Display the specified resource by slug value.
     *
     * @param  string  $matrix
     * @return \Illuminate\Http\Response
     */
    public function slug($matrix)
    {
        $this->authorize('matrices.show');

        $matrix = Matrix::where('slug', $matrix)->firstOrFail();

        return new MatrixResource($matrix);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Fusion\Http\Requests\MatrixRequest  $request
     * @return \Fusion\Http\Resources\MatrixResource
     */
    public function store(MatrixRequest $request)
    {
        $matrix = Matrix::create($request->validated());

        if ($request->fieldset) {
            $matrix->attachFieldset($request->fieldset);
        }

        return new MatrixResource($matrix);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Fusion\Http\Requests\MatrixRequest  $request
     * @param  \Fusion\Models\Matrix                $matrix
     * @return \Fusion\Http\Resources\MatrixResource
     */
    public function update(MatrixRequest $request, Matrix $matrix)
    {
        $matrix->update($request->validated());

        if ($request->fieldset && (! isset($matrix->fieldset) || $matrix->fieldset->id !== $request->fieldset)) {
            $matrix->attachFieldset($request->fieldset);
        } else if (! $request->fieldset) {
            $matrix->detachFieldset();
        }

        return new MatrixResource($matrix);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Fusion\Models\Matrix  $matrix
     * @return void
     */
    public function destroy(Matrix $matrix)
    {
        $this->authorize('matrices.delete');

        $matrix->delete();
    }
}
