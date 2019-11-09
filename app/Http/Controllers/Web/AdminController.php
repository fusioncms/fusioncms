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
		// $import    = \App\Models\Import::first();
		// $importLog = \App\Models\ImportLog::find($import->id);
		// \App\Jobs\Importer\PullInGoogleSpreadsheet::dispatch($import)
		// 	->onQueue('imports')
		// 	->chain([
		// 		new \App\Jobs\Importer\RunImport($import),
		// 	]);
		// dd('done');

        return view('admin.index');
    }
}
