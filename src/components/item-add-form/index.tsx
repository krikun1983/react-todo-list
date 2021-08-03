import React, { ChangeEvent, FormEvent, useState } from 'react';
import { AddTodolistItemFuncProps } from '../../types/list-item';

const ItemAddForm = ({ onAddTodolistItem }: AddTodolistItemFuncProps): JSX.Element => {
  const [label, setText] = useState('');

  const onLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTodolistItem(label);
    setText('');
  };

  return (
    <form className="item-add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="item-add-form__control"
        onChange={onLabelChange}
        placeholder="what needs to be done"
        value={label}
      />
      <button className="item-add-form__btn" type="submit">
        Add Item
      </button>
    </form>
  );
};

export default ItemAddForm;
