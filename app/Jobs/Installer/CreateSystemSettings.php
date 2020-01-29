<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Jobs\Installer;

use Module;
use App\Models\Setting;
use App\Models\SettingSection;

class CreateSystemSettings
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        // Create section 
        $sections = [];

        foreach(config('settings.sections') as $section) {
            $model = SettingSection::firstOrCreate($section);

            $sections[$section['handle']] = $model->id;;
        }

        // Create settings
        foreach(config('settings.settings') as $setting) {
            if (isset($sections[$setting['section']])) {
                Setting::firstOrCreate([
                    'section_id'  => $sections[$setting['section']],
                    'name'        => $setting['name'],
                    'handle'      => $setting['handle'],
                    'group'       => $setting['group']            ?? '',
                    'override'    => $setting['override']         ?? '',
                    'description' => $setting['description']      ?? '',
                    'type'        => $setting['type']             ?? 'text',
                    'options'     => $setting['options']          ?? null,
                    'default'     => $setting['default']          ?? '',
                    'value'       => $setting['value'] ?? $setting['default'] ?? '',
                    'required'    => (bool) ($setting['required'] ?? true),
                    'gui'         => (bool) ($setting['gui']      ?? true),
                    'order'       => (int)  ($setting['order']    ?? 0),
                ]);
            }
        }
        
    }
}
