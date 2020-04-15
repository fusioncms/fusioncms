<?php

namespace Fusion\Rules;

use GuzzleHttp\Client;
use Illuminate\Contracts\Validation\Rule;

class PwnedPassword implements Rule
{
    /**
     * @var   Number of times password has been compromised
     */
    protected $count;

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $client = new Client;
        $hash   = strtoupper(sha1($value));
        $range  = substr($hash, 0, 5);
        $suffix = substr($hash, 5);

        $response = $client->request('GET', "https://api.pwnedpasswords.com/range/{$range}", [
            'headers' => [
                'User-Agent'  => 'FusionCMS',
                'Accept'      => 'application/json',
                'api-version' => 2,
            ],
        ]);

        if ($response->getStatusCode() !== 200) {
            return true;
        }

        $collection = explode("\n", (string) $response->getBody());
        $collection = collect($collection)
            ->mapWithKeys(function ($hash) {
                [$suffix, $count] = explode(':', trim($hash));

                return [$suffix => $count];
            });

        if ($collection->has($suffix)) {
            $this->count = $collection->get($suffix);

            return false;
        }

        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        if ($this->count > 1) {
            return "This password has appeared in {$this->count} data breaches and should never be used. Please use a different password.";
        } else {
            return 'This password has appeared in a data breach and should never be used. Please use a different password.';
        }
    }
}
