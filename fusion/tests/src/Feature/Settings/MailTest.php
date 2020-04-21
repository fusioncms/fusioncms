<?php

namespace Fusion\Tests\Feature\Settings;

use Mail;
use Storage;
use Fusion\Tests\TestCase;
use Illuminate\Auth\AuthenticationException;
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

        $this->handleValidationExceptions();
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function a_user_with_permissions_can_update_mail_settings()
    {
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

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function an_update_to_mail_settings_will_reflect_in_the_settings_file()
    {
        $this
            ->be($this->admin, 'api')
            ->json('PATCH', 'api/settings/mail', [
                'mail_smtp_host' => 'smtp.mailtrap.io',
                'mail_smtp_port' => 2525,
            ])->assertStatus(200);

        $this->assertDatabaseHas('settings', [
            'handle' => 'mail_smtp_host',
            'value'  => 'smtp.mailtrap.io',
        ]);

        $this->assertDatabaseHas('settings', [
            'handle' => 'mail_smtp_port',
            'value'  => '2525',
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function a_user_with_permissions_can_send_a_test_email()
    {
        Mail::fake();

        $this->actingAs($this->admin, 'api');
        $this->json('GET', 'api/mail/test', []);

        Mail::assertSent(\Fusion\Mail\WelcomeNewUser::class, function($mail) {
            return $mail->user->id === $this->admin->id;
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group settings
     */
    public function a_user_without_permissions_can_not_send_a_test_email()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('GET', 'api/settings/mail', []);
    }
}
