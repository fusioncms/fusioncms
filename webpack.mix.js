const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
const purgeCss = require('purgecss-webpack-plugin')
const glob = require('glob-all')

const production = process.env.NODE_ENV === 'production'
const sourceMap = production ? '' : 'inline-source-map'

mix.setPublicPath('public')
    .js('resources/js/gravity.js', 'public/js')
    .sass('resources/scss/gravity.scss', 'public/css', { implementation: require('node-sass') })
    .version()
    .webpackConfig({
        devtool: sourceMap,
        output: {
            chunkFilename: 'chunks/[name].js',
        },
    })
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('./resources/tailwind.js')
        ]
    })

if (mix.inProduction()) {
    mix.webpackConfig({
        plugins: [
            new purgeCss({
                paths: glob.sync([
                    path.join(__dirname, 'resources/views/**/*.blade.php'),
                    path.join(__dirname, 'resources/js/**/*.vue')
                ]),
                extractors: [
                    {
                        extractor: class {
                            static extract(content) {
                                return content.match(/[A-z0-9-:\/]+/g)
                            }
                        },
                        extensions: ['html', 'js', 'php', 'vue'],
                    },
                ],
            })
        ],
    })
}