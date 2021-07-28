import React from 'react';
import uuid from 'react-uuid';
import TodoListItem from './todo-list-item';

const TodoList = (): JSX.Element => {
  const items = ['Learn React', 'Build Awesome App'];

  return (
    <ul>
      {items.map((item: string, index: number) => {
        return (
          <li key={uuid()}>
            <TodoListItem label={item} important={index === 1} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
