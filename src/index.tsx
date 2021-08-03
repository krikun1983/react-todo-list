import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import './assets/scss/app.scss';
import ItemStatusFilter from './components/item-status-filter';

const App = (): JSX.Element => {
  const todoData = [
    { label: 'Learn React', id: 1 },
    { label: 'Make Awesome App', id: 2 },
    { label: 'Drink coffee', id: 3 },
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} onDeleted={id => console.log('del', id)} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
