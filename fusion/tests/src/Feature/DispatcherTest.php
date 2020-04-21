<?php

namespace Fusion\Tests\Feature;

use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DispatcherTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function as_an_authorized_user_the_dispatcher_should_resolve_requests_appropriately()
    {
        $this->actingAs($this->admin, 'api');

        $response = fusion()->get('users/1');

        $this->assertNotNull($response);
        $this->assertEquals($response->data->name, 'Jane Doe');
    }

    /** @test */
    public function as_an_unauthorized_guest_the_dispatcher_should_not_resolve_requests()
    {
        $response = fusion()->get('users/1');

        $this->assertNull($response);
    }

    /** @test */
    public function as_an_unauthorized_guest_the_dispatcher_should_resolve_requests_when_explicitly_authorized()
    {
        $response = fusion()->authorize()->get('users/1');

        $this->assertNotNull($response);
        $this->assertEquals($response->data->name, 'Jane Doe');
    }

    /** @test */
    public function as_an_authorized_user_the_dispatcher_should_allow_for_disabling_throttle_checks()
    {
        $this->actingAs($this->admin, 'api');

        // ...dispatcher won't be throttled for 60 attempts...
        for ($i = 0; $i < 60; ++$i) {
            $response = fusion()->get('users/1');
            $this->assertNotNull($response);
        }

        // ...until the 61st attempt...
        $response = fusion()->get('users/1');
        $this->assertNull($response);

        // ...but we can dethrottled the request
        $response = fusion()->dethrottle()->get('users/1');
        $this->assertNotNull($response);
    }
}
