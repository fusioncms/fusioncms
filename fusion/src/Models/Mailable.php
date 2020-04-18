<?php

namespace Fusion\Models;

use File;
use Exception;
use ReflectionClass;
use ReflectionProperty;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use Caffeinated\Themes\Facades\Theme;
use Spatie\Activitylog\Models\Activity;
use Illuminate\Database\Eloquent\Model;
use Fusion\Models\Mailable as MailableModel;
use Spatie\Activitylog\Traits\LogsActivity;

class Mailable extends Model
{
    use LogsActivity;

	/**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
    	'name',
    	'handle',
        'namespace',
    	'markdown',
    	'status'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
    	'status' => 'boolean'
    ];

    /**
     * Appends custom attributes.
     *
     * @var array
     */
    protected $appends = ['theme'];

    /**
     * Get resolved DatabaseMailable class.
     * [Derived]
     *
     * @return DatabaseMailable
     */
    public function getMailableAttribute()
    {
        return resolve($this->namespace);
    }

    /**
     * Get which Theme this Mailable comes from.
     * [Derived]
     *
     * @return DatabaseMailable
     */
    public function getThemeAttribute()
    {
        if (Str::startsWith($this->namespace, 'Themes')) {
            return explode('\\', $this->namespace)[1];
        }

        return false;
    }

    /**
     * Scope a query to only include active mailables.
     * AKA Fusion and Current Theme
     *
     * @param  Builder  $query
     * @return Builder
     */
    public function scopeActive($query)
    {
        return $query->where('namespace', 'like', 'Themes\\\\'. Theme::getCurrent() . '%')
                     ->orWhere('namespace', 'like', "Fusion\\\Mail%");
    }

    /**
     * Get `placeholder` attribute.
     * [Derived]
     *
     * @return Collection
     */
    public function getPlaceholdersAttribute()
    {
        $reflection = new ReflectionClass($this->mailable);
        $properties = $reflection->getProperties(ReflectionProperty::IS_PUBLIC);

        return collect($properties)->map(function ($property) {
            if ($property->getDeclaringClass()->getName() == $this->namespace) {
                return [ $property->getName() => $property->getValue($this->mailable) ];
            }
        })->collapse()->filter()->map(function ($value, $name) {
            if ($value instanceOf Model) {
                return $value->getFillable();
            } elseif ($value instanceOf Collection) {
                return $value->keys();
            } elseif (is_array($value)) {
                if (Arr::isAssoc($value)) {
                    return array_keys($value);
                } else {
                    return array_values($value);
                }
            } else {
                return $name;
            }
        });
    }

    /**
     * Register new Mailables in storage.
     * [Helper]
     *
     * @return void
     */
    public static function registerNewMailables()
    {
        $fusionMailFiles = File::files(__DIR__.'/../Mail');
        $themeMailFiles  = File::files(Theme::path('src/Mail'));

        // Resolve fusion mailables..
        foreach ($fusionMailFiles as $file) {
            self::resolveNewMailable('Fusion\\Mail\\' . $file->getFilenameWithoutExtension());
        }

        // Resolve theme mailables..
        foreach ($themeMailFiles as $file) {
            self::resolveNewMailable('Themes\\' . basename(Theme::path()) . '\\Mail\\' . $file->getFilenameWithoutExtension());
        }
    }

    /**
     * Resolve and create new Database Mailable.
     * [Helper]
     *
     * @param  string $namespace
     * @return void
     */
    private static function resolveNewMailable($namespace)
    {
        $reflection = new ReflectionClass($namespace);

        if ($reflection->isSubclassOf('Fusion\Mail\DatabaseMailable')) {
            $mailable = resolve($namespace);

            try {
                static::firstOrCreate([
                    'name'      => $mailable->getName(),
                    'handle'    => $mailable->getHandle(),
                    'namespace' => $namespace,
                    'markdown'  => File::get($mailable->getTemplate()->getPath()),
                ]);
            } catch (Exception $exception) {
                logger()->error($exception->getMessage());
            }
        }
    }

    /**
     * Just log update event.
     *
     * @var array
     */
    protected static $recordEvents = ['updated'];

    /**
     * Tap into activity before persisting to database.
     *
     * @param  \Spatie\Activitylog\Models\Activity $activity
     * @param  string   $eventName
     * @return void
     */
    public function tapActivity(Activity $activity, string $eventName)
    {
        $subject = $activity->subject;
        $action  = ucfirst($eventName);

        $activity->description = "{$action} mailable ({$subject->name})";
        $activity->properties  = [
            'icon' => 'mail-bulk',
            'link' => "mailables/{$subject->id}/edit"
        ];
    }
}
