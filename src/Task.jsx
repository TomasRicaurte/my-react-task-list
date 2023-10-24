import React, { useState } from 'react';

function Task({ task }) {
  const [completed, setCompleted] = useState(task.completed);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <span>{task.name}</span>
    </div>
  );
}

export default Task;
