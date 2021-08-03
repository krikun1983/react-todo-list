import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import { TodoListItemProps } from './types/list-item';
import ItemAddForm from './components/item-add-form';
import './assets/scss/app.scss';

let idMax = 1;

const App = (): JSX.Element => {
  const createTodoListItem = (label: string) => {
    const newItems = {
      label,
      important: false,
      done: false,
      id: (idMax += 1),
    };
    return newItems;
  };

  const todoData = [
    createTodoListItem('Learn React'),
    createTodoListItem('Make Awesome App'),
    createTodoListItem('Drink coffee'),
  ];

  const [items, setItems] = useState<TodoListItemProps[]>(todoData);

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

  const toggleProperty = (arr: TodoListItemProps[], id: number, propName: string) => {
    const idx = arr.findIndex(item => item.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName as keyof typeof oldItem] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  const onToggleDone = (id: number) => {
    setItems(() => {
      return toggleProperty(items, id, 'done');
    });
  };

  const onToggleImportant = (id: number) => {
    setItems(() => {
      return toggleProperty(items, id, 'important');
    });
  };

  const doneCount = items.filter(item => item.done).length;
  const todoCount = items.length - doneCount;

  return (
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className="top-panel">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList
        todos={items}
        onDeleted={deleteTodoListItem}
        onToggleDone={onToggleDone}
        onToggleImportant={onToggleImportant}
      />
      <ItemAddForm onAddTodolistItem={addTodoListItem} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
