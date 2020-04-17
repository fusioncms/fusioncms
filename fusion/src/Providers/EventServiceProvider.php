<?php

namespace Fusion\Providers;

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
        'Fusion\Events\ServingFusion' => [
            'Fusion\Listeners\FusionServed'
        ],

        'Illuminate\Auth\Events\Verified' => [
            'Fusion\Listeners\LogVerifiedUser',
        ],

        'Illuminate\Auth\Events\Registered' => [
            'Illuminate\Auth\Listeners\SendEmailVerificationNotification',
        ],

        'Illuminate\Auth\Events\Login' => [
            'Fusion\Listeners\LogActivityWhenUserLogsIn',
        ],

        'Fusion\Events\FieldsetAttached' => [
            'Fusion\Listeners\WhenFieldsetIsAttached',
        ],

        'Fusion\Events\FieldsetDetached' => [
            'Fusion\Listeners\WhenFieldsetIsDetached',
        ],

        'Fusion\Events\FieldsetReplaced' => [
            'Fusion\Listeners\WhenFieldsetIsReplaced',
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

        \Fusion\Models\Menu::observe(\Fusion\Observers\MenuObserver::class);
        \Fusion\Models\Form::observe(\Fusion\Observers\FormObserver::class);
        \Fusion\Models\Field::observe(\Fusion\Observers\FieldObserver::class);
        \Fusion\Models\Matrix::observe(\Fusion\Observers\MatrixObserver::class);
        \Fusion\Models\Section::observe(\Fusion\Observers\SectionObserver::class);
        \Fusion\Models\Fieldset::observe(\Fusion\Observers\FieldsetObserver::class);
        \Fusion\Models\Taxonomy::observe(\Fusion\Observers\TaxonomyObserver::class);
        \Fusion\Models\Extension::observe(\Fusion\Observers\ExtensionObserver::class);
    }
}