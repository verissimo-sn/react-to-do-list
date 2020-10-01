import React, { useState } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

import './styles.css';

interface TodoItem{
  id: number;
  value: string;
}

let count = 1;

const TodoWrapper: React.FC = () => {
  const [list, setList] = useState<TodoItem[]>([{id: 0, value: ''}]);

  const handleChange = (value: string, id: TodoItem['id']) => {
    setList(prev => prev.map(item =>
      item.id === id ? {...item, value} : item));
  }

  const handleDelete = (id: TodoItem['id']) => {
    setList(prev => prev.filter(item =>
      item.id !== id));
  }
  
  const handleEddItem = (index: number) => {
    const newItem = {id: count++, value: ''}

    setList(prev => [...prev, newItem])
  }

  return (
    <div className="todo-wrapper">
      <div className="todo-list">
        <h1 className="title" style={{color: '#FF8811', marginBottom: '20px'}}>Walcome Todo v01</h1>
        {list.map((item, index) => (
          <div key={item.id}>
            <TextField
              value={item.value}
              onChange={e => handleChange(e.currentTarget.value, item.id)}
            />
            <IconButton onClick={() => handleEddItem(index)}>
              <AddIcon />
            </IconButton>
            {list.length > 1 && (
              <IconButton onClick={() => handleDelete(item.id)}>
                <DeleteIcon />
              </IconButton>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoWrapper;