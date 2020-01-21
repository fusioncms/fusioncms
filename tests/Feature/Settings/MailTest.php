<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tests\Feature\Settings;

use Storage;
use Tests\Foundation\TestCase;
use Illuminate\Auth\AuthenticationException;
// use Illuminate\Validation\ValidationException;
// use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MailTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Called before each test is run...
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();

        Storage::fake('settings');

        $this->handleValidationExceptions();
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function a_user_with_permissions_can_update_mail_settings()
    {
        $this->withoutExceptionHandling();
        
        $this->actingAs($this->admin, 'api');

        $this->json('PATCH', 'api/settings/mail', [])
            ->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function a_user_without_permissions_can_not_update_mail_settings()
    {
        $this->expectException(AuthenticationException::class);
        
        $this->json('PATCH', 'api/settings/mail', [])
            ->assertStatus(422);
    }

    // /**
    //  * @test
    //  * @group fusioncms
    //  * @group settings
    //  */
    // public function an_update_to_mail_settings_will_reflect_in_the_settings_file()
    // {
    //     $this->actingAs($this->admin, 'api');

    //     $this->json('PATCH', 'api/settings/mail', [

    //     ])->assertStatus(200);
    // }
}
