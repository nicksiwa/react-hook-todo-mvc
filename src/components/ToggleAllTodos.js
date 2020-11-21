import React, { useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';

function ToggleAllTodos() {
  const { todos, setTodos } = useContext(TodoContext);

  const handleToggleAllTodos = e => {
    setTodos(
      todos.map(todo => {
        todo.completed = e.target.checked;
        return todo;
      })
    );
  }

  return (
    <>
      <input type='checkbox' id='toggle-all' className='toggle-all' onChange={handleToggleAllTodos} />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
}

export default ToggleAllTodos;
