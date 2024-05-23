<?php
namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index()
    {
        return Todo::all();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'completed' => 'boolean',
            'image' => 'nullable|image|max:2048' // max 2MB
    
        ]);

        $todo = Todo::create([
            'title' => $validatedData['title'],
            'completed' => $validatedData['completed'] ?? false,
        ]);

        return response()->json($todo, 201);
    }
}

