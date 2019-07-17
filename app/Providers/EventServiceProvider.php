<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        /*
         * Email verified.
         */
        'Illuminate\Auth\Events\Verified' => [
            'App\Listeners\LogVerifiedUser',
        ],
        
        /*
         * User registered.
         */
        'Illuminate\Auth\Events\Registered' => [
            'Illuminate\Auth\Listeners\SendEmailVerificationNotification',
        ],
        
        /*
         * User logged in.
         */
        'Illuminate\Auth\Events\Login' => [
            'App\Listeners\LogActivityWhenUserLogsIn',
        ],

        'App\Events\FieldsetAttached' => [
            'App\Listeners\WhenFieldsetIsAttached',
        ],

        'App\Events\FieldsetDetached' => [
            'App\Listeners\WhenFieldsetIsDetached',
        ],

        'App\Events\FieldsetReplaced' => [
            'App\Listeners\WhenFieldsetIsReplaced',
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        \App\Models\Matrix::observe(\App\Observers\MatrixObserver::class);
        \App\Models\Field::observe(\App\Observers\FieldObserver::class);
        \App\Models\Section::observe(\App\Observers\SectionObserver::class);
    }
}
