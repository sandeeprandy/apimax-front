// TaskSummaryPage.js

import React from 'react';
 import "./TaskSummaryPage.css"

function TaskSummaryPage({ tasks }) {
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const pendingTasks = tasks.filter(task => task.status === 'pending').length;
  const inProgressTasks = tasks.filter(task => task.status === 'in_progress').length;
  const totalTasks = tasks.length;

  return (
    <div className="task-summary-page">
      <h2>Task Summary</h2>
      <div className="task-progress">
        <div>
          <h3>Completed</h3>
          <div className="progress-bar">
            <div style={{ width: `${(completedTasks / totalTasks) * 100}%` }}></div>
          </div>
          <p>{completedTasks}/{totalTasks}</p>
        </div>
        <div>
          <h3>Pending</h3>
          <div className="progress-bar">
            <div style={{ width: `${(pendingTasks / totalTasks) * 100}%` }}></div>
          </div>
          <p>{pendingTasks}/{totalTasks}</p>
        </div>
        <div>
          <h3>In Progress</h3>
          <div className="progress-bar">
            <div style={{ width: `${(inProgressTasks / totalTasks) * 100}%` }}></div>
          </div>
          <p>{inProgressTasks}/{totalTasks}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskSummaryPage;
