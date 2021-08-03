import React from 'react';
import { AddTodolistItemFuncProps } from '../../types/list-item';

const ItemAddForm = ({ onAddTodolistItem }: AddTodolistItemFuncProps): JSX.Element => {
  return (
    <div className="item-add-form">
      <button className="item-add-form__btn" type="button" onClick={() => onAddTodolistItem('text')}>
        Add Item
      </button>
    </div>
  );
};

export default ItemAddForm;
