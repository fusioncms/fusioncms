<?php

namespace Fusion\Rules;

use Illuminate\Contracts\Validation\Rule;

class ImportStrategy implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
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
        return collect($value)->intersect(['disable','delete'])->count() !== 2;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute field cannot have both disable and delete strategies checked at the same time.';
    }
}
