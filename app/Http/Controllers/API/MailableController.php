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

use File;
use ReflectionClass;
use App\Models\Mailable;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\MailableResource;

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

        activity()
            ->performedOn($mailable)
            ->withProperties([
                'icon' => 'mail-bulk',
                'link' => 'mailables/'.$mailable->id.'/edit',
            ])
            ->log('Updated mailable (:subject.name)');

    	return new MailableResource($mailable);
    }
}