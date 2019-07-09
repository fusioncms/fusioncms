<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tests\Foundation\Traits;

trait SignsIn
{
    protected function actingAsUser()
    {
        $user = factory(\App\Models\User::class)->create([
            'email_token'       => '',
            'verified'          => true,
            'email_verified_at' => now(),
        ]);

        $this->actingAs($user);

        return $user;
    }
}
