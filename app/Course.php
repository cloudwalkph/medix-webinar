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

    function users()
    {
        return $this->belongsToMany('App\User');
    }
}
