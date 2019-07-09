<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http;

use Illuminate\Foundation\Http\FormRequest;

abstract class Form extends FormRequest
{
    /**
     * Handle the form response.
     */
    abstract public function handle();
}
