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
}

const Task: React.FunctionComponent<TaskProps> = ({
  task: { id, title, state },
}: TaskProps) => (
  <div className={`list-item ${state}`}>
    <label className='checkbox'>
      <input
        type='checkbox'
        defaultChecked={state === TaskStates.TASK_ARCHIVED}
        disabled
        name='checked'
      />
      <span className='checkbox-custom' />
    </label>
    <div className='title'>
      <input type='text' value={title} readOnly placeholder='Input title' />
    </div>
  </div>
)

export default Task
