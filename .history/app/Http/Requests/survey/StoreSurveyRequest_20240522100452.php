<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSurveyRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'expire_date' => 'required|date',
            'status' => 'required|boolean',
            'questions' => 'array'
        ];
    }
}
