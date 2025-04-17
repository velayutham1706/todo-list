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
      setTasks(prevTask => [...prevTask, newTask]);
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

  return (
    <div className = "to-do-list">
      <div>
        <h1>To Do List</h1>
        <input type = "text" placeholder = "Enter a task..." value = {newTask} onChange = {handleInputChange}>
        </input>
        <button className = "add-button" onClick = {addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) =>
            <li key = {index}>
                <span className = "text">{task}</span>
                <button className = "delete-button" onClick = {() => deleteTask(index)}>
🅧</button>
                <button className = "move-button" onClick = {() => moveTaskUp(index)}>↑</button>
                <button className = "move-button" onClick = {() => moveTaskDown(index)}>↓
</button>
            </li>
        )}
      </ol>
    </div>
  );
}

export default ToDo;
