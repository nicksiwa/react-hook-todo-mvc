import React from 'react';

function TodoItem(props) {
  const { title, completed, handleToggleComplete } = props;

  return (
    <li>
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={handleToggleComplete}
      />
      <label>{title}</label>
    </li>
  );
}

export default TodoItem;
