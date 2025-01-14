import React, { useState } from 'react';
import './App.css'; 

function Todo() {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState(''); 
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]); 
      setNewTask(''); 
    }
  };
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
