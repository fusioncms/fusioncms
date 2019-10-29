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

use App\Models\Import;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\QueueResource;
use Laravel\Horizon\Contracts\JobRepository;
use Laravel\Horizon\Contracts\TagRepository;

class ImportQueueController extends Controller
{
    protected $jobs;
    protected $tags;

    /**
     * Create a new controller instance.
     *
     * @param  JobRepository  $jobs
     * @return void
     */
    public function __construct(JobRepository $jobs, TagRepository $tags)
    {
        $this->jobs = $jobs;
        $this->tags = $tags;
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return Resource
     */
    public function index(Request $request)
    {
        $this->authorize('importer.queue.index');
        
        dd($this->jobs->getRecent($request->query('starting_at', -1)));

        //return new QueueResource($import);
    }

    /**
     * Display a specific resource.
     * 
     * @param  Import $import
     * @return Resource
     */
    public function show(Import $import)
    {
        $this->authorize('importer.queue.show');

    }

    /**
     * Queue up an import from storage.
     * 
     * @param  Request $request
     * @param  Import  $import
     * @return void
     */
    public function store(Request $request, Import $import)
    {
    	$this->authorize('importer.queue.store');
        dd($import);

        // $module = 'App\\Services\\Imports\\' . Str::singular($import->module) . 'Import';

        // (new $module($import))
        //     ->queue($import->location)
        //     ->onConnection('redis')
        //     ->onQueue('imports');
    }
}
