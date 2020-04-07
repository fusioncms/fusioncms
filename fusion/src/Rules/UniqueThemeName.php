<?php

namespace Fusion\Rules;

use Log;
use Theme;
use Exception;
use ZipArchive;
use Illuminate\Contracts\Validation\Rule;

class UniqueThemeName implements Rule
{
    /**
     * @var Collection
     */
    protected $themes;

    /**
     * @var ZipArchive
     */
    protected $zipArchive;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->zipArchive = new ZipArchive;
        $this->themes     = collect(Theme::all());
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $canUnzip   = $this->zipArchive->open($value);
        $validTheme = $canUnzip === true;

        if ($canUnzip) {
            $index      = $this->zipArchive->locateName('theme.json', ZipArchive::FL_NODIR);
            $filename   = $this->zipArchive->getNameIndex($index);
            $fileHandle = $this->zipArchive->getStream($filename);
            $settings   = $this->parseStream($fileHandle);

            $validTheme = $this->themes->every(function ($theme) use ($settings) {
                return $theme->pull('name') != ($settings['name'] ?? null) and
                       $theme->pull('slug') != ($settings['slug'] ?? null);
            });

            $this->zipArchive->close();
        }

        return $validTheme;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'A Theme with matching name already exists.';
    }

    /**
     * Parse theme.json settings file for validation.
     * [helper]
     *
     * @param  resource $handle
     * @return Collection
     */
    private function parseStream($handle)
    {
        try {
            $contents = stream_get_contents($handle);
            $contents = json_decode($contents);

            return collect($contents);
        } catch (Exception $exception) {
            Log::error('Unable to open `theme.json` file through Theme uploader: ', $exception->getMessage(), (array) $exception->getTrace()[0]);

            throw new Exception('Unable to open `theme.json` file through Theme uploader: ', $exception->getMessage());
        }
    }
}
