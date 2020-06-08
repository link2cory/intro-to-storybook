import React from 'react'
import Task, { TaskData } from '../Task'

interface TaskListProps {
  loading?: boolean;
  tasks: Array<TaskData>;
  onPinTask: (action: string) => void;
  onArchiveTask: (action: string) => void;
}

const TaskList: React.FunctionComponent<TaskListProps> = ({
  loading = false,
  tasks,
  onPinTask,
  onArchiveTask,
}: TaskListProps) => {
  const LoadingRow = (
    <div className='loading-item'>
      <span className='glow-checkbox' />
      <span className='glow-text'>
        <span>Loading</span>
        <span>cool</span>
        <span>state</span>
      </span>
    </div>
  )

  if (loading) {
    return (
      <div className='list-item'>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    )
  }

  if (tasks.length === 0) {
    return <div className='list-items'>empty</div>
  }
  return (
    <div className='list-item'>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onPinTask={onPinTask}
          onArchiveTask={onArchiveTask}
        />
      ))}
    </div>
  )
}

export default TaskList
