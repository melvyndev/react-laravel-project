import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { Todo } from '../types';

const TodoView: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios.get<Todo[]>('http://localhost:8000/api/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the todos!", error);
      });
  };

  const deleteTodo = (id: number) => {
    axios.delete(`http://localhost:8000/api/todos/${id}`)
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch(error => {
        console.error("There was an error deleting the todo!", error);
      });
  };

  const addTodo = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', newTodo);
    formData.append('completed', JSON.stringify(false));  // Convert to string boolean

    if (selectedFile) {
      formData.append('image', selectedFile);
    }

    axios.post('http://localhost:8000/api/todos', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      setTodos([...todos, response.data]);
      setNewTodo('');
      setSelectedFile(null);
    })
    .catch(error => {
      console.error("There was an error adding the todo!", error);
    });
  };

  const onDrop = (acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <form onSubmit={addTodo} className="mb-6">
        <div className="flex items-center mb-4">
          <input 
            type="text" 
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)} 
            placeholder="New Todo" 
            required 
            className="flex-grow border border-gray-300 p-2 rounded mr-2"
          />
          <div {...getRootProps()} className="flex-grow border border-dashed border-gray-300 p-2 rounded cursor-pointer">
            <input {...getInputProps()} />
            {selectedFile ? (
              <p className="text-sm">{selectedFile.name}</p>
            ) : (
              <p className="text-sm text-gray-500">Drag 'n' drop an image here, or click to select one</p>
            )}
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Todo</button>
      </form>
      <ul className="space-y-4">
        {todos.map(todo => (
          <li key={todo.id} className="border border-gray-300 p-4 rounded">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">{todo.title}</h2>
                <p className="text-sm text-gray-500">{todo.completed ? 'Completed' : 'Not Completed'}</p>
                {todo.image && (
                  <img src={`http://localhost:8000/storage/${todo.image}`} alt={todo.title} className="mt-2 w-32 h-32 object-cover" />
                )}
              </div>
              <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoView;
