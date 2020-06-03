import React from 'react'

export enum TaskStates {
  TASK_INBOX,
  TASK_PINNED,
  TASK_ARCHIVED,
}

interface TaskProps {
  task: {
    id: string,
    title: string,
    state: TaskStates,
  };
  onArchiveTask: (action: string) => void;
  onPinTask: (action: string) => void;
}

const Task: React.FunctionComponent<TaskProps> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: TaskProps) => (
  <div className={`list-item ${state}`}>
    <label className='checkbox'>
      <input
        type='checkbox'
        defaultChecked={state === TaskStates.TASK_ARCHIVED}
        disabled
        name='checked'
      />
      <span className='checkbox-custom' onClick={() => onArchiveTask(id)} />
    </label>
    <div className='title'>
      <input type='text' value={title} readOnly placeholder='Input title' />
    </div>
    <div className='actions' onClick={(event) => event.stopPropagation()}>
      {state !== TaskStates.TASK_ARCHIVED && (
        <a onClick={() => onPinTask(id)}>
          <span className='icon-star' />
        </a>
      )}
    </div>
  </div>
)

export default Task
