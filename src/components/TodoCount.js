import React, { useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';

function TodoCount() {
  const { todos } = useContext(TodoContext);

  return (
    <span className="todo-count">
      <strong>{todos.length}</strong> item{todos.length === 1 ? '' : 's'} left
    </span>
  );
}

export default TodoCount;
