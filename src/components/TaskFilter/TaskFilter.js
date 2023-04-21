import React from 'react';
import './TaskFilter.css';

const TaskFilter = (props) => {
  const { onFilter, filters } = props;

  return (
    <ul className="filters">
      {filters.map((filter) => (
        <li key={filter.param}>
          <button type="button" className={filter.active ? 'selected' : ''} onClick={() => onFilter(filter.param)}>
            {filter.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskFilter;
