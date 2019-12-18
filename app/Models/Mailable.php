<?php

namespace App\Models;

use File;
use ReflectionClass;
use ReflectionProperty;
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
