<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use App\Models\Form;
use App\Http\Honeypot;

if (! function_exists('render_form')) {
    /**
     * Render the given form.
     *
     * @return String
     */
    function render_form($handle, $template = null, $additional = [])
    {
        extract($additional);

        $form = Form::where('handle', $handle)->first();

        if ($form) {
            return view($template ?? ($form->form_template ?: 'forms.default'), compact('form', array_keys($additional)));
        }
    }
}

if (! function_exists('honeypot_fields')) {
    /**
     * Render the honeypot fields.
     *
     * @return String
     */
    function honeypot_fields()
    {
        $honeypot = new Honeypot;

        return $honeypot->generate();
    }
}