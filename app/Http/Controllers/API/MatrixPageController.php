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
use Illuminate\Http\Request;
use App\Services\Builders\Page;
use App\Http\Controllers\Controller;
use App\Http\Resources\MatrixPageResource;

class MatrixPageController extends Controller
{
    /**
     * Validation rules used for create and update
     * actions.
     *
     * @var array
     */
    protected $rules = [
        //
    ];

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Matrix  $matrix
     * @return \Illuminate\Http\Response
     */
    public function show($matrix)
    {
        $matrix = Matrix::where('slug', $matrix)->firstOrFail();
        $page   = (new Page($matrix->handle))->get();

        return new MatrixPageResource([
            'matrix' => $matrix,
            'page'   => $page,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Matrix  $matrix
     * @return \Illuminate\Http\Response
     */
    public function handle($handle)
    {
        $matrix = Matrix::where('handle', $handle)->firstOrFail();
        $page   = (new Page($matrix->handle))->get();

        return new MatrixPageResource([
            'matrix' => $matrix,
            'page'   => $page,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $matrix
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $matrix)
    {
        $matrix        = Matrix::findOrFail($matrix);
        $page          = new Page($matrix->handle);
        $relationships = [];
        $rules         = ['status' => 'required|boolean'];

        $fields        = $matrix->fieldset->database();
        $relationships = $matrix->fieldset->relationships();

        foreach ($fields as $field) {
            $rules[$field->handle] = $field->validation ?: 'sometimes';
        }

        $attributes = $request->validate($rules);

        foreach ($attributes as $handle => $value) {
            $page->{$handle} = $value;
        }

        $page->update($attributes);

        foreach ($relationships as $relationship) {
            $page->{$relationship->handle}()->sync($request->input($relationship->handle));
        }

        return new MatrixPageResource([
            'matrix' => $matrix,
            'page'   => $page->get(),
        ]);
    }
}
