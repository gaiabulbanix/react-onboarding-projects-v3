import React from "react";

function CounterControls({ onIncrement, onDecrement, onReset }) {
    // jsx block
    return (
        <div className="counter-controls">
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
}

export default CounterControls;
