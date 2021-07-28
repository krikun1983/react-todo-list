import React from 'react';
import uuid from 'react-uuid';
import { ListItemProps, TodoListProps } from '../../types/list-item';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }: TodoListProps): JSX.Element => {
  return (
    <ul>
      {todos.map((item: ListItemProps) => {
        return (
          <li key={uuid()}>
            <TodoListItem {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
