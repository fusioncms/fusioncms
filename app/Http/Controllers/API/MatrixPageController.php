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
use App\Foundation\Builders\Page;
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
        $matrix = Matrix::findOrFail($matrix);
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
        $matrix = Matrix::findOrFail($matrix);
        $page   = new Page($matrix->handle);
        $rules  = ['status' => 'required|boolean'];
        $fields = $matrix->fields->reject(function ($field) {
            $fieldtype = fieldtypes()->get($field->type);

            return is_null($fieldtype->column);
        });

        foreach ($fields as $field) {
            $rules[$field->handle] = 'sometimes';
        }

        $attributes = $request->validate($rules);

        foreach ($attributes as $handle => $value) {
            $page->{$handle} = $value;
        }

        $page->update($attributes);

        return new MatrixPageResource([
            'matrix' => $matrix,
            'page'   => $page->get(),
        ]);
    }
}
