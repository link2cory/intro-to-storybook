interface TaskData {
  id: string;
  title: string;
  state: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED';
}

interface TaskProps {
  task: TaskData;
  onArchiveTask: (action: string) => void;
  onPinTask: (action: string) => void;
}

export { TaskData, TaskProps }
