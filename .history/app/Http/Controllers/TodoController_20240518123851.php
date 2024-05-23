namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    // Autres méthodes...

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'completed' => 'required|boolean',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images', 'public');
            $validated['image'] = $path;
        }

        // Convertir le champ 'completed' en booléen
        $validated['completed'] = filter_var($validated['completed'], FILTER_VALIDATE_BOOLEAN);

        $todo = Todo::create($validated);

        return response()->json($todo, 201);
    }
}
