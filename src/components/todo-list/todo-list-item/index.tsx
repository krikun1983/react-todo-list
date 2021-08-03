import React from 'react';
import { TodoListItemFuncProps } from '../../../types/list-item';

const TodoListItem = ({
  label,
  onDeleted,
  onToggleDone,
  onToggleImportant,
  done,
  important,
}: TodoListItemFuncProps): JSX.Element => {
  return (
    <>
      <span
        className={`${important ? 'item-important' : 'item'} ${done ? 'done' : ''}`}
        onClick={onToggleDone}
        role="presentation"
      >
        {label}
      </span>
      <div className="btns">
        <button type="button" className="btn btn-outline-success" onClick={onDeleted}>
          <svg role="img" viewBox="0 0 2048 2048" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M832 864v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zm256 0v576q0
              14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zm256 0v576q0 14-9 23t-23 9h-64q-14
              0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zm128 724v-948h-896v948q0 22 7 40.5t14.5 27 10.5 8.5h832q3
              0 10.5-8.5t14.5-27 7-40.5zm-672-1076h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0
              83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37
              54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"
            />
          </svg>
        </button>
        <button type="button" className="btn btn-outline-danger" onClick={onToggleImportant}>
          <svg role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
            <path
              d="m 7.0157956,12 c -0.56859,0 -1.02951,-0.46096 -1.02951,-1.02955 0,-0.56851
              0.46092,-1.02942 1.02951,-1.02942 0.56851,0 1.02942,0.46091 1.02942,1.02942
              0,0.56859 -0.46091,1.02955 -1.02942,1.02955 z m 1.36029,-8.42977 c -0.0871,0.69397 -0.72628,4.07248
              -0.93761,5.18268 -0.039,0.20528 -0.21847,0.3543 -0.42749,0.3543 l -0.008,0 c
              -0.21643,0 -0.40133,-0.15365 -0.44166,-0.36619 -0.21402,-1.12696 -0.85224,-4.5084 -0.93793,-5.19134
              C 5.5202056,2.72725 6.1620856,2 6.9907656,2 c 0.83983,5e-5 1.49023,0.73702 1.3857,1.57023 z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default TodoListItem;
