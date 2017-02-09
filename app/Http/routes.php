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
    return view('welcome');
});

Route::group(['prefix' => 'api'], function () {
    
    Route::get('/', function() {
        return view('api/documentation');
    });

    Route::group(['prefix' => 'v1', 'middleware' => 'api'], function() {

        Route::resource('user', 'UserController');

        Route::post('login', 'LoginController@index');

        Route::resource('course', 'CourseController');

        Route::post('enroll', 'EnrollCourseController@index');

        Route::resource('message', 'MessageController');

        Route::get('course/{courseId}/messages', 'MessageController@showByCourseId');
        Route::get('user/{userId}/messages', 'MessageController@showByUserId');

        Route::post('message/{message_id}/select', 'MessageController@selectMessage');

    });

});
