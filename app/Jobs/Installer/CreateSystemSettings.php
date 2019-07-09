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

// use App\Models\Setting;

class CreateSystemSettings
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        // $modules = Module::all();

        // foreach ($modules as $key => $module) {
        //     if (isset($module['settings'])) {
        //         $this->createSettings($module['settings']);
        //     }
        // }
    }

    protected function createSettings($settings)
    {
        foreach ($settings as $setting => $details) {
            $data = [
                'handle'      => $setting,
                'name'        => $details['name'],
                'description' => $details['description'],
                'group'       => ($details['group'] ?? ''),
                'type'        => ($details['type'] ?? 'text'),
                'options'     => ($details['options'] ?? []),
                'value'       => ($details['value'] ?? ''),
                'is_required' => ($details['is_required'] ?? 1),
                'is_gui'      => ($details['is_gui'] ?? 1),
                'order'       => ($details['order'] ?? 0),
            ];

            Setting::create($data);
        }
    }
}
