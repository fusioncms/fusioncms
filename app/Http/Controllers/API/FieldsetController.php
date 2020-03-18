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

use App\Models\Fieldset;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\FieldsetRequest;
use App\Http\Resources\FieldsetResource;

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
     * @param  \App\Models\Fieldset  $fieldset
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
     * @param  \App\Http\Requests\FieldsetRequest $request
     * @return \App\Http\Resources\FieldsetResource
     */
    public function store(FieldsetRequest $request)
    {
        $fieldset = Fieldset::create($request->validated());

        return new FieldsetResource($fieldset);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\FieldsetRequest $request
     * @param  \App\Models\Fieldset               $fieldset
     * @return \App\Http\Resources\FieldsetResource
     */
    public function update(FieldsetRequest $request, Fieldset $fieldset)
    {
        $fieldset->update($request->validated());

        return new FieldsetResource($fieldset);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Fieldset  $fieldset
     * @return \Illuminate\Http\Response
     */
    public function destroy(Fieldset $fieldset)
    {
        $this->authorize('fieldsets.delete');

        $fieldset->delete();
    }
}
