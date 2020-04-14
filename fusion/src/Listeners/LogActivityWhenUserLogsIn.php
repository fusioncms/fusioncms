<?php


namespace Fusion\Listeners;

use Illuminate\Auth\Events\Login;
use Illuminate\Contracts\Queue\ShouldQueue;

class LogActivityWhenUserLogsIn implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param  Login $event
     * @return void
     */
    public function handle(Login $event)
    {
        activity('sign-ins')
            ->withProperties([
                'icon' => 'sign-in-alt',
            ])
            ->log('Signed in');
    }

    /**
     * The job failed to process.
     *
     * @param  Exception  $exception
     * @return void
     */
    public function failed(Login $event, Exception $exception)
    {
        //
    }
}
