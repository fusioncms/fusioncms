<?php

namespace Fusion\Rules;

use GuzzleHttp\Client;
use Illuminate\Contracts\Validation\Rule;

class reCAPTCHA implements Rule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $client   = new Client;
        $response = $client->request('POST', 'https://www.google.com/recaptcha/api/siteverify', [
            'form_params' => [
                'secret'   => setting('recaptcha_site_key'),
                'response' => $value,
            ],
        ]);

        $body = json_decode((string) $response->getBody());

        return $body->success;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The reCAPTCHA was incorrect.';
    }
}
