import React, { useState } from 'react';
import { Checkbox, Button, TextField } from '@mui/material';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    onEdit(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
      <Checkbox
        checked={todo.completed}
        onChange={onToggle}
        style={{ marginRight: 8 }}
      />
      {isEditing ? (
        <>
          <TextField
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <Button variant="outlined" color="primary" onClick={handleEdit}>
            Save
          </Button>
        </>
      ) : (
        <>
          <span style={{ marginRight: 'auto' }}>{todo.text}</span>
          <Button variant="outlined" color="primary" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        </>
      )}
      <Button variant="outlined" color="error" onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
