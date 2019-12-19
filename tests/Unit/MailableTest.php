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

use App\Models\Mailable;
use Illuminate\Support\Arr;
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MailableTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group fusioncms
     * @group mailable
     */
    public function a_request_to_register_mailables_will_update_the_database()
    {
        $this->assertDatabaseMissing('mailables', [ 'name' => 'Welcome New User' ]);
        $this->assertDatabaseMissing('mailables', [ 'name' => 'Hello New User'   ]);

        Mailable::registerNewMailables();

        $this->assertDatabaseHas('mailables', [
            'name'      => 'Welcome New User',
            'handle'    => 'welcome_new_user',
            'namespace' => 'App\Mail\WelcomeNewUser'
        ]);

        $this->assertDatabaseHas('mailables', [
            'name'      => 'Hello New User',
            'handle'    => 'hello_new_user',
            'namespace' => 'Themes\Hello\Mail\HelloNewUser'
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group mailable
     */
    public function a_request_can_be_made_to_resolve_the_mailable_class()
    {
        Mailable::registerNewMailables();

        $model = Mailable::where('handle', 'welcome_new_user')->firstOrFail();
        
        $this->assertInstanceOf($model->namespace, $model->mailable);
    }

    /**
     * @test
     * @group fusioncms
     * @group mailable
     */
    public function a_request_can_be_made_to_generate_a_set_of_placeholders_for_the_mailable_class()
    {
        Mailable::registerNewMailables();

        $model        = Mailable::where('handle', 'welcome_new_user')->firstOrFail();
        $placeholders = $model->placeholders;
        $attributes = app()->make(\App\Models\User::class)->getFillable();

        $this->assertTrue($placeholders->get('user') == $attributes);
    }
}
