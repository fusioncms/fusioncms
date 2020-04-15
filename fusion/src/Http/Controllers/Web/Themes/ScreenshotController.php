<?php

namespace Fusion\Http\Controllers\Web\Themes;

use Theme;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ThemeResource;

class ScreenshotController extends Controller
{
    public function show($theme)
    {
        return \Image::make(base_path("themes/$theme/preview.png"))->response();
    }
}
