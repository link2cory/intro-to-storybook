import React from 'react'

interface TaskProps {
  task: {
    title: string,
  },
}

const Task: React.FunctionComponent<TaskProps> = ({
  task: { title },
}: TaskProps) => (
  <div className='list-item'>
    <input type='text' value={title} readOnly />
  </div>
)

export default Task
