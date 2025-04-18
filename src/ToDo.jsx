import { useState } from 'react';
import { toast } from 'react-toastify';

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      // Task object with text and completed status
      setTasks(prevTask => [...prevTask, { text: newTask, completed: false }]);
      setNewTask("");
      toast.success("Added successfully!");
    } else {
      toast.info("Please enter a task to add");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    toast.success("Deleted successfully");
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    } else {
      toast.error("It is already at the top of the list.");
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    } else {
      toast.error("It is already at the bottom of the list.");
    }
  }

  function toggleCompleted(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    
    if (updatedTasks[index].completed) {
      toast.success("Task marked as completed!");
    } else {
      toast.info("Task marked as incomplete.");
    }
  }

  return (
    <div className="to-do-list">
      <div>
        <h1>To Do List</h1>
        <input 
          type="text" 
          placeholder="Enter a task..." 
          value={newTask} 
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span 
              className={`text ${task.completed ? "completed" : ""}`}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
            </span>
            
            <button 
              className={`complete-button ${task.completed ? "undo-button" : ""}`} 
              onClick={() => toggleCompleted(index)}
            >
              {task.completed ? "↻" : "✓"}
            </button>
            
            <button className="delete-button" onClick={() => deleteTask(index)}>
              🅧
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ↑
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              ↓
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDo;
