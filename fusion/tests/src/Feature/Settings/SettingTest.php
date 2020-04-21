<?php

namespace Fusion\Tests\FeatureSettings;

use Exception;
use Fusion\Tests\TestCase;
use Fusion\Facades\Setting;
use InvalidArgumentException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SettingTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function a_setting_can_be_set_at_runtime()
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
    public function a_setting_update_will_fail_if_full_setting_path_not_defined()
    {
        $this->expectException(InvalidArgumentException::class);

        setting(['system'  => [
            'website_title'  => 'My New Website',
            'website_slogan' => 'An awesome website!',
        ]]);
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function a_setting_update_will_fail_if_setting_cannot_be_found()
    {
        $this->expectException(Exception::class);

        setting(['system.foo' => 'bar']);
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function a_request_for_setting_can_be_loaded_by_full_address()
    {
        $this->assertTrue(setting('mail.mail_driver') === 'smtp');
        $this->assertTrue(setting('mail.mail_server') === 'server@example.com');
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function a_request_for_setting_can_be_loaded_by_section()
    {
        $this->assertEquals(
            setting('system'),
            [
                'theme'           => 'hello',
                'website_title'   => 'My FusionCMS Website',
                'website_slogan'  => 'Another awesome website powered by FusionCMS!',
                'site_url'        => 'http://localhost',
                'site_visibility' => 'public',
            ]
        );
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function a_request_for_settings_without_parameters_will_load_all_settings()
    {
        $settings = setting();

        $this->assertArrayHasKey('api', $settings);
        $this->assertArrayHasKey('backups', $settings);
        $this->assertArrayHasKey('cache', $settings);
        $this->assertArrayHasKey('mail', $settings);
        $this->assertArrayHasKey('system', $settings);
    }

    // ---------------

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function settings_facade_request_for_all_settings_will_load_all_settings()
    {
        $settings = Setting::all();

        $this->assertArrayHasKey('api', $settings);
        $this->assertArrayHasKey('backups', $settings);
        $this->assertArrayHasKey('cache', $settings);
        $this->assertArrayHasKey('mail', $settings);
        $this->assertArrayHasKey('system', $settings);
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function settings_facade_can_load_many_settings_via_get_method()
    {
        $settings = Setting::get(['api','mail']);

        $this->assertArrayHasKey('api', $settings);
        $this->assertArrayHasKey('mail', $settings);
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function settings_facade_can_load_many_settings_via_getMany_method()
    {
        $settings = Setting::getMany(['api','mail']);

        $this->assertArrayHasKey('api', $settings);
        $this->assertArrayHasKey('mail', $settings);
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function settings_facade_can_update_one_or_more_settings_at_runtime()
    {
        $this->assertTrue(Setting::get('system.website_title') === 'My FusionCMS Website');
        $this->assertTrue(Setting::get('system.website_slogan') === 'Another awesome website powered by FusionCMS!');

        Setting::set([
            'system.website_title'  => 'My New Website',
            'system.website_slogan' => 'An awesome website!'
        ]);

        $this->assertTrue(Setting::get('system.website_title') === 'My New Website');
        $this->assertTrue(Setting::get('system.website_slogan') === 'An awesome website!');
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function settings_facade_can_handle_requests_for_setting_existence()
    {
        $this->assertTrue(Setting::has('system.website_title'));
        $this->assertTrue(Setting::has('system'));

        $this->assertFalse(Setting::has('system.foo'));
        $this->assertFalse(Setting::has('bar'));
        $this->assertFalse(Setting::has('bar.baz'));
    }

    // ---------------

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function settings_with_override_will_override_laravel_config_properties()
    {
        // update two `overridding` settings
        setting([
            'mail.mail_server' => 'admin@website.com',
            'mail.mail_name'   => 'FusionCMS Admin'
        ]);

        $this->assertEquals(config('mail.from.address'), 'admin@website.com');
        $this->assertEquals(config('mail.from.name'), 'FusionCMS Admin');
    }
}