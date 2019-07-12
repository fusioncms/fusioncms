let mix = require('laravel-mix')
let tailwindcss = require('tailwindcss')

const production = process.env.NODE_ENV === 'production'
const sourceMap = production ? '' : 'inline-source-map'

mix.setPublicPath('public')
    .js('resources/js/gravity.js', 'public/js')
    .sass('resources/scss/gravity.scss', 'public/css', { implementation: require('node-sass') })
    .version()
    .webpackConfig({
        output: {
            chunkFilename: 'chunks/[name].js',
        },
    })
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('./tailwind.js')
        ]
    })

mix.webpackConfig({
  devtool: sourceMap
}) 