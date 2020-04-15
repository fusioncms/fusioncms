<?php

namespace Fusion\Http;

use Illuminate\Foundation\Http\FormRequest;

abstract class Form extends FormRequest
{
    /**
     * Handle the form response.
     */
    abstract public function handle();
}
