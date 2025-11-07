import React from "react";

function CounterDisplay({ curCount }) {
    // jsx block
    return (
        <div className="counter-display">
            <p>Current Count: {curCount}</p>
        </div>
    );
}

export default CounterDisplay;
