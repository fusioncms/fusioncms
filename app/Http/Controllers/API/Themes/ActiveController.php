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
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ThemeResource;

class ActiveController extends Controller
{
    public function show()
    {
        $theme = Theme::where('slug', setting('system.theme'))->first();

        return new ThemeResource($theme);
    }

    public function update(Request $request, $theme)
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

    
}
