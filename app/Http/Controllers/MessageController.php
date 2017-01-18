<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Message;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Message::all();
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
        //
        $user_id = $request->input('user_id');
        $course_id = $request->input('course_id');
        $message = $request->input('message');

        $created_message = Message::create([
            'user_id' => $user_id,
            'course_id' => $course_id,
            'message' => $message
        ]);

        $response['data'] = $created_message;

        return response()->json($response, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return Message::where('id', $id)->get();
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
        dd('update') ;
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

    
    // custom functions
    function showByCourseId(Request $request, $course_id)
    {
        $result = Message::with('user')
            ->where('course_id', $course_id);

        if($request->has('flag')) {
            $flag = $request->get('flag');
            $result->where('flag', $flag);
        };

        return response()->json($result->get(), 200);
    }

    function showByUserId(Request $request, $user_id)
    {
        $result = Message::with('user')
            ->where('user_id', $user_id);

        if($request->has('flag')) {
            $flag = $request->get('flag');
            $result->where('flag', $flag);
        };

        return response()->json($result->get(), 200);
    }

    function selectMessage($message_id)
    {
        $message = Message::where('id', $message_id)
            ->update([
                'flag' => 1
            ]);

        return response()->json($message, 200);
    }
}
