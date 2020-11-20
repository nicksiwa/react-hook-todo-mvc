import React, { useEffect, useState } from 'react';

function TodoItem(props) {
  const {
    title,
    completed,
    handleToggleComplete,
    handleEditTodo,
    handleRemoveTodo,
  } = props;

  const [isEditing, setIsEditing] = useState(false);
  const ref = React.createRef();
  
  useEffect(() => {
    console.log(isEditing)

    if (isEditing) {
      ref.current.focus();
    } else {
      handleEditTodo(ref.current.innerHTML)
    }
  }, [handleEditTodo, isEditing, ref]);

  const handleDoubleClickTodo = () => setIsEditing(true);

  return (
    <li>
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={handleToggleComplete}
      />
      <label
        ref={ref}
        contentEditable={isEditing}
        onDoubleClick={handleDoubleClickTodo}
        onChange={handleEditTodo}
        onBlur={() => setIsEditing(false)}
      >
        {title}
      </label>
      <button className="destroy" onClick={handleRemoveTodo} />
    </li>
  );
}

export default TodoItem;
