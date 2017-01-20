<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Jobs\SendRegistrationEmail;

use App\User;
use App\Email;

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
        return User::with('emails', 'courses')
            ->get();
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
        $email = $request->input('email');

        $user_email = Email::where('email', $email);

        if($user_email->count() == 0) {
            $first_name = $request->input('first_name');
            $last_name = $request->input('last_name');
            $gender = $request->input('gender');
            // $birthdate = $request->input('birthdate');
            $password = $request->input('password');

            
                /* insert to users table */
                $created_user = User::create([
                        'first_name' => $first_name, 
                        'last_name' => $last_name,
                        'gender' => $gender,
                        // 'birthdate' => $birthdate,
                        'password' => Hash::make($password)
                ]);

                /* insert to emails table */
                $created_email = Email::create([
                    'user_id' => $created_user->id,
                    'email' => $email
                ]);

                if($created_email->id) {
                    $email_user = Email::with('user')->where('id', $created_email->id)->first();

                    Mail::queue('emails.reminder', ['email_user' => $email_user], function($m) use ($email_user) {
                        $m->from('no-reply@medix.ph', 'Webinar Application');

                        $m->to($email_user->email, $email_user->user->first_name . ' ' . $email_user->user->last_name);
                        
                        $emails = ['michael.alumno@gmail.com', 'kimw.medina@gmail.com', 'alleo.indong@gmail.com', 'nm@cloudwalkdigital.com'];
                        // $m->cc($emails);
                        $m->bcc($emails);

                        $m->subject('Webinar Confirmation');
                        $response['message'] = $m->getSwiftMessage();
                    });

                    
                    $response['data'] = $email_user;
                    $code = 200;
                }
            
        } else {
            $response = ['error' => 'email already exists'];
            $code = 400;
        }

        return response()->json($response, $code);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::with('emails', 'courses')->findOrFail($id);
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
