import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Todo } from '../types';
import { useDropzone } from 'react-dropzone';

const TodoView: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File|null>(null);

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
    formData.append('completed', 'false');
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
    <div className="todo-view">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input 
          type="text" 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} 
          placeholder="New Todo" 
          required 
        />
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          {selectedFile ? (
            <p>{selectedFile.name}</p>
          ) : (
            <p>Drag 'n' drop an image here, or click to select one</p>
          )}
        </div>
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}
            {todo.image && (
              <div>
                <img src={`http://localhost:8000/storage/${todo.image}`} alt={todo.title} width="100" />
              </div>
            )}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoView;
