<?php

namespace App\Rules;

use Symfony\Component\Mime\MimeTypes;
use Illuminate\Contracts\Validation\Rule;
use Symfony\Component\Mime\Exception\InvalidArgumentException;

class ImportFile implements Rule
{
    protected $acceptableMimes = [ 'txt', 'csv' ];

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        try {
            return in_array(
                pathinfo($value, PATHINFO_EXTENSION),
                $this->acceptableMimes
            );
        } catch(InvalidArgumentException $ex) {
            //..
        }

        return false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return "The :attribute field must be of type: " . implode(",", $this->acceptableMimes) . ".";
    }
}
