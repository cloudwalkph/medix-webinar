<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Course extends Model
{
    //
    use SoftDeletes;
    
    protected $fillable = [
        'title', 'description', 'start', 'end', 'language', 'price'
    ];

    protected $hidden = [
        'created_at', 'updated_at', 'deleted_at'
    ];

    protected $appends = [
        'image'
    ];

    function users()
    {
        return $this->belongsToMany('App\User');
    }

    function getImageAttribute ($value)
    {
        $images = array(
            1 => asset('/img/courses/pajards.png'),
            2 => asset('/img/courses/johanna.jpg')
        );
        return $images[$this->id];
    }
}
