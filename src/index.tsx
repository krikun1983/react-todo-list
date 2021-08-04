import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import { TodoListItemProps } from './types/list-item';
import ItemAddForm from './components/item-add-form';
import { createTodoListItem, filters, search, toggleProperty } from './utils';
import todoData from './constants/todo-data';
import './assets/scss/app.scss';

const App = (): JSX.Element => {
  const [items, setItems] = useState<TodoListItemProps[]>(todoData);
  const [tern, setTern] = useState('');
  const [filter, setFilter] = useState('all');

  const deleteTodoListItem = (id: number) => {
    setItems(
      items.filter(item => {
        return item.id !== id;
      }),
    );
  };

  const addTodoListItem = (text: string) => {
    const newItem = createTodoListItem(text);

    setItems(state => [...state, newItem]);
  };

  const toggleDone = (id: number) => {
    setItems(() => {
      return toggleProperty(items, id, 'done');
    });
  };

  const toggleImportant = (id: number) => {
    setItems(() => {
      return toggleProperty(items, id, 'important');
    });
  };

  const searchChange = (term: string) => {
    setTern(term);
  };

  const filterChange = (text: string) => {
    setFilter(text);
  };

  const doneCount = items.filter(item => item.done).length;
  const todoCount = items.length - doneCount;

  const visibleItem = filters(search(items, tern), filter);

  return (
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className="top-panel">
        <SearchPanel onSearchChange={searchChange} />
        <ItemStatusFilter filter={filter} onFilterChange={filterChange} />
      </div>
      <TodoList
        todos={visibleItem}
        onDeleted={deleteTodoListItem}
        onToggleDone={toggleDone}
        onToggleImportant={toggleImportant}
      />
      <ItemAddForm onAddTodolistItem={addTodoListItem} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
