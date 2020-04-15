<?php

namespace Fusion\Providers;

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
        $this->registerAppDirectives();
        $this->registerCacheDirectives();
        $this->registerThemeDirectives();
        $this->registerFormDirectives();
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

    protected function registerAppDirectives()
    {
        Blade::directive('route', function ($expression) {
            return "<?php
 echo route({$expression}); ?>";
        });
    }

    protected function registerCacheDirectives()
    {
        Blade::directive('cache', function ($expression) {
            return "<?php
 if (! app()->make(\Fusion\Services\Cache\Matryoshka\Parser::class)->setUp($expression)) { ?>";
        });

        Blade::directive('endcache', function () {
            return "<?php
 } echo app()->make(\Fusion\Services\Cache\Matryoshka\Parser::class)->tearDown(); ?>";
        });
    }

    protected function registerThemeDirectives()
    {
        Blade::directive('macro', function ($expression) {
            preg_match_all('/\((.*?)\)/i', $expression, $matches);

            $match = $matches[1][0];
            $args  = explode(',', $match);
            $name  = $args[0];

            $name = str_replace('"', '', $name);
            $name = str_replace("'", '', $name);

            unset($args[0]);

            $code = "<?php
 function {$name}";

            if (count($args)) {
                $code .= '(' . implode(',', $args) . ')';
            } else {
                $code .= '()';
            }

            $code .= ' { ob_start(); ?>';

            return $code;
        });

        Blade::directive('endmacro', function ($expression) {
            return "\n<?php
 return ob_get_clean(); } ?>\n";
        });

        Blade::directive('markdown', function ($expression) {
            return "<span v-pre><?php
 echo render_markdown($expression); ?></span>";
        });
    }

    protected function registerFormDirectives()
    {
        Blade::directive('form', function ($expression) {
            return "<?php
 echo render_form({$expression}); ?>";
        });

        Blade::directive('honeypot', function ($expression) {
            return "<?php
 echo honeypot_fields(); ?>";
        });
    }
}
