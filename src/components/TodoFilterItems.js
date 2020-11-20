/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function TodoFilterItems({ filter, isActive, handleChangeFilters }) {
  return (
    <li>
      <a
        className={isActive ? "selected" : ""}
        onClick={() => handleChangeFilters(filter)}
      >
        {filter}
      </a>
    </li>
  );
}

export default TodoFilterItems;
