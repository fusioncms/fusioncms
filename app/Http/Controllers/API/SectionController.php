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

use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Resources\SectionResource;

class SectionController extends Controller
{
    protected $rules = [
        'name'           => 'required',
        'handle'         => 'required',
        'description'    => 'sometimes',
        'order'          => 'required',
        'placement'      => 'required',
        'container_type' => 'required',
        'container_id'   => 'required',
    ];

    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $container = null)
    {
        // $this->authorize('fields.show');

        if (is_null($container)) {
            $fields = Section::orderBy('name')->paginate(25);
        } else {
            $fields = Section::where('container_type', $container)->orderBy('name');
        }

        return SectionResource::collection($fields);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Section  $field
     * @return \Illuminate\Http\Response
     */
    public function show(Section $field)
    {
        // $this->authorize('fields.show');

        return new SectionResource($field);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $this->authorize('fields.create');

        $attributes = $request->validate($this->rules);

        $field = Section::create($attributes);

        return new SectionResource($field);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Section  $field
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Section $field)
    {
        // $this->authorize('fields.update');

        $attributes = $request->validate($this->rules);

        $field->update($attributes);

        return new SectionResource($field);
    }

    public function reorder(Request $request)
    {
        // $this->authorize('fields.update');

        $fields = $request->get('fields');

        DB::transaction(function () use ($fields) {
            foreach ($fields as $index => $field) {
                Section::find($field)
                    ->update([
                        'order' => $index,
                    ]);
            }
        });
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Section  $field
     * @return \Illuminate\Http\Response
     */
    public function destroy(Section $field)
    {
        // $this->authorize('fields.delete');

        $field->delete();
    }
}
