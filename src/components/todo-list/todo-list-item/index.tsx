import React from 'react';
import { ListItemProps } from '../../../types/list-item';

const TodoListItem = ({ label, important = false }: ListItemProps): JSX.Element => {
  const style = {
    color: important ? 'red' : 'black',
  };

  return <span style={style}>{label}</span>;
};

export default TodoListItem;
