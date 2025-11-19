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

    // generate new task object
    const newTaskObject = {
      taskValue: newTask,
      complete: false
    };

    // add new task to array, also trim just in case
    const newTaskArray = [...taskArray, newTaskObject];
    setTaskArray(newTaskArray);

    // save array to localStorage
    localStorage.setItem("storedTasks", JSON.stringify(newTaskArray));
  }

  // edit task handler to child TaskItem
  function handleEditTask(indexToEdit, editValue) {
    const updatedTasks = [...taskArray];
    updatedTasks[indexToEdit].taskValue = editValue;

    // set edited array to current array
    setTaskArray(updatedTasks);

    // save array to localStorage
    localStorage.setItem("storedTasks", JSON.stringify(updatedTasks));
  }

  // delete task handler to child TaskInput > TaskItem
  function handleDelTask(indexToDelete) {

    // create a new array with only tasks NOT to be deleted using filter
    // remember that filter and map uses (element, index, array) => callback function, in this case we don't care about the element so it's _
    const taskArrayAfterDel = taskArray.filter(
      (_, index) => index !== indexToDelete
    );

    // set filtered array to current array
    setTaskArray(taskArrayAfterDel);

    // save array to localStorage
    localStorage.setItem("storedTasks", JSON.stringify(taskArrayAfterDel));
  }

  // changed a task's checked state
  function handleCheckUncheck(indexToToggle) {
    // create a new array since we're going to mutate it and react needs to know that the array is being updated to reload properly
    const updatedCheckArray = [...taskArray];
    updatedCheckArray[indexToToggle].complete = !updatedCheckArray[indexToToggle].complete;

    // set the new array to the current array
    setTaskArray(updatedCheckArray);

    // save the new array to localStorage
    localStorage.setItem("storedTasks", JSON.stringify(updatedCheckArray));
  }

  return (
    <main className="app-container">
      <h1>RB1 — Task Tracker 🎨</h1>
      <ThemeToggler />
      <TaskList
        onGenerateTaskArray={taskArray}
        onDelTask={handleDelTask}
        onCheckUncheck={handleCheckUncheck}
        onEditTask={handleEditTask}
      />
      <TaskInput onAddTask={handleAddTask} />
    </main>
  );
}

export default App;