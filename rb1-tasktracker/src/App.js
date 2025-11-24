import React, { useState, useEffect } from "react";
import ThemeToggler from "./components/ThemeToggler";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

function NameForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = `${firstName} ${lastName}`.trim();
  const isValid = firstName.length > 0 && lastName.length > 0;

  return (
    <div>
      <h2>NameForm Component</h2>
      {/* full name */}
      <p>Full Name = {fullName}</p>

      {/* first name */}
      <label>First Name </label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />

      {/* last name */}
      <label>Last Name </label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />

      <button disabled={!isValid}>Submit Full Name</button>
    </div>
  );
}


function MiniInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>MiniInput Component</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setName("")} disabled={name.length === 0}>Clear</button>
      <p>You typed: {name}</p>
    </div>
  );
}

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
      complete: false,
      selected: false
    };

    // add new task to array, also trim just in case
    const newTaskArray = [...taskArray, newTaskObject];
    setTaskArray(newTaskArray);

    // save array to localStorage
    localStorage.setItem("storedTasks", JSON.stringify(newTaskArray));
  }

  // edit task handler to child TaskItem
  function handleEditTask(indexToEdit, editValue) {
    const updatedEditArray = [...taskArray];
    updatedEditArray[indexToEdit].taskValue = editValue;

    // set edited array to current array
    setTaskArray(updatedEditArray);

    // save array to localStorage
    localStorage.setItem("storedTasks", JSON.stringify(updatedEditArray));
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

  // clear any checked completed tasks
  function handleClearCompleted() {
    const filterClearedArray = taskArray.filter(task => !task.complete);

    // set the filtered completed to the current array
    setTaskArray(filterClearedArray);

    // save the new array to localStorage
    localStorage.setItem("storedTasks", JSON.stringify(filterClearedArray));
  }

  // select a task row for highlight/actions
  function handleSelectTask(indexToSelect) {
    // fetch the latest loaded array req due to mutation
    const updatedSelectArray = [...taskArray];

    // update latest array index's select value
    updatedSelectArray[indexToSelect].selected = !updatedSelectArray[indexToSelect].selected;

    // set updated array with selected task
    setTaskArray(updatedSelectArray);

    // save selected array to localStorage
    localStorage.setItem("storedTasks", JSON.stringify(updatedSelectArray));
  }

  // bulk delete handler
  function handleBulkDelete() {
    // select all non-selected tasks in the array
    const unselectedArray = taskArray.filter(task => !task.selected);

    // reset selection upon deletion
    const cleanedArray = unselectedArray.map(task => ({ ...task, selected: false }));

    // save unselected Array
    setTaskArray(cleanedArray);

    // local save
    localStorage.setItem("storedTasks", JSON.stringify(unselectedArray));

  }

  return (
    <main className="app-container">
      <h1>RB1 — Task Tracker 🎨</h1>
      <NameForm />
      <MiniInput />
      <ThemeToggler />
      <TaskList
        onGenerateTaskArray={taskArray}
        onDelTask={handleDelTask}
        onCheckUncheck={handleCheckUncheck}
        onEditTask={handleEditTask}
        onClearCompleted={handleClearCompleted}
        onSelect={handleSelectTask}
        onBulkDelete={handleBulkDelete}
      />
      <TaskInput onAddTask={handleAddTask} />
    </main>
  );
}

export default App;