<?php

namespace Fusion\Http\Controllers\API;

use File;
use ReflectionClass;
use Fusion\Models\Mailable;
use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\MailableResource;

class MailableController extends Controller
{
	/**
     * Display a listing of the resource.
     *
     * @param  Request $request
     * @return Collection
     */
    public function index(Request $request)
    {
    	$this->authorize('mailable.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  Mailable  $mailable
     * @return MailableResource
     */
    public function show(Mailable $mailable)
    {
    	$this->authorize('mailable.show');

    	return new MailableResource($mailable);
    }

    /**
     * Update an existing record in storage.
     *
     * @param  Request  $request
     * @param  Mailable $mailable
     * @return MailableResource
     */
    public function update(Request $request, Mailable $mailable)
    {
    	$this->authorize('mailable.update');

        // Validate..
        $attributes = $request->validate([
            'name'     => 'required',
            'handle'   => 'required|unique:mailables,id,' . $mailable->id,
            'markdown' => 'required'
        ]);

        $mailable->update($attributes);

    	return new MailableResource($mailable);
    }
}