<?php

use App\Models\File;
use App\Contracts\Factory;

class FileFactory implements Factory
{
    /**
     * @var string
     */
    protected $name;

    /**
     * @var string
     */
    protected $extension = 'png';

    /**
     * @var string
     */
    protected $mimetype;

    /**
     * @var integer
     */
    protected $bytes;

    /**
     * Create a new File factory.
     * 
     * @return \App\Models\File
     */
    public function create()
    {
        $overrides = [
            'extension' => $this->extension,
        ];

        if ($this->name) {
            $overrides['uuid']     = unique_id();
            $overrides['name']     = $this->name;
            $overrides['original'] = $this->name.'.'.$this->extension;
        }

        if ($this->mimetype) {
            $overrides['mimetype'] = $this->mimetype;
        }

        if ($this->bytes) {
            $overrides['bytes'] = $this->bytes;
        }

        return factory(File::class)->create($overrides);
    }

    /**
     * Create a file with the given name.
     * 
     * @param  string  $name
     * @return \FileFactory
     */
    public function withName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Create a file with the given size in bytes.
     * 
     * @param  integer  $bytes
     * @return \FileFactory
     */
    public function withSize($bytes)
    {
        $this->bytes = $bytes;

        return $this;
    }

    /**
     * Create a file with the given extension.
     * 
     * @param  string  $extension
     * @return \FileFactory
     */
    public function withExtension($extension)
    {
        $this->extension = $extension;

        return $this;
    }

    /**
     * Create a file with the given mimetype.
     * 
     * @param  string  $mimetype
     * @return \FileFactory
     */
    public function withMimetype($mimetype)
    {
        $this->mimetype = $mimetype;

        return $this;
    }

    /**
     * Create a file with an image mimetype.
     * 
     * @return \FileFactory
     */
    public function asImage()
    {
        $this->mimetype  = 'image/png';
        $this->extension = 'png';

        return $this;
    }

    /**
     * Create a file with an audio mimetype.
     * 
     * @return \FileFactory
     */
    public function asAudio()
    {
        $this->mimetype  = 'audio/ogg';
        $this->extension = 'ogg';

        return $this;
    }

    /**
     * Create a file with an audio mimetype.
     * 
     * @return \FileFactory
     */
    public function asVideo()
    {
        $this->mimetype  = 'video/webm';
        $this->extension = 'webm';

        return $this;
    }

    /**
     * Create a file with an audio mimetype.
     * 
     * @return \FileFactory
     */
    public function asDocument()
    {
        $this->mimetype  = 'text/plain';
        $this->extension = 'txt';

        return $this;
    }
}