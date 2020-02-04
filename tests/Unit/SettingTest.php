<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tests\Unit;

use App\Models\Setting;
use App\Models\SettingSection;
use Tests\Foundation\TestCase;
use Illuminate\Support\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SettingTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function a_setting_belongs_to_a_setting_section()
    {
    	$this->assertInstanceOf(SettingSection::class, Setting::first()->section);
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function a_setting_section_has_many_settings()
    {
        $this->assertInstanceOf(Collection::class, SettingSection::first()->settings);
        $this->assertInstanceOf(Setting::class, SettingSection::first()->settings->first());
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function settings_will_be_imported_to_the_database_upon_install()
    {
        $this->assertDatabaseHas('setting_sections', ['name' => 'System']);
        
        $this->assertDatabaseHas('settings', ['name' => 'Theme', 'value' => 'hello']);
        $this->assertDatabaseHas('settings', ['name' => 'Website Title', 'value' => 'My FusionCMS Website']);
    }
}