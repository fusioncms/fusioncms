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
use Mailable;
use ReflectionClass;
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
    	$this->authorize('mailable.show');
    	$this->updateMailables();

    	$mailables = Mailable::orderBy('name')->paginate(25);

    	return MailableResource::collection($mailables);
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
     * Store a new record in storage.
     *
     * @param  Request  $request
     * @return MailableResource
     */
    public function store(Request $request)
    {
    	$this->authorize('mailable.create');

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

    	return new MailableResource($mailable);
    }

    /**
     * Destroy an existing user.
     *
     * @param  Mailable $mailable
     * @return void
     */
    public function destroy(Mailable $mailable)
    {
    	$this->authorize('mailable.delete');

    	$mailable->delete();
    }

    /**
     * ...
     *
     * @return void
     */
    private function updateMailables()
    {
    	$files = File::files(app_path('Mail'));

		foreach ($files as $file) {
			$className  = pathinfo($file->getBasename(), PATHINFO_FILENAME);
			$namespace  = '\\App\\Mail\\' . $className;

			if ($mailable = $this->resolveMailable($namespace)) {
				$handle = $mailable->getHandle();

				//TODO: create new record in storage
				//TODO: destroy non-existent records in storage
			}
		}
    }

    /**
     * ...
     *
     * @param  string $namespace
     * @return Mailable|boolean
     */
    private function resolveMailable($namespace)
    {
    	$reflection = new ReflectionClass($namespace);

    	if (! $reflection->isInterface() and $reflection->implementsInterface('App\Mail\EditMailable')) {
    		return resolve($namespace);
    	}
    	
    	return false;
    }
}