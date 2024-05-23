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

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images', 'public');
            $validatedData['image'] = $path;
        }

        $todo = Todo::create([
            'title' => $validatedData['title'],
            'completed' => $validatedData['completed'] ?? false,
            'image' => $validatedData['image'] ?? null,
        ]);

        return response()->json($todo, 201);
    }


    public function destroy($id)
    {
        $todo = Todo::find($id);

        if (!$todo) {
            return response()->json(['message' => 'Todo not found'], 404);
        }

        // Supprime l'image associée si elle existe
        if ($todo->image) {
            \Storage::disk('public')->delete($todo->image);
        }

        $todo->delete();

        return response()->json(['message' => 'Todo deleted successfully']);
    }
}

