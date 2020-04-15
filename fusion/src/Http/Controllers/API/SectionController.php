<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\SectionResource;

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
            $section = Section::orderBy('name')->paginate(25);
        } else {
            $section = Section::where('container_type', $container)->orderBy('name');
        }

        return SectionResource::collection($section);
    }

    /**
     * Display the specified resource.
     *
     * @param  \Fusion\Models\Section  $section
     * @return \Illuminate\Http\Response
     */
    public function show(Section $section)
    {
        $this->authorize('sections.show');

        return new SectionResource($section);
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
     * @param  \Fusion\Models\Section  $field
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
     * @param  \Fusion\Models\Section  $field
     * @return \Illuminate\Http\Response
     */
    public function destroy(Section $field)
    {
        // $this->authorize('fields.delete');

        $field->delete();
    }
}
