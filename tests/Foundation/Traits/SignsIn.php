<?php


namespace Tests\Foundation\Traits;

trait SignsIn
{
    protected function actingAsUser()
    {
        $user = factory(\Fusion\Models\User::class)->create([
            'email_verified_at' => now(),
        ]);

        $this->actingAs($user);

        return $user;
    }
}
