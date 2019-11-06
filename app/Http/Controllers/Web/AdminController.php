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
		$import = \App\Models\Import::find(1);
		$queue  = 'imports';

		(new \App\Services\Imports\TaxonomyImport($import))
			->queue("imports/{$import->handle}.csv", null, \Maatwebsite\Excel\Excel::CSV)
			->onConnection('database')
			->onQueue($queue);
		dd('done');

        return view('admin.index');
    }
}
