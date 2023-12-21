import React from 'react';
import TodoItem from './ToDoItem';
import { Divider } from '@mui/material';

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <React.Fragment key={todo.id}>
          <TodoItem
            todo={todo}
            onToggle={() => onToggle(todo.id)}
            onDelete={() => onDelete(todo.id)}
            onEdit={onEdit}
          />
          {index < todos.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TodoList;
