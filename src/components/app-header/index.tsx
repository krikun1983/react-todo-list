import React from 'react';
import AppHeaderToDone from '../../types/app-header';

const AppHeader = ({ toDo, done }: AppHeaderToDone): JSX.Element => {
  return (
    <div className="app-header">
      <h1>My Todo List</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
