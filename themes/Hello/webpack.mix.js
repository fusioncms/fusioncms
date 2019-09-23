const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .setPublicPath('./public')
    .js('resources/js/theme.js', 'js')
    .sass('resources/sass/theme.scss', 'css')
    .version()
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('./resources/tailwind.js')
        ]
    })
