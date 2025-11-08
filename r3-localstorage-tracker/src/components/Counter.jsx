import React, { useState, useEffect } from "react";
import "./Counter.css";
import CounterControls from "./CounterControls";
import CounterDisplay from "./CounterDisplay";

// comp block
function Counter() {
  // state block
  const [count, setCount] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  // local storage block
  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    if (savedCount) {
      setCount(Number(savedCount));
    }

    // delay until
    requestAnimationFrame(() => setHasLoaded(true));
  }, []);

  // auto save to storage block
  useEffect(() => {
    if (!hasLoaded) return;
    localStorage.setItem("count", count);

    // set both dependencies
  }, [count, hasLoaded]);

  // increment/decrement/reset block
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  // jsx block
  return (
    <main className="app-container">
      <section className="counter">
        <h1>R3 - LocalStorage Tracker ⚙️</h1>
        <CounterDisplay count={count} />
        <CounterControls
          onIncrement={increment}
          onDecrement={decrement}
          onReset={reset}
        />
      </section>
    </main>
  );
}

export default Counter;
