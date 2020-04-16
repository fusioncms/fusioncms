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
            publicPath: '/vendor/fusion/',
            chunkFilename: "js/chunks/[name].js?id=[chunkhash]",
        },
    })
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('./resources/tailwind.js')
        ],
    })
    .copy('resources/img', 'public/img')
    .copy('public', '../public/vendor/fusion')