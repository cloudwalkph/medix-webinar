<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\User;
use App\Email;

use Hash;

class LoginController extends Controller
{
    //
    function index(Request $request)
    {
        $email = $request->input('username');
        $pass = $request->input('password');
        
        $validate = Email::with('user')
            ->where('emails.email', $email)
            ->first();

        if(!$validate) {
            return response()->json('', 400);
        }

        if(Hash::check($pass, $validate->user->password)) {
            $response = [
                'data' => $validate
            ];
            $request->session()->put($response);
            return response()->json($response);
        }

        return response()->json('', 400);
        
    }

}
