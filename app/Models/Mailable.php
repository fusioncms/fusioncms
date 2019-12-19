<?php

namespace App\Models;

use File;
use Theme;
use ReflectionClass;
use ReflectionProperty;
use Illuminate\Support\Str;
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
                $name  = $property->getName();
                $value = $property->getValue($this->mailable);

                if ($value instanceOf Model) {
                    return [$name => $value->getFillable()];
                } else {
                    return [$name => $value];
                }
            }
        })->collapse()->filter();
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
