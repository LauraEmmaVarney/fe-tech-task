const mix = require('laravel-mix');

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

mix.js('resources/js/checkout.js', 'public/js')
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css/checkout')
    .copy('resources/css/animate.css', 'public/css/checkout/animate.css')
    .copy('resources/css/all.css', 'public/css/checkout/all.css')
    .copyDirectory('resources/css/webfonts', 'public/css/webfonts');

if (mix.inProduction()) {
    mix.version();
}
