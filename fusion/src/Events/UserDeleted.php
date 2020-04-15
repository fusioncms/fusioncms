<?php

namespace Fusion\Events;

use Illuminate\Queue\SerializesModels;

class UserDeleted
{
    use SerializesModels;

    /**
     * @var Fusion\Models\User
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
