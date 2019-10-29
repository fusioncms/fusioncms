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
    	// $import = \App\Models\Import::find(1);
    	// dd(
    	// 	(new \App\Services\Imports\UserImport($import))
    	// 		->import(storage_path('app/public/imports/test.csv'))
    	// );
        return view('admin.index');
    }
}
