<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\Web\Themes;

use Theme;
use App\Http\Controllers\Controller;
use App\Http\Resources\ThemeResource;

class ScreenshotController extends Controller
{
    public function show($theme)
    {
        return \Image::make(base_path("themes/$theme/preview.png"))->response();
    }
}
