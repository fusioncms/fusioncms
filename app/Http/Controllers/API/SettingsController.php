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

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use App\Http\Resources\SettingResource;

class SettingsController extends Controller
{
    /**
     * Get settings fieldtypes and values.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = collect(config('settings.settings'))
            ->map(function ($item) {
                $item['value'] = setting($item['section'] . '.' . $item['handle']);

                return $item;
            })
            ->groupBy('section')
            ->sortBy('order');

        $settings = collect(config('settings.sections'))
            ->map(function ($section) use ($items) {
                $section['items'] = $items->get($section['handle']);

                return $section;
            })
            ->sortBy('name')
            ->sortBy('group')
            ->groupBy('group');

        return SettingResource::collection($settings);
    }

    public function show(Request $request, $section)
    {
        $settings = collect(config('settings.settings'))
            ->map(function ($item) {
                $item['value'] = setting($item['section'] . '.' . $item['handle']);

                return $item;
            })
            ->groupBy('section')
            ->get($section)
            ->sortBy('order');

        return new SettingResource($settings);
    }

    /**
     * Update settings.
     *
     * @param \Illuminate\Http\Request $request
     * @param string $section
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $section)
    {
        $settings = json_decode(File::get(settings_path()), true);

        foreach ($settings[$section] as $handle => $setting) {
            if ($request->has($handle)) {
                if ($request->hasFile($handle)) {
                    $file      = $request->file($handle);
                    $extension = $file->getClientOriginalExtension();
                    $path      = $file->storeAs('/', $handle . '.' . $extension, 'settings');

                    $settings[$section][$handle] = $path;
                    app('settings')->set($section . '.' . $handle, $path);
                } else {
                    $settings[$section][$handle] = $request->get($handle);
                    app('settings')->set($section . '.' . $handle, $request->get($handle));
                }
            }
        }

        File::put(settings_path(), json_encode($settings, JSON_PRETTY_PRINT));

        activity()
            ->withProperties([
                'icon' => 'cog',
                'link' => 'settings',
            ])
            ->log('Updated CMS settings');

        $settings = collect(config('settings.settings'))
            ->map(function ($item) {
                $item['value'] = setting($item['section'] . '.' . $item['handle']);

                return $item;
            })
            ->groupBy('section')
            ->get($section)
            ->sortBy('order');

        return new SettingResource($settings);
    }
}
