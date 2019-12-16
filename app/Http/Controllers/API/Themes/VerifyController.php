<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\API\Themes;

use Theme;
use Storage;
use ZipArchive;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\VerifyThemeRequest;

class VerifyController extends Controller
{
    /**
     * Return all available themes.
     * 
     * @return Response
     */
    public function index(VerifyThemeRequest $request)
    {
        $this->authorize('themes.create');
    }
}