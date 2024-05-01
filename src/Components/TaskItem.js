// TaskItem.js

import React from 'react';
import "./TaskItem.css"

function TaskItem({ task, onDeleteTask, onUpdateTask }) {
  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  const handleStatusChange = (newStatus) => {
    onUpdateTask({ ...task, status: newStatus });
  };

  return (
    <div className="task-item">
      <span >{task.text}</span>
      <div  className='pr'>
        <button onClick={() => handleStatusChange('pending')}>Pending</button>
        <button onClick={() => handleStatusChange('in_progress')}>In Progress</button>
        <button onClick={() => handleStatusChange('completed')}>Completed</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
