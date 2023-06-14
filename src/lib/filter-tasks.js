export const filterTasks = (tasks, filter) => {
  if (filter === 'all') {
    return tasks;
  }
  if (filter === 'completed') {
    return tasks.filter((task) => {
      if (task.completed === true) return task;
    });
  }
  if (filter === 'active') {
    return tasks.filter((task) => {
      if (task.completed === false) return task;
    });
  }
};
