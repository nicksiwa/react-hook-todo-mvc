import React, { useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos, setTodos } = useContext(TodoContext);

  const handleToggleComplete = index => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (index === todoIndex) {
        todo.completed = !todo.completed
      }
      return todo;
    });

    setTodos(newTodos)
  };

  const handleRemoveTodo = index => setTodos(todos.filter((_, todoIndex) => index !== todoIndex))

  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index}
          {...todo}
          handleToggleComplete={() => handleToggleComplete(index)}
          handleRemoveTodo={() => handleRemoveTodo(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
