import React from 'react';
import uuid from 'react-uuid';
import { ListItemProps, TodoListProps } from '../../types/list-item';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }: TodoListProps): JSX.Element => {
  return (
    <ul className="list-group">
      {todos.map((item: ListItemProps) => {
        return (
          <li className="list-group-item" key={uuid()}>
            <TodoListItem {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
