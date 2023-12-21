import React, { useState } from 'react';
import TodoList from './ToDoList';
import { Typography, TextField, Button } from '@mui/material';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Todo App
      </Typography>
      <TextField
        type="text"
        label="New Todo"
        fullWidth
        margin="normal"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button variant="contained" style={{height:'60px', position: 'fixed', bottom: '50px', right: '0px',}} color="secondary" fullWidth onClick={addTodo}>
        Add Todo
      </Button>
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
};

export default App;
