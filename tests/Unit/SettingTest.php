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
use Illuminate\Foundation\Testing\RefreshDatabase;

class SettingTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function system_settings_will_be_imported_to_the_database_upon_install()
    {
    	$this->assertDatabaseHas('setting_sections', ['name' => 'System']);
    	
    	$this->assertDatabaseHas('settings', ['name' => 'Theme', 'value' => 'hello']);
    	$this->assertDatabaseHas('settings', ['name' => 'Website Title', 'value' => 'My FusionCMS Website']);
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function system_settings_can_be_set_at_runtime()
    {
    	$this->assertTrue(setting('system.website_title') === 'My FusionCMS Website');
    	$this->assertTrue(setting('system.website_slogan') === 'Another awesome website powered by FusionCMS!');

		setting([
			'system.website_title'  => 'My New Website',
			'system.website_slogan' => 'An awesome website!'
		]);

		$this->assertTrue(setting('system.website_title') === 'My New Website');
		$this->assertTrue(setting('system.website_slogan') === 'An awesome website!');
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function settings_helper_with_parameters_will_return_specific_setting()
    {
    	$this->assertEquals(
    		setting('system')->toArray(),
    		collect([
	    		'theme'           => 'hello',
				'website_title'   => 'My FusionCMS Website',
				'website_slogan'  => 'Another awesome website powered by FusionCMS!',
				'site_url'        => 'http://localhost',
				'site_visibility' => 'public',
			])->toArray()
    	);

    	$this->assertTrue(setting('mail.mail_driver') === 'smtp');
    	$this->assertTrue(setting('mail.mail_server') === 'server@example.com');
    }
}