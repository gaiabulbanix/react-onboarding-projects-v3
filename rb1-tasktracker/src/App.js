import React, { useState, useEffect } from "react";
import ThemeToggler from "./components/ThemeToggler";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

function App() {
  // task array useStates - source of truth
  const [taskArray, setTaskArray] = useState([]);

  // load task array from localStorage if available
  useEffect(() => {
    try {
      const loadedStoredTasks = localStorage.getItem("storedTasks");
      const parsedStoredTasks = loadedStoredTasks ? JSON.parse(loadedStoredTasks) : [];
      setTaskArray(parsedStoredTasks);
    } catch {
      setTaskArray([]);
    }
  }, []);

  // new task handler to child TaskInput
  function handleAddTask(newTask) {
    // prevent empty task if received somehow from child TaskInput
    if (!newTask || !newTask.trim()) return;

    // add new task to array, also trim just in case
    const newTaskArray = [...taskArray, newTask];
    setTaskArray(newTaskArray);

    // save array to localStorage
    localStorage.setItem("storedTasks", JSON.stringify(newTaskArray));
  }

  return (
    <main className="app-container">
      <h1>RB1 — Task Tracker 🎨</h1>
      <ThemeToggler />
      <TaskList onGenerateTaskArray={taskArray} />
      <TaskInput onAddTask={handleAddTask} />
    </main>
  );
}

export default App;