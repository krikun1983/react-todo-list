import React from 'react';
import { ListItemProps } from '../../../types/list-item';
import success from '../../../assets/images/success.svg';
import danger from '../../../assets/images/danger.svg';

const TodoListItem = ({ label, important = false }: ListItemProps): JSX.Element => {
  return (
    <>
      <span className={`${important ? 'item-important' : 'item'}`}>{label}</span>
      <div>
        <button type="button" className="btn btn-outline-success">
          <img src={success} alt="" />
        </button>
        <button type="button" className="btn btn-outline-danger">
          <img src={danger} alt="" />
        </button>
      </div>
    </>
  );
};

export default TodoListItem;
