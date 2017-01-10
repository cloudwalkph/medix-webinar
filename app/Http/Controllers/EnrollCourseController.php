<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use DB;

class EnrollCourseController extends Controller
{
    //
    function index(Request $request)
    {
        $user_id = $request->input('user_id');
        $course_id = $request->input('course_id');

        $enrolled_course = DB::table('course_user')->insert([
            'user_id' => $user_id,
            'course_id' => $course_id
        ]);

        return response()->json($enrolled_course, 200);
    }
}
