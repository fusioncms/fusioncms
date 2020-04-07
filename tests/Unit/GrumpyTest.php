<?php


namespace Tests\Unit;

use Tests\Foundation\TestCase;
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
    public function yet_another_test()
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
