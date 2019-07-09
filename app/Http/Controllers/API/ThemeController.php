<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\API;

use Theme;
use App\Http\Controllers\Controller;
use App\Http\Resources\ThemeResource;

class ThemeController extends Controller
{
    public function index()
    {
        $themes = collect(Theme::all());

        return ThemeResource::collection($themes);
    }

    public function setActive($theme)
    {
        $theme = Theme::where('slug', $theme)->first();

        activity()
            ->withProperties([
                'icon' => 'swatchbook',
                'link' => 'themes',
            ])
            ->log('Set theme to ' . $theme->get('name') . ' (' . $theme->get('version') . ')');

        setting()->set('system.theme', $theme->get('slug'));
    }

    public function preview($theme)
    {
        return \Image::make(base_path("themes/$theme/preview.png"))->response();
    }
}
