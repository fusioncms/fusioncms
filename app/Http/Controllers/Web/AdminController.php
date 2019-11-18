<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;

class AdminController extends Controller
{
    /**
     * Show the admin dashboard.
     *
     * @return \Illuminate\View\Factory
     */
    public function index()
	{
		dd(fusion()->get('users/1'));
		// $import = \App\Models\Import::first();
		// (new \App\Services\Exports\GoogleExport($import->source))->store("imports/{$import->handle}.csv");
		// (new \App\Services\Imports\UserImport($import))->import("imports/{$import->handle}.csv");
		// dd('done');

        return view('admin.index');
    }
}
