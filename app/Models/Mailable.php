<?php

namespace App\Models;

use File;
use Theme;
use ReflectionClass;
use ReflectionProperty;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use Illuminate\Database\Eloquent\Model;
use App\Models\Mailable as MailableModel;

class Mailable extends Model
{
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
                     ->orWhere('namespace', 'like', "App\\\Mail%");
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
        $fusionMailFiles = File::files(app_path('Mail'));
        $themeMailFiles  = File::files(Theme::path('src/Mail'));

        // Resolve fusion mailables..
        foreach ($fusionMailFiles as $file) {
            self::resolveNewMailable('App\\Mail\\' . $file->getFilenameWithoutExtension());
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

        if ($reflection->isSubclassOf('App\Mail\DatabaseMailable')) {
            $mailable = resolve($namespace);

            static::firstOrCreate([
                'name'      => $mailable->getName(),
                'handle'    => $mailable->getHandle(),
                'namespace' => $namespace,
            ]);
        }
    }
}
