import React, { useState } from "react";
import "./App.css";
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const divStyle = {
    width: "60%"
  };

  const buttonMargin = {
    marginLeft: "5%",
    height: "55px"
  }

  return (
    <div className="App">
      <header className="header">
        <h1>To-Do App</h1>
      </header>
      <div className="input-container">
        <TextField id="outlined-basic" style={divStyle} label="Add a new task" variant="outlined" onChange={(e) => setNewTask(e.target.value)} value={newTask} slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AddIcon />
              </InputAdornment>
            ),
          },
        }} />
        <Button style={buttonMargin} variant="contained" onClick={addTask} startIcon={<AddIcon />}>Add</Button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleCompletion(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
