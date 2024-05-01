<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function signup(SighnupRequest $request){

        $data= $request->validated();

        $user= User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        "password" => Hash::make($data['password']),
        ])

        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ])

    }

    public function login(LoginRequest $request){


    }

    public function logout(Request $request){
        
    }   


}


