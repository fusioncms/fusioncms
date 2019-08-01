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

use App\Http\Controllers\Controller;
use Intervention\Image\Facades\Image;

class TinkerController extends Controller
{
    public function index()
    {
        $image = Image::make(file_get_contents('https://images.unsplash.com/photo-1524563533368-5dc20937d23e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'));

        $image = $image->fit(500);

        return $image->response();
    }
}
