<?php

namespace App\Providers;

use Illuminate\Support\Str;
use Illuminate\Support\ServiceProvider;

class MacroServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        Str::macro('addAbleSuffix', function($word) {
            $temp               = Str::singular(strtolower($word));
            $lastLetter         = $temp[strlen($temp) - 1];
            $secondToLastLetter = $temp[strlen($temp) - 2];

            $vowels     = ['a', 'e', 'i', 'o', 'u'];
            $consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

            $exceptions = [
                'category' => 'categorizable',
            ];

            if (array_key_exists($temp, $exceptions)) {
                return $exceptions[$temp];
            }

            if ($lastLetter == 'y') {
                if (in_array($secondToLastLetter, $consonants)) {
                    $temp = substr_replace($temp, '', -2);
                    
                    return $temp.'iable';
                }

                return $temp.'able';
            }

            if ($lastLetter == 'e') {
                $temp = substr_replace($temp, '', -1);
                    
                return $temp.'able';
            }

            $exceptions = ['color', 'tax'];

            if (! in_array($temp, $exceptions)
                and in_array($lastLetter, $consonants)
                and in_array($secondToLastLetter, $vowels)
            ) {
                return $temp.$lastLetter.'able';
            }

            return $temp.'able';
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
