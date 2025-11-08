import React from "react";

// comp block
function CounterDisplay({ count }) {
  // jsx block
  return (
    <section className="counter-display">
      <h2></h2>
      <p>Current Count = {count}</p>
    </section>
  );
}

export default CounterDisplay;
