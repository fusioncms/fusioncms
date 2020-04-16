const path = require('path');
const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

const production = process.env.NODE_ENV === 'production'
const sourceMap = production ? '' : 'inline-source-map'

mix.setPublicPath('public')
    .js('resources/js/gravity.js', 'public/js')
    .sass('resources/scss/gravity.scss', 'public/css', { implementation: require('node-sass') })
    .version()
    .webpackConfig({
        devtool: sourceMap,
        output: {
            chunkFilename: "js/chunks/[name].js?id=[chunkhash]",
            path: path.resolve(__dirname, 'vendor/fusion'),
        },
        resolve: {
            symlinks: false,
            alias: {
                '@': path.resolve(__dirname, 'resources/js/'),
            },
        },
    })
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('./resources/tailwind.js')
        ],
        terser: {
            terserOptions: {
                compress: {
                    drop_console: true,
                },
            },
        },
    })