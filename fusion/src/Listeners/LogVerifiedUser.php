<?php

namespace Fusion\Listeners;

use Mail;
use Exception;
use Fusion\Mail\WelcomeNewUser;
use Illuminate\Auth\Events\Verified;
use Illuminate\Contracts\Queue\ShouldQueue;

class LogVerifiedUser implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param  Verified $verified
     * @return void
     */
    public function handle(Verified $verified)
    {
        if (setting('users.user_email_welcome') === 'enabled') {
            Mail::to($verified->user)->send(new WelcomeNewUser($verified->user));
        }
    }

    /**
     * The job failed to process.
     *
     * @param  Verified   $verified
     * @param  Exception  $exception
     * @return void
     */
    public function failed(Verified $verified, Exception $exception)
    {
        //
    }
}
