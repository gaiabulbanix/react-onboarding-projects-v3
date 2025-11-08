import React from "react";

// comp block
function CounterControls({ onIncrement, onDecrement, onReset }) {
  // jsx block
  return (
    <section className="counter-controls">
      <h2>Controls</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </section>
  );
}

export default CounterControls;
