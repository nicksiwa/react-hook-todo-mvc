import React from 'react';

function TodoItem(props) {
  const {
    title,
    completed,
    handleToggleComplete,
    handleRemoveTodo,
  } = props;

  return (
    <li>
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={handleToggleComplete}
      />
      <label>{title}</label>
      <button className="destroy" onClick={handleRemoveTodo} />
    </li>
  );
}

export default TodoItem;
