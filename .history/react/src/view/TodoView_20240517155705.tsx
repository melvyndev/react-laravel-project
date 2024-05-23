import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Todo } from '../types';

const TodoView: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');


  useEffect(() => {
    axios.get<Todo[]>('http://localhost:8000/api/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the todos!", error);
      });
  }, []);


  const addTodo = (event: React.FormEvent) => {
    event.preventDefault();

    axios.post('http://localhost:8000/api/todos', {
      title: newTodo,
      completed: false
    })
    .then(response => {
      setTodos([...todos, response.data]);
      setNewTodo('');
    })
    .catch(error => {
      console.error("There was an error adding the todo!", error);
    });
  };

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
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoView;
