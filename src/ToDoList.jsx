import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Eat Breakfast", "Take a Shower", "theater"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function AddTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleRemoved(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }

  function handleMoveUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function handleMoveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h2>To-Do-List</h2>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={AddTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => handleRemoved(index)}>Delete</button>
            <button className="move-button" onClick={() => handleMoveUp(index)}>👆</button>
            <button className="move-button" onClick={() => handleMoveDown(index)}>👇</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
