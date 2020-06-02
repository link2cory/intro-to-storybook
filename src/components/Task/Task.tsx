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
  };
  state: TaskStates;
}

const Task: React.FunctionComponent<TaskProps> = ({
  task: { id, title },
  state,
}: TaskProps) => (
  <div className='list-item'>
    <input type='text' value={title} readOnly />
  </div>
)

export default Task
