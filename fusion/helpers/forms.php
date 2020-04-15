<?php

use Fusion\Models\Form;
use Fusion\Http\Honeypot;

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