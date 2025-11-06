import React, { useState } from "react";
import GreetingHub from "./components/GreetingHub";

function App() {
  // useState for theme
  const [theme, setTheme] = useState("light");

  // run this function when theme button clicked
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  // jsx block
  return (
    <main className="App">
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <GreetingHub theme={theme} />
    </main>
  );
}

export default App;