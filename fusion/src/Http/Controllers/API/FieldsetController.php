<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Models\Fieldset;
use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\FieldsetRequest;
use Fusion\Http\Resources\FieldsetResource;

class FieldsetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('fieldsets.show');

        $fieldsets = Fieldset::orderBy('name')->paginate(25);

        return FieldsetResource::collection($fieldsets);
    }

    /**
     * Display the specified resource.
     *
     * @param  \Fusion\Models\Fieldset  $fieldset
     * @return \Illuminate\Http\Response
     */
    public function show(Fieldset $fieldset)
    {
        $this->authorize('fieldsets.show');

        return new FieldsetResource($fieldset);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Fusion\Http\Requests\FieldsetRequest $request
     * @return \Fusion\Http\Resources\FieldsetResource
     */
    public function store(FieldsetRequest $request)
    {
        $fieldset = Fieldset::create($request->validated());

        return new FieldsetResource($fieldset);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Fusion\Http\Requests\FieldsetRequest $request
     * @param  \Fusion\Models\Fieldset               $fieldset
     * @return \Fusion\Http\Resources\FieldsetResource
     */
    public function update(FieldsetRequest $request, Fieldset $fieldset)
    {
        $fieldset->update($request->validated());

        return new FieldsetResource($fieldset);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Fusion\Models\Fieldset  $fieldset
     * @return \Illuminate\Http\Response
     */
    public function destroy(Fieldset $fieldset)
    {
        $this->authorize('fieldsets.delete');

        $fieldset->delete();
    }
}
