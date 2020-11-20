import React, { useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';

function ClearTodo() {
  const { todos, setTodos } = useContext(TodoContext);
  const handleClearTodo = () => setTodos(todos.filter(({ completed }) => !completed))

  return (
    <button
      className="clear-completed"
      onClick={handleClearTodo}
    >
      Clear completed
    </button>
  );
}

export default ClearTodo;
