<?php

namespace Fusion\Http\Controllers\API;

use Theme;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ThemeResource;

class ActiveThemeController extends Controller
{
    public function show()
    {
        $theme = Theme::where('slug', setting('system.theme'))->first();

        return new ThemeResource($theme);
    }
}
