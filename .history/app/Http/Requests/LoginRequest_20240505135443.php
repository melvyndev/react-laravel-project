<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'email' => 'required|email|string',
            'password' => 'required',
            'remember' => 'boolean'
        ];
    }

   // app\Http\Requests\LoginRequest.php

public function messages()
{
    return [
        'email.required' => "L'e-mail est requis",
        'email.email' => "L'e-mail doit être une adresse e-mail valide",
        'password.required' => "Le mot de passe est requis",
    ];
}
}