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
use App\Http\Controllers\Controller;
use App\Http\Resources\MatrixResource;

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
     * @param  \App\Models\Matrix  $matrix
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->authorize('matrices.create');

        $attributes = collect($request->validate($this->rules()));
        
        $attributes->put('slug', Str::slug($attributes->get('handle'), '-'));
        
        $matrix = Matrix::create($attributes->except('fieldset')->all());

        if ($attributes->get('fieldset')) {
            $matrix->attachFieldset($attributes->get('fieldset'));
        }

        activity()
            ->performedOn($matrix)
            ->withProperties([
                'icon' => 'chart-network',
                'link' => 'matrices/edit/' . $matrix->id,
            ])
            ->log('Created matrix (:subject.name)');
       
        // Build model class
        $builder = 'App\\Services\\Builders\\' . Str::studly($matrix->type);
        $model   = (new $builder($matrix->handle))->make();

        return new MatrixResource($matrix);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Matrix  $matrix
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Matrix $matrix)
    {
        $this->authorize('matrices.update');

        $attributes = collect($request->validate($this->rules($matrix->id)));

        $attributes->put('slug', Str::slug($attributes->get('handle'), '-'));

        $matrix->update($attributes->except('fieldset')->all());

        if ($attributes->get('fieldset') && (!isset($matrix->fieldset) || ($matrix->fieldset->id !== $attributes->get('fieldset')))) {
            $matrix->attachFieldset($attributes->get('fieldset'));
        } else if (!$attributes->get('fieldset')) {
            $matrix->detachFieldset();
        }

        // Build model class
        $builder = 'App\\Services\\Builders\\' . Str::studly($matrix->type);
        $model   = (new $builder($matrix->handle))->make();

        activity()
            ->performedOn($matrix)
            ->withProperties([
                'icon' => 'chart-network',
                'link' => 'matrices/edit/' . $matrix->id,
            ])
            ->log('Updated matrix (:subject.name)');

        return new MatrixResource($matrix);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Matrix  $matrix
     * @return \Illuminate\Http\Response
     */
    public function destroy(Matrix $matrix)
    {
        $this->authorize('matrices.delete');

        activity()
            ->performedOn($matrix)
            ->withProperties([
                'icon' => 'chart-network',
            ])
            ->log('Deleted matrix (:subject.name)');

        $matrix->delete();
    }

    /**
     * Validation rules used for create and update actions.
     *
     * @return array
     */
    protected function rules($id = null)
    {
        return [
            'parent_id'          => 'sometimes|not_in:'.$id,
            'name'               => 'required|regex:/^[A-z]/i',
            'handle'             => 'required',
            'description'        => 'sometimes',
            'type'               => 'required',
            'fieldset'           => 'sometimes',

            'reference_singular' => 'sometimes',
            'reference_plural'   => 'sometimes',

            'sidebar'            => 'required|boolean',
            'quicklink'          => 'required|boolean',
            'icon'               => 'sometimes',

            'route'              => 'sometimes',
            'template'           => 'sometimes',

            'revision_control'   => 'required|boolean',
            'creditable'         => 'required|boolean',
            'publishable'        => 'required|boolean',
        ];
    }
}
