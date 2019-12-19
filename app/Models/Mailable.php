<?php

namespace App\Models;

use File;
use ReflectionClass;
use ReflectionProperty;
use Illuminate\Support\Arr;
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
        $files = File::files(app_path('Mail'));
    
        foreach ($files as $file) {
            $namespace  = 'App\\Mail\\' . $file->getFilenameWithoutExtension();
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
}
