import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Todo } from '../types';

const TodoView: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get<Todo[]>('http://localhost:8000/api/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the todos!", error);
      });
  }, []);

  return (
    <div className="todo-view">
      <h1>Todo List</h1>
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
