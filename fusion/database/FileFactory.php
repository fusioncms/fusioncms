<?php

use Fusion\Models\File;
use Fusion\Contracts\Factory;
use Illuminate\Support\Str;

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
     * @var integer
     */
    protected $directory;

    /**
     * @var array
     */
    protected $state = 'image';

    /**
     * Create a new File factory.
     *
     * @return \Fusion\Models\File
     */
    public function create()
    {
        $overrides = [
            'extension' => $this->extension,
        ];

        if ($this->name) {
            $overrides['uuid']     = unique_id();
            $overrides['name']     = $this->name;
            $overrides['slug']     = Str::slug("{$overrides['uuid']}-{$overrides['name']}");
            $overrides['original'] = $this->name.'.'.$this->extension;
        }

        if ($this->mimetype) {
            $overrides['mimetype'] = $this->mimetype;
        }

        if ($this->bytes) {
            $overrides['bytes'] = $this->bytes;
        }

        if ($this->directory) {
            $overrides['directory_id'] = $this->directory;
        }

        return factory(File::class)->states($this->state)->create($overrides);
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
     * Create a file with factory state.
     *
     * @return \FileFactory
     */
    public function withState($state)
    {
        $this->state = $state;

        return $this;
    }

    /**
     * Create a directory with the given parent_id.
     *
     * @param  \Fusion\Models\Directory|integer  $parent
     * @return \DirectoryFactory
     */
    public function withDirectory($directory)
    {
        $this->directory = $directory instanceof Directory ? $directory->id : $directory;

        return $this;
    }

    /**
     * Create a file with an image mimetype.
     *
     * @return \FileFactory
     */
    public function asImage()
    {
        return $this->withState('image');
    }

    /**
     * Create a file with an audio mimetype.
     *
     * @return \FileFactory
     */
    public function asAudio()
    {
        return $this->withState('audio');
    }

    /**
     * Create a file with an audio mimetype.
     *
     * @return \FileFactory
     */
    public function asVideo()
    {
        return $this->withState('video');
    }

    /**
     * Create a file with an audio mimetype.
     *
     * @return \FileFactory
     */
    public function asDocument()
    {
        return $this->withState('document');
    }
}