<?php

namespace Fusion\Mail;

use Fusion\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;

class WelcomeNewUser extends DatabaseMailable
{
    use Queueable, SerializesModels;

    /**
     * User instance.
     *
     * @var User
     */
    public $user;

    /**
     * Default inner template.
     *
     * @var string
     */
    protected $template = 'emails.templates.welcome';


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
