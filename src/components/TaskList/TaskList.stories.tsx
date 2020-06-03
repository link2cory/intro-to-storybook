import React from 'react'

import TaskList from './TaskList'
import { taskStoryData, taskStoryActionsData } from '../Task/Task.stories'

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [
    (story: () => React.ReactNode) => (
      <div style={{ padding: '3rem' }}>{story()}</div>
    ),
  ],
  excludeStories: /.*Data$/,
}

export const defaultTasksData = [
  { ...taskStoryData, id: '1', title: 'Task 1' },
  { ...taskStoryData, id: '2', title: 'Task 2' },
  { ...taskStoryData, id: '3', title: 'Task 3' },
  { ...taskStoryData, id: '4', title: 'Task 4' },
  { ...taskStoryData, id: '5', title: 'Task 5' },
  { ...taskStoryData, id: '6', title: 'Task 6' },
]

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
]

export const Default = () => (
  <TaskList tasks={defaultTasksData} {...taskStoryActionsData} />
)
