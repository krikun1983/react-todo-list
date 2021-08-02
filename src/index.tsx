import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import './assets/scss/app.scss';
import ItemStatusFilter from './components/item-status-filter';

const App = (): JSX.Element => {
  const todoData = [{ label: 'Learn React' }, { label: 'Make Awesome App' }, { label: 'Drink coffee' }];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
