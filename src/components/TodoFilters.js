import React, { useContext } from 'react';
import TodoFilterItems from './TodoFilterItems';
import ClearTodo from './ClearTodo';
import { TodoContext } from '../contexts/todoContext';

function TodoFilters() {
  const filterList = ['Actived', 'Completed', 'All'];
  const { filter, setFilter } = useContext(TodoContext);
  const handleChangeFilters = filter => setFilter(filter);

  return (
    <>
      <ul className="filters">
        {filterList.map((item, index) => (
          <TodoFilterItems
            key={index}
            filter={item}
            isActive={filter === item}
            handleChangeFilters={handleChangeFilters}
          />
        ))}
      </ul>
      <ClearTodo />
    </>
  );
}

export default TodoFilters;
