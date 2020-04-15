<?php

namespace Fusion\Http\Controllers\API\Themes;

use Theme;
use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ThemeResource;

class ActiveController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @return JsonResponse
     */
    public function show()
    {
        $theme = Theme::where('slug', setting('system.theme'))->first();

        return new ThemeResource($theme);
    }

    /**
     * Update the currently active theme.
     *
     * @param  Request  $request
     * @param  String   $theme
     * @return JsonResponse
     */
    public function update(Request $request, $theme)
    {
        $theme = Theme::where('slug', $theme)->first();

        setting([
            'system.theme' => $theme->get('slug')
        ]);

        activity()
            ->withProperties([
                'icon' => 'swatchbook',
                'link' => 'themes',
            ])
            ->log('Set theme to ' . $theme->get('name') . ' (' . $theme->get('version') . ')');
    }
}
