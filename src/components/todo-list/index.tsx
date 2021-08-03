import React from 'react';
import { TodoListItemProps, TodoListProps } from '../../types/list-item';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }: TodoListProps): JSX.Element => {
  return (
    <ul className="list-group">
      {todos.map((item: TodoListItemProps) => {
        return (
          <li className="list-group-item" key={item.id}>
            <TodoListItem {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
