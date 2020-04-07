<?php

namespace Fusion\Rules;

use Illuminate\Contracts\Validation\Rule;

class SecurePassword implements Rule
{
    /**
     * Min password length requirement.
     *
     * @var integer
     */
    protected $minLength = 8;

    /**
     * Last validation error.
     *
     * @var string|null
     */
    protected $errors;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        // ..
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
        if (strlen($value) < $this->minLength)
            $this->error = "The :attribute field must be at least {$this->minLength} characters long.";
        elseif (! preg_match('/[a-z]{1,}/', $value))
            $this->error = "The :attribute field must have at least 1 lowercase letter.";
        elseif (! preg_match('/[A-Z]{1,}/', $value))
            $this->error = "The :attribute field must have at least 1 uppercase letter.";
        elseif (! preg_match('/[0-9]{1,}/', $value))
            $this->error = "The :attribute field must have at least 1 digit.";
        elseif (! preg_match('/[@$!%*#?&]{1,}/', $value))
            $this->error = "The :attribute field must have at least 1 symbol.";

        return empty($this->error);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return $this->error;
    }
}
