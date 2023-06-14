import React, { useEffect, useState } from 'react';

import TaskFilter from '../TaskFilter/TaskFilter';

import './Footer.css';

const Footer = (props) => {
  const [todoCount, setTodoCount] = useState(0);

  const { onFilter, filters } = props;
  const { tasks } = props;

  useEffect(() => {
    const count = tasks.filter((el) => !el.completed).length;

    setTodoCount(count);
  }, [tasks]);

  const onClearActive = () => {
    const activeTasks = tasks.filter((el) => !el.completed);
    return activeTasks;
  };

  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>

      <TaskFilter onFilter={onFilter} filters={filters} />

      <button className="clear-completed" onClick={onClearActive}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
