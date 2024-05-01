// TaskList.js

import React, { useState } from 'react';
import TaskItem from './TaskItem';
import "./TaskList.css"

function TaskList({ tasks, onAddTask, onDeleteTask, onUpdateTask }) {
    const [newTaskText, setNewTaskText] = useState('');
  
    const handleAddTask = () => {
      if (newTaskText.trim() !== '') {
        const newTask = {
          id: Math.random().toString(),
          text: newTaskText.trim(),
          status: 'pending',
          assignedTo: []
        };
        onAddTask(newTask);
        setNewTaskText('');
      }
    };
  
    const handleDeleteTask = (taskId) => {
      onDeleteTask(taskId); // Call onDeleteTask function with taskId
    };
  
    return (
      <div className="task-list">
        <h2>Task List</h2>
        <div className="add-task">
          <input
            type="text"
            placeholder="Enter task"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onDeleteTask={handleDeleteTask} onUpdateTask={onUpdateTask} />
        ))}
      </div>
    );
  }
  
  export default TaskList;
  