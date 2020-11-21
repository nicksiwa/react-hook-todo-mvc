import React, { useState, useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';

function TodoInput() {
  const [textInput, setTextInput] = useState('');
  const { todos, setTodos } = useContext(TodoContext);

  function onTextChange(e) {
    setTextInput(e.target.value);
  }

  function onSubmit(e) {
    if (e.key === 'Enter' && e.target.value) {
      const newTodos = [...todos, { title: textInput, completed: false }];
      setTodos(newTodos);
      setTextInput('');
    }
  }

  return (
    <input
      className="new-todo"
      value={textInput}
      onChange={onTextChange}
      onKeyPress={onSubmit}
    />
  );
}

export default TodoInput;
