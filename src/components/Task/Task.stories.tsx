import React from 'react'
import { action } from '@storybook/addon-actions'

import Task from './Task'

export default {
  component: Task,
  title: 'Task',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const taskData = {
  title: 'Test Task',
}

export const Default = () => <Task task={{ ...taskData }} />
