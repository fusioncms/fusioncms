<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Providers;

use Blade;
use Illuminate\Support\ServiceProvider;

class BladeServiceProvider extends ServiceProvider
{
    /**
     * Boot the provided services.
     *
     * @return void
     */
    public function boot()
    {
        $this->cacheDirectives();
        $this->themeDirectives();
    }

    /**
     * Register the provided services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    protected function cacheDirectives()
    {
        Blade::directive('cache', function ($expression) {
            return "<?php if (! app()->make(\App\Services\Cache\Matryoshka\Parser::class)->setUp($expression)) { ?>";
        });

        Blade::directive('endcache', function () {
            return "<?php } echo app()->make(\App\Services\Cache\Matryoshka\Parser::class)->tearDown(); ?>";
        });
    }

    public function themeDirectives()
    {
        Blade::directive('macro', function ($expression) {
            preg_match_all('/\((.*?)\)/i', $expression, $matches);

            $match = $matches[1][0];
            $args  = explode(',', $match);
            $name  = $args[0];

            $name = str_replace('"', '', $name);
            $name = str_replace("'", '', $name);

            unset($args[0]);

            $code = "<?php function {$name}";

            if (count($args)) {
                $code .= '(' . implode(',', $args) . ')';
            } else {
                $code .= '()';
            }

            $code .= ' { ob_start(); ?>';

            return $code;
        });

        Blade::directive('endmacro', function ($expression) {
            return "\n<?php return ob_get_clean(); } ?>\n";
        });
    }
}
