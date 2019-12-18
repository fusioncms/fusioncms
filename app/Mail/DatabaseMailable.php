<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Mail;

use File;
use Storage;
use App\Models\Mailable;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Mail\Mailable as BaseMailable;

abstract class DatabaseMailable extends BaseMailable
{
	/**
     * Email template.
     * 
     * @var string
     */
    public $layout = 'emails.layouts.default';

	/**
	 * Get mailable name.
	 * 
	 * @return string
	 */
	public function getName()
	{
		if (isset($this->name)) {
			return $this->name;
		}

		$name = class_basename(get_class($this));
		$name = implode(' ', preg_split('/(?<=[a-z])(?=[A-Z])/', $name));

		return $name;
	}

	/**
	 * Get mailable handle.
	 * 
	 * @return string
	 */
    public function getHandle()
    {
    	if (isset($this->handle)) {
    		return $this->handle;
    	}

    	return Str::slug($this->getName(), '_');
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
		// Setup..
		$mailable = $this->getMailable();
		$path     = Storage::disk('temp')->path("views/emails");
		$template = "views/emails/{$mailable->handle}.blade.php";
		
		// Register template path..
    	app('view.finder')->addLocation($path);

		// Temporarily store email template..
		Storage::disk('temp')->put($template, $mailable->markdown);
    	
		// Remove after finished..
		register_shutdown_function(function () use ($template) {
			Storage::disk('temp')->delete($template);
		});
    	
		return $this->markdown($mailable->handle);
    }

    /**
     * Get record from storage.
     * 
     * @return Mailable
     */
    protected function getMailable()
    {
    	return Mailable::where('handle', $this->getHandle())->firstOrFail();
    }
}