import React from 'react';
import btnsFilter from '../../constants/btns-filter';
import { ItemStatusFilterProps } from '../../types/list-item';

const ItemStatusFilter = ({ filter, onFilterChange, onSortTodoListItem }: ItemStatusFilterProps): JSX.Element => {
  const buttons = btnsFilter.map(({ name, label }) => {
    const isActive = filter === name;
    const clazz = isActive ? 'btn-info' : '';

    return (
      <button key={name} type="button" className={`btn-panel ${clazz}`} onClick={() => onFilterChange(name)}>
        {label}
      </button>
    );
  });

  return (
    <div className="btn-group">
      {buttons}
      <button className="btn-panel" type="button" onClick={() => onSortTodoListItem()}>
        Sort
      </button>
    </div>
  );
};

export default ItemStatusFilter;
