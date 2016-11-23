var elixir = require('laravel-elixir');
require('laravel-elixir-webpack');
var webpackConfig = require('./webpack.config.js');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass([
        'materialize.scss',
        'app.scss'
    ]);

    mix.webpack('app.js', webpackConfig);
});
