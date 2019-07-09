<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Events;

use Illuminate\Queue\SerializesModels;

class UserDeleted
{
    use SerializesModels;

    /**
     * @var App\Models\User
     */
    public $user;

    /**
     * Create a new event instance.
     *
     * @param  User                    $user
     * @return void
     */
    public function __construct($user)
    {
        $this->user = $user;
    }
}
