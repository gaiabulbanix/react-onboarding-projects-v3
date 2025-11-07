import React, { useState } from "react";
import "./Counter.css";
import CounterControls from "./CounterControls";
import CounterDisplay from "./CounterDisplay";

function Counter() {
    // count useState
    const [count, setCount] = useState(0);

    // increment
    function incCount() {
        setCount((prevCount) => prevCount + 1);
    }
    // decrement
    function decCount() {
        setCount((prevCount) => prevCount - 1);
    }
    // reset
    function resCount() {
        setCount(0);
    }

    // jsx block
    return (
        <section className="counter">
            <h1>Counter Tracker ⚡</h1>
            <CounterDisplay curCount={count} />
            <CounterControls
                onIncrement={incCount}
                onDecrement={decCount}
                onReset={resCount}
            />
        </section>
    );
}

export default Counter;
