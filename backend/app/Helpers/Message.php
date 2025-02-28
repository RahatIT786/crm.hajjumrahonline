<?php

namespace App\Helpers;

class Message
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public static function get($key){
        $messages=[
            'login_success' => 'You Successfully Logged In 🎉🎉🎉',
            'user_not_found' => 'USER NOT FOUND 😐',
            'incorrect_password' => 'INCORRECT PASSWORD ❌',
            'invalid_credentials' => 'Invalid credentials 💀',
            'logout_success' => 'You have logged out successfully! 🚀',
        ];

        return $messages[$key] ?? 'UNKNOWN MESSAGE';    
    }
}
