<?php

namespace Fusion\Rules;

use Log;
use Exception;
use ZipArchive;
use Caffeinated\Modules\Facades\Module;
use Illuminate\Contracts\Validation\Rule;

class UniqueModuleName implements Rule
{
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
        $canUnzip = $this->zipArchive->open($value);
        $isValid  = $canUnzip === true;

        if ($canUnzip) {
            $index      = $this->zipArchive->locateName('module.json', ZipArchive::FL_NODIR);
            $filename   = $this->zipArchive->getNameIndex($index);
            $fileHandle = $this->zipArchive->getStream($filename);
            $settings   = $this->parseStream($fileHandle);

            $isValid = Module::all()->every(function ($module) use ($settings) {
                return $module['name'] != ($settings['name'] ?? null) and
                       $module['slug'] != ($settings['slug'] ?? null);
            });

            $this->zipArchive->close();
        }

        return $isValid;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'A Module with matching name already exists.';
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
            Log::error('Unable to open `module.json` file through Module uploader: ', $exception->getMessage(), (array) $exception->getTrace()[0]);

            throw new Exception('Unable to open `module.json` file through Module uploader: ', $exception->getMessage());
        }
    }
}
