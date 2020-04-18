<?php

namespace Tests\Unit;

use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class GrumpyTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_asserts_true()
    {
        $this->assertTrue(true);
    }

    /** @test */
    public function it_asserts_false()
    {
        $this->assertFalse(false);
    }

    /** @test */
    public function it_asserts_database_has_starter_data()
    {
        $this->assertDatabaseHas('users', [
            'name'  => $this->admin->name,
            'email' => $this->admin->email,
        ]);

        $this->assertDatabaseHas('users', [
            'name'  => $this->user->name,
            'email' => $this->user->email,
        ]);
    }
}
