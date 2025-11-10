import React from "react";
import ThemeToggler from "./components/ThemeToggler";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

function App() {
  return (
    <main className="app-container">
      <ThemeToggler />
      <TaskList />
      <TaskInput />
    </main>
  );
}

export default App;