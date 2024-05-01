// App.js

import React, { useState } from 'react';
import TaskList from './Components/TaskList';
import TaskSummaryPage from './Components/TaskSummaryPage';
import "./App.css"

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Function to update task details
  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  return (
    <div className="app">
      <h1>Task List Application</h1>
      <TaskList tasks={tasks} onAddTask={addTask} onDeleteTask={deleteTask} onUpdateTask={updateTask} />
      <TaskSummaryPage tasks={tasks} />
    </div>
  );
}

export default App;
