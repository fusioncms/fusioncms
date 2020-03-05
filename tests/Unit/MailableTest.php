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
use Illuminate\Support\Str;
use Tests\Foundation\TestCase;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MailableTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /**
     * @test
     * @group unit
     * @group mailable
     */
    public function each_mailable_must_have_a_unique_handle()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: mailables.handle');
        
        DB::table('mailables')->insert([
            'name'      => ($name = $this->faker->word),
            'handle'    => Str::slug($name),
            'namespace' => 'App\Mail\FakeMailable'
        ]);

        DB::table('mailables')->insert([
            'name'      => $name,
            'handle'    => Str::slug($name),
            'namespace' => 'App\Mail\FakeMailable'
        ]);
    }

    /**
     * @test
     * @group unit
     * @group mailable
     */
    public function a_request_to_register_mailables_will_update_the_database()
    {
        $this->assertDatabaseMissing('mailables', [ 'name' => 'Welcome New User' ]);

        Mailable::registerNewMailables();

        $this->assertDatabaseHas('mailables', [
            'name'      => 'Welcome New User',
            'handle'    => 'welcome_new_user',
            'namespace' => 'App\Mail\WelcomeNewUser'
        ]);
    }

    /**
     * @test
     * @group unit
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
     * @group unit
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
