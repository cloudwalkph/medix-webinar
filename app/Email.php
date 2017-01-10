<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Email extends Model
{
    //
    use SoftDeletes;

    protected $guarded = ['id'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'id', 'user_id'
    ];

    function user()
    {
        return $this->belongsTo('App\User');
    }

    function courses()
    {

    }
}
