<?php

namespace Fusion\Mail;

use File;
use Storage;
use Exception;
use Fusion\Models\Mailable;
use Illuminate\Support\Str;
use InvalidArgumentException;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Mail\Mailable as BaseMailable;

abstract class DatabaseMailable extends BaseMailable
{
	/**
     * Default outer template.
     *
     * @var string
     */
    protected $layout = 'emails.layouts.default';

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
     * Get mailable default template.
     *
     * @return View
     */
    public function getTemplate()
    {
        if (! property_exists($this, 'template')) {
            throw new Exception('Undefined property: `template` not defined in class: ' . get_class($this));
        }

        try {
            return view($this->template);
        } catch (InvalidArgumentException $exception) {
            throw new InvalidArgumentException($exception->getMessage());
        }
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
		// Setup
		$mailable = $this->getMailableModel();
		$path     = Storage::disk('temp')->path("views/emails");
		$template = "views/emails/{$mailable->handle}.blade.php";

		// Register temporary template path..
    	app('view.finder')->addLocation($path);

    	// Layout contents
    	$contents = File::get(view($this->layout)->getPath());
    	$contents = str_replace('--markdown--', $mailable->markdown, $contents);

		// Temporarily store email template..
		Storage::disk('temp')->put($template, $contents);

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
    protected function getMailableModel()
    {
    	return Mailable::where('handle', $this->getHandle())->firstOrFail();
    }
}