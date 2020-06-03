import React from 'react'

export interface TaskData {
  id: string;
  title: string;
  state: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED';
}

export interface TaskProps {
  task: TaskData;
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
        defaultChecked={state === 'TASK_ARCHIVED'}
        disabled
        name='checked'
      />
      <span className='checkbox-custom' onClick={() => onArchiveTask(id)} />
    </label>
    <div className='title'>
      <input type='text' value={title} readOnly placeholder='Input title' />
    </div>
    <div className='actions' onClick={(event) => event.stopPropagation()}>
      {state !== 'TASK_ARCHIVED' && (
        <a onClick={() => onPinTask(id)}>
          <span className='icon-star' />
        </a>
      )}
    </div>
  </div>
)

export default Task
