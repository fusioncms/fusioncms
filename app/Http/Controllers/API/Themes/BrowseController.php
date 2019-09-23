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
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ThemeResource;

class BrowseController extends Controller
{
    /**
     * Return all available themes.
     * 
     * @return \App\Http\Resources\ThemeResource
     */
    public function index()
    {
        $themes = collect(Theme::all());

        return ThemeResource::collection($themes);
    }

    /**
     * Update the specified themes settings.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  String  $theme
     */
    public function update(Request $request, $theme)
    {
        $settingsFilePath = storage_path("/themes/{$theme}.json");

        File::put($settingsFilePath, json_encode($request->except('_method'), JSON_PRETTY_PRINT));

        activity()
            ->withProperties([
                'icon' => 'swatchbook',
                'link' => 'theme',
            ])
            ->log('Updated theme settings');

        // return response(['data' => $settings[$section]]);
    }
}
