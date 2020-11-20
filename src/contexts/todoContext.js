import { useState, createContext } from 'react';

const defaultState = {
  todos: [],
  filter: 'All'
};

function useTodoList(initialState = defaultState) {
  const [todos, setTodos] = useState(initialState.todos);
  const [filter, setFilter] = useState(initialState.filter);

  return {
    filter,
    setTodos,
    setFilter,
    get todos() {
      switch (filter) {
        case 'Actived':
          return todos.filter(({ completed }) => !completed);
        case 'Completed':
          return todos.filter(({ completed }) => completed);
        case 'All':
          return todos;
        default:
          return todos;
      }
    },
  };
}

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const todoStore = useTodoList();

  return (
    <TodoContext.Provider value={todoStore}>
      {children}
    </TodoContext.Provider>
  );
};
