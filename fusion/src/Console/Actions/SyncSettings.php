<?php

namespace Fusion\Console\Actions;

use Fusion\Models\Setting;
use Fusion\Models\SettingSection;
use Symfony\Component\Finder\Finder;
use Illuminate\Support\Facades\Cache;
use Illuminate\Contracts\Cache\Factory as CacheFactory;

class SyncSettings
{
    /**
     * Store existing section ids
     *
     * @var [type]
     */
    protected $sections;

    /**
     * Store existing setting ids
     *
     * @var [type]
     */
    protected $settings;

    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        // Record existing settings..
        $this->sections = SettingSection::all()->pluck('id', 'id');
        $this->settings = Setting::all()->pluck('id', 'id');

        // Sync with existing settings..
        foreach ($this->fetchAllSettings() as $handle => $values) {
            $this->syncSettingSection($handle, $values);
        }

        // Clean up removed sections..
        foreach ($this->sections as $id) {
            SettingSection::findOrFail($id)->delete();
        }

        // Clean up removed settings..
        foreach ($this->settings as $id) {
            Setting::findOrFail($id)->delete();
        }

        // Cache settings forever..
        Cache::forget('settings');
        Cache::rememberForever('settings', function () {
            return Setting::get()->mapWithKeys(function ($item) {
                $key   = $item->section->handle . '.' . $item->handle;
                $value = ! empty($item->value) ? $item->value :  $item->default;

                return [ $key => $value ];
            });
        });
    }

    /**
     *
     * @param  string $handle
     * @param  array  $attributes
     * @return void
     */
    protected function syncSettingSection($handle, $attributes)
    {
        $section = SettingSection::updateOrCreate([ 'handle' => $handle ], $attributes);

        unset($this->sections[$section->id]);

        if (isset($attributes['settings'])) {
            foreach ($attributes['settings'] as $group => $settings) {
                $order = 0;

                foreach ($settings as $setting) {
                    $this->syncSetting(array_merge($setting, [
                        'section_id' => $section->id,
                        'group'      => $group,
                        'order'      => ++$order
                    ]));
                }
            }
        }
    }

    /**
     *
     * @param  array $setting
     * @return void
     */
    protected function syncSetting($setting)
    {
        $setting = Setting::updateOrCreate(
            [
                'section_id' => $setting['section_id'],
                'handle'     => $setting['handle'],
            ],
            [
                'section_id'  => $setting['section_id'],
                'name'        => $setting['name'],
                'handle'      => $setting['handle'],
                'group'       => $setting['group'],
                'description' => $setting['description']      ?? '',
                'override'    => $setting['override']         ?? '',
                'component'   => $setting['component']        ?? '',
                'type'        => $setting['type']             ?? 'text',
                'options'     => $setting['options']          ?? null,
                'default'     => $setting['default']          ?? '',
                'value'       => $setting['value'] ?? $setting['default'] ?? '',
                'required'    => (bool) ($setting['required'] ?? true),
                'gui'         => (bool) ($setting['gui']      ?? true),
                'order'       => (int)  ($setting['order']    ?? 0),
            ]);

        unset($this->settings[$setting->id]);
    }

    /**
     * Fetch all FusionCMS System Settings
     *   grouped by it's section.
     *
     * @return array
     */
    protected function fetchAllSettings()
    {
        foreach ($this->fetchAllSettingsFiles() as $section => $filepath) {
            $settings[$section] = require $filepath;
        }

        return $settings;
    }

    /**
     * Fetch all FusionCMS System Setting files.
     *
     * @return array
     */
    protected function fetchAllSettingsFiles()
    {
        $settingPath = fusion_path('/settings');
        $allFiles    = Finder::create()->files()->name('*.php')->in($settingPath);
        $files       = [];

        foreach ($allFiles as $file) {
            $filepath = $file->getRealPath();
            $section  = basename($filepath, '.php');

            $files[$section] = $filepath;
        }

        ksort($files, SORT_NATURAL);

        return $files;
    }
}
