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
use ZipArchive;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\Controller;
use App\Http\Resources\ThemeResource;
use App\Http\Requests\StoreThemeRequest;

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
     * Store a new theme in storage.
     * 
     * Note:
     *   Run the following command line to remove
     *   unwanted files (e.g. `__MACOSX`):
     *   
     *   zip -d your-archive.zip "__MACOSX*"
     * 
     * @param  StoreThemeRequest $request
     * @return JsonResponse
     */
    public function store(StoreThemeRequest $request)
    {
        $zipArchive = new ZipArchive;

        if ($zipArchive->open($request->file('file-upload')) === true) {
            $zipArchive->extractTo(base_path('themes'));
            $zipArchive->close();
        }
        
        return response()->json([], 201);
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
