import React from 'react';

type ItemStatusFilterProps = {
  onActiveTodoListItem: () => void;
  onAllTodoListItem: () => void;
};

const ItemStatusFilter = ({ onActiveTodoListItem, onAllTodoListItem }: ItemStatusFilterProps): JSX.Element => {
  return (
    <div className="btn-group">
      <button type="button" className="btn-panel btn-info" onClick={onAllTodoListItem}>
        All
      </button>
      <button type="button" className="btn-panel btn-outline-secondary" onClick={onActiveTodoListItem}>
        Active
      </button>
      <button type="button" className="btn-panel btn-outline-secondary">
        Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;
