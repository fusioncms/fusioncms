<?php

namespace Modules\MockModule\Http\Controllers\API;

use Illuminate\Http\Request;
use Modules\MockModule\Models\Acme;
use Fusion\Http\Controllers\Controller;
use Modules\MockModule\Http\Requests\AcmeRequest;
use Modules\MockModule\Http\Resources\AcmeResource;

class AcmeController extends Controller
{
	/**
     * Display a listing of the resource.
     *
     * @param  Request  $request
     * @return AcmeResource
     */
    public function index(Request $request)
    {
        $collection = Acme::orderBy('name')->paginate(25);

    	return AcmeResource::collection($collection);
    }

    /**
     * Display the specified resource.
     *
     * @param  Request  $request
     * @param  Acme     $acme
     * @return AcmeResource
     */
    public function show(Request $request, Acme $acme)
    {
        return new AcmeResource($acme);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  AcmeRequest  $request
     * @return AcmeResource
     */
    public function store(AcmeRequest $request)
    {
        $acme = Acme::create($request->validated());

        return new AcmeResource($acme);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  AcmeRequest   $request
     * @param  Acme          $acme
     * @return AcmeResource
     */
    public function update(AcmeRequest $request, Acme $acme)
    {
        $acme->update($request->validated());

        return new AcmeResource($acme);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Acme  $acme
     * @return void
     */
    public function destroy(Acme $acme)
    {
        $acme->delete();
    }
}