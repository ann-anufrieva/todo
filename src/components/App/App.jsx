import React, { useState } from 'react';

import Footer from '../Footer/Footer';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TaskList from '../TaskList/TaskList';

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const toggleProperty = (arr, id, prop) => {
    const elIdx = arr.findIndex((el) => el.id === id);
    const el = arr[elIdx];

    const newEl = {
      ...el,
      [prop]: !el[prop],
    };

    return [...arr.slice(0, elIdx), newEl, ...arr.slice(elIdx + 1, arr.length)];
  };

  const getFilteredTasks = () => {
    if (filter === 'all') {
      return tasks;
    }
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    }
    if (filter === 'active') {
      return tasks.filter((task) => !task.completed);
    }
  };

  const completeTaskHandler = (id) => {
    setTasks(toggleProperty(tasks, id, 'completed'));
  };

  const deleteTaskHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editStartTaskHandler = (id) => {
    const updatedTasks = tasks.map((task) => ({
      ...task,
      editing: task.id === id,
    }));

    setTasks(updatedTasks);
  };

  const editEndTaskHandler = (value, id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id !== id) {
        return task;
      } else {
        return {
          ...task,
          editing: false,
          description: value,
        };
      }
    });

    setTasks(updatedTasks);
  };

  const onTaskCreate = (label) => {
    setTasks([
      {
        description: label,
        createTime: new Date(),
        completed: false,
        editing: false,
        id: tasks.length + 1,
      },
      ...tasks,
    ]);
  };

  const onClearActive = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filterHandler = (param) => {
    setFilter(param);
  };

  const filteredTasks = getFilteredTasks();
  const todoCount = tasks.filter((task) => !task.completed).length;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onTaskCreate={onTaskCreate} />
      </header>
      <section className="main">
        <TaskList
          tasks={filteredTasks}
          onComplete={completeTaskHandler}
          onDeleted={deleteTaskHandler}
          onEditStart={editStartTaskHandler}
          onEditEnd={editEndTaskHandler}
        />
      </section>
      <Footer
        todoCount={todoCount}
        onFilter={filterHandler}
        filters={[
          { label: 'All', param: 'all', active: filter === 'all' },
          { label: 'Active', param: 'active', active: filter === 'active' },
          { label: 'Completed', param: 'completed', active: filter === 'completed' },
        ]}
        onClearActive={onClearActive}
      />
    </section>
  );
};

export default App;
