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

use App\Models\SettingSection;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\Settings\SettingResource;
use App\Http\Resources\Settings\SettingSectionResource;

class SettingsController extends Controller
{
    /**
     * Request collection from storage.
     *
     * @param  Request $request
     * @return JsonResource
     */
    public function index(Request $request)
    {
        $sections = SettingSection::all();

        return SettingSectionResource::collection($sections);
    }

     /**
      * Request specific resource from storage.
      *
      * @param  Request        $request
      * @param  SettingSection $section
      * @return JsonResponse
      */
    public function show(Request $request, SettingSection $section)
    {
        return new SettingSectionResource($section);
    }

    /**
     * Update settings.
     *
     * @param  Request        $request
     * @param  SettingSection $section
     * @return JsonResponse
     */
    public function update(Request $request, SettingSection $section)
    {
        $section->settings->each(function($setting) use ($request) {
            if ($request->has($setting->handle)) {
                if ($request->hasFile($setting->handle)) {
                    $file      = $request->file($setting->handle);
                    $extension = $file->getClientOriginalExtension();
                    $path      = $file->storeAs('/', $setting->handle . '.' . $extension, 'settings');

                    $setting->update([ 'value' => $path ]);
                } else {
                    $setting->update([ 'value' => $request->get($setting->handle) ]);
                }
            }
        });

        Artisan::call('optimize');
        
        return new SettingSectionResource($section);
    }
}
