import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoCount from './components/TodoCount';
import TodoFilters from './components/TodoFilters';

function App() {
  return (
    <div className="App todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoInput />
      </header>
      <section className="main">
        <TodoList />
      </section>
      <footer className="footer">
        <TodoCount />
        <TodoFilters />
      </footer>
    </div>
  );
}

export default App;
