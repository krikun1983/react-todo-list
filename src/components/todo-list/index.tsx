import React from 'react';
import { TodoListItemProps, TodoListProps } from '../../types/list-item';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }: TodoListProps): JSX.Element => {
  return (
    <ul className="list-group">
      {todos.map((item: TodoListItemProps) => {
        const { id } = item;

        return (
          <li className="list-group-item" key={id}>
            <TodoListItem
              {...item}
              onDeleted={() => onDeleted(id)}
              onToggleDone={() => onToggleDone(id)}
              onToggleImportant={() => onToggleImportant(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
