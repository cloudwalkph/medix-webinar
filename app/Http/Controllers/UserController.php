<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Jobs\SendRegistrationEmail;

use App\User;
use App\Email;
use App\Course;
use DB;
use Hash;
use Mail;
use URL;

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
    *
    * Check email if exist
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
    */
    public function emailCheckWithCourse(Request $request) 
    {
    	$email = $request->input('email');
    	$course_id = $request->input('course_id');
    	$user_email = Email::with('user')->where('email', $email)->first();

    	if($user_email)	
    	{
    		$enrolled_course = DB::table('course_user')->where('user_id',$user_email->user->id)->where('course_id', $course_id);
    		if($enrolled_course->count() == 0)
    		{
                $courses = DB::table('course_user')->insert([
                    'user_id' => $user_email->user->id,
                    'course_id' => $course_id
                ]);
            }
            $response = $this->show($user_email->user->id);
    		$code = 200;
    	} else {
            $response = ['error' => 'email already exists'];
            $code = 400;
        }

        return response()->json($response, $code);
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
            $company = $request->input('company');
            // $birthdate = $request->input('birthdate');
            // $password = $request->input('password');
            $job = $request->input('job');

            
                /* insert to users table */
                $created_user = User::create([
                        'first_name' => $first_name, 
                        'last_name' => $last_name,
                        'company' => ($company ? $company : null),
                        // 'birthdate' => $birthdate,
                        // 'password' => Hash::make($password),
                        'job' => ($job ? $job : null)
                ]);

                /* insert to emails table */
                $created_email = Email::create([
                    'user_id' => $created_user->id,
                    'email' => $email
                ]);

                if($created_email->id) {
                    $email_user = Email::with('user')->where('id', $created_email->id)->first();

                    Mail::queue(
                        'emails.registration_letter', 
                        [
                            'base_url' => URL::to('/'), 
                            'email_user' => $email_user, 
                            'user_id' => $email_user->user_id
                        ], 
                        function($m) use ($email_user) {
                        $m->from('no-reply@medix.ph', 'Webinar Application');

                        $m->to($email_user->email, $email_user->user->first_name . ' ' . $email_user->user->last_name);
                        
                        // $emails = ['michael.alumno@gmail.com', 'kimw.medina@gmail.com', 'alleo.indong@gmail.com', 'nm@cloudwalkdigital.com'];
                        // $m->cc($emails);
                        // $m->bcc($emails);

                        $m->subject('Webinar Confirmation');
                        $response['message'] = $m->getSwiftMessage();
                    });

                    
                    $response = $this->show($created_user->id);
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
