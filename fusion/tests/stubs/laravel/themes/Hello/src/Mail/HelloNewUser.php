<?php

namespace Themes\Hello\Mail;

use Fusion\Models\User;
use Illuminate\Bus\Queueable;
use Fusion\Mail\DatabaseMailable;
use Illuminate\Queue\SerializesModels;

class HelloNewUser extends DatabaseMailable
{
    use Queueable, SerializesModels;

    /**
     * User instance.
     *
     * @var User
     */
    public $user;

    /**
     * Create a new message instance.
     *
     * @param  User  $user
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }
}
