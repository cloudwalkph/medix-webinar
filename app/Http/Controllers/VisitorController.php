<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Email;
use App\User;
use App\Course;
use DB;
use Mail;

class VisitorController extends Controller
{
    function index()
    {
        return User::visitors()
            ->with('emails', 'courses')
            ->get();
    }

    function store(Request $request)
    {
        $email = $request->input('email');
        $first_name = $request->input('first_name');
        $last_name = $request->input('last_name');
        $course_id = $request->input('course_id');

        $user_email = Email::where('email', $email);

        if($user_email->count() == 0) {
            $created_user = User::create([
                'first_name' => $first_name, 
                'last_name' => $last_name
            ]);

            $enrolled_course = DB::table('course_user')->insert([
                'user_id' => $created_user->id,
                'course_id' => $course_id
            ]);

            $created_email = Email::create([
                'user_id' => $created_user->id,
                'email' => $email
            ]);

            if($created_email->id) {
                $email_user = Email::with('user')->where('id', $created_email->id)->first();

                Mail::queue(
                    'emails.reminder', 
                    ['email_user' => $email_user, 'course_id' => $course_id, 'user_id' => $created_user->id], 
                    function($m) use ($email_user) {
                        $m->from('no-reply@medix.ph', 'Webinar Application');

                        $m->to($email_user->email, $email_user->user->first_name . ' ' . $email_user->user->last_name);
                        
                        // $emails = ['michael.alumno@gmail.com', 'kimw.medina@gmail.com', 'alleo.indong@gmail.com', 'nm@cloudwalkdigital.com'];
                        // $m->cc($emails);
                        // $m->bcc($emails);

                        $m->subject('Webinar Confirmation');
                        $response['message'] = $m->getSwiftMessage();
                    }
                );
                
                $response['data'] = $email_user;
                $code = 200;
            }

        } else {
            $response = ['error' => 'email already exists'];
            $code = 400;
        }

        return $response;

    }
}
