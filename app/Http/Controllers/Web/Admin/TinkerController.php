<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\Web\Admin;

use App\Models\Matrix;
use App\Http\Controllers\Controller;

class TinkerController extends Controller
{
    public function index()
    {
        $matrix = Matrix::find(11);
        dd(
            $matrix,
            $matrix->fields()->getQuery(),
            $matrix->fields
        );
    }
}
