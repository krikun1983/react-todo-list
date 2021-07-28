import React from 'react';
import uuid from 'react-uuid';

const TodoList = (): JSX.Element => {
  const items = ['Learn React', 'Build Awesome App'];

  return (
    <ul>
      {items.map((item: string) => {
        return <li key={uuid()}>{item}</li>;
      })}
    </ul>
  );
};

export default TodoList;
