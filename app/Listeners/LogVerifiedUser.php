<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Listeners;

use Mail;
use Exception;
use App\Mail\WelcomeNewUser;
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
