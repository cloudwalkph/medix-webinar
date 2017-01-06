<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Models\User;
use App\Models\Email;

use Hash;
use Mail;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $first_name = $request->input('first_name');
        $last_name = $request->input('last_name');
        $gender = $request->input('gender');
        $birthdate = $request->input('birthdate');
        $password = $request->input('password');

        try {
            $user = [
                    'first_name' => $first_name, 
                    'last_name' => $last_name,
                    'gender' => $gender,
                    'birthdate' => $birthdate,
                    'password' => Hash::make($password)
            ];
            $user_id = User::insert($user);

            $email = [
                'user_id' => $user_id,
                'email' => $request->input('email')
            ];
            Email::insert($email);

            /* Send Email */
            Mail::send('emails.reminder', ['user' => $user, 'email' => $email ], function($m) use ($user, $email) {
                $m->from('info@medix.ph', 'Webinar Application');

                $m->to($email['email'], $user['first_name'] . ' ' . $user['last_name'])->subject('Webinar Confirmation');
            });

            return User::with('emails')->where('id', $user_id)->first();
        } catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()],400);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
