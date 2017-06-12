<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use App\Events\MessagePost;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('chat',function (){
    return view('chat');
})->middleware('auth');


Route::get('msg',function (){
    return App\Message::with('user')->get();
})->middleware('auth');

Route::get('umsg',function (){
    return App\User::with('messages')->get();
})->middleware('auth');

Route::post('msgpost',function (){
    $user = Auth::user();
    $message = $user->messages()->create([
        'content'=>request('msg')
    ]);

    event(new MessagePost($message,$user));
    return ['status'=>'OK'];
})->middleware('auth');