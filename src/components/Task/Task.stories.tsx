import React from 'react'
import { action } from '@storybook/addon-actions'

import Task, { TaskStates } from './Task'

export default {
  component: Task,
  title: 'Task',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: TaskStates.TASK_INBOX,
}

export const actionsData = {
  onArchiveTask: action('onArchiveTask'),
  onPinTask: action('onPinTask'),
}

export const Default = () => <Task task={{ ...taskData }} {...actionsData} />
export const Pinned = () => (
  <Task
    task={{ ...taskData, state: TaskStates.TASK_PINNED }}
    {...actionsData}
  />
)
export const Archived = () => (
  <Task
    task={{ ...taskData, state: TaskStates.TASK_ARCHIVED }}
    {...actionsData}
  />
)
