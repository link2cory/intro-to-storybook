import React from 'react'
import { action } from '@storybook/addon-actions'

import Task from './Task'
import { TaskData } from './interfaces'

export default {
  component: Task,
  title: 'Task',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const taskStoryData: TaskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
}

export const taskStoryActionsData = {
  onArchiveTask: action('onArchiveTask'),
  onPinTask: action('onPinTask'),
}

export const Default = () => (
  <Task task={{ ...taskStoryData }} {...taskStoryActionsData} />
)
export const Pinned = () => (
  <Task
    task={{ ...taskStoryData, state: 'TASK_PINNED' }}
    {...taskStoryActionsData}
  />
)
export const Archived = () => (
  <Task
    task={{ ...taskStoryData, state: 'TASK_ARCHIVED' }}
    {...taskStoryActionsData}
  />
)
