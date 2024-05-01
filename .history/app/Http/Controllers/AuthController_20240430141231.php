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
        $credential =$request->validated();
        $remember = ['remember' ] ?? false;

        if(!auth()->attempt($credential, $remember)){
            return response([
                'message' => 'Provided credentials are not correct'
            ], 422);
        }


    }

    public function logout(Request $request){
        $user = Auth::user();
        $user->tokens()->delete();
        return response([
            'message' => 'Logged out'
        ])
        
    }   


}


