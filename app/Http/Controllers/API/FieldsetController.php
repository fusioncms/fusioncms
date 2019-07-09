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
use App\Http\Resources\FieldsetResource;

class FieldsetController extends Controller
{
    /**
     * Validation rules used for create and update
     * actions.
     *
     * @var array
     */
    protected $rules = [
        'name'             => 'required',
        'handle'           => 'required',
    ];

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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->authorize('fieldsets.create');

        $attributes = $request->validate($this->rules);
        $fieldset   = Fieldset::create($attributes);

        activity()
            ->performedOn($fieldset)
            ->withProperties([
                'icon' => 'ballot',
                'link' => 'fieldsets/edit/' . $fieldset->id,
            ])
            ->log('Created fieldset (:subject.name)');

        return new FieldsetResource($fieldset);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Fieldset  $fieldset
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Fieldset $fieldset)
    {
        $this->authorize('fieldsets.update');

        $attributes = $request->validate($this->rules);

        $fieldset->update($attributes);

        activity()
            ->performedOn($fieldset)
            ->withProperties([
                'icon' => 'ballot',
                'link' => 'fieldsets/edit/' . $fieldset->id,
            ])
            ->log('Updated fieldset (:subject.name)');

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

        activity()
            ->performedOn($fieldset)
            ->withProperties([
                'icon' => 'ballot',
            ])
            ->log('Deleted fieldset (:subject.name)');

        $fieldset->delete();
    }
}
