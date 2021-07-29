import React from 'react';

const ItemStatusFilter = (): JSX.Element => {
  return (
    <div className="btn-group">
      <button type="button" className="btn-panel btn-info">
        All
      </button>
      <button type="button" className="btn-panel btn-outline-secondary">
        Active
      </button>
      <button type="button" className="btn-panel btn-outline-secondary">
        Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;
