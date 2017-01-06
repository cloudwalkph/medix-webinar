<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('react');
});

Route::group(['prefix' => 'api'], function () {
    Route::get('/', function() {
        return view('api/documentation');
    });

    Route::resource('user', 'UserController');
});

Route::get('/{page}', function () {
	return view('react');
})->where('page', '[0-9A-Za-z\-]+');

Route::post('user/add','UserController@store');
