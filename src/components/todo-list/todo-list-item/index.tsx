import React from 'react';

type ListItemProps = {
  label: string;
  important: boolean;
};

const TodoListItem = ({ label, important = false }: ListItemProps): JSX.Element => {
  const style = {
    color: important ? 'red' : 'black',
  };

  return <span style={style}>{label}</span>;
};

export default TodoListItem;
