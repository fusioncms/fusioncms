<?php

namespace Fusion\Rules;

use ZipArchive;
use Illuminate\Contracts\Validation\Rule;

class ValidTheme implements Rule
{
    /**
     * @var ZipArchive
     */
    protected $zipArchive;

    /**
     * @var array
     */
    protected $requiredFiles;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->zipArchive    = new ZipArchive;
        $this->requiredFiles = ['theme.json','preview.png'];
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
            foreach ($this->requiredFiles as $requiredFile) {
                if ($this->zipArchive->locateName($requiredFile, ZipArchive::FL_NODIR) === false) {
                    $validTheme = false;
                }
            }

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
        return 'A theme requires the following files: ' . implode(', ', $this->requiredFiles) . '.';
    }
}
