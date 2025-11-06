import React, { useState } from "react";
import "./GreetingHub.css";

function GreetingHub({ theme = "light" }) {
    // get system time and convert to current hour
    const currentHour = new Date().getHours();
    // useState for name input
    const [name, setName] = useState("");

    // select greeting based on current hour
    let timeOfDay
    if (currentHour < 12) {
        timeOfDay = "Morning";
    } else if (currentHour < 18) {
        timeOfDay = "Afternoon";
    } else (currentHour < 22); {
        timeOfDay = "Evening";
    }

    // light/dark theme passed through props
    const style = {
        backgroundColor: theme === "dark" ? "#1e1e1e" : "#f0f0f0",
        color: theme === "dark" ? "#f0f0f0" : "#1e1e1e",
        textAlign: "center",
        padding: "2rem",
        transition: "0.3s ease-in-out"
    };

    // event handler
    function handleInputChange(e) {
        setName(e.target.value);
    }

    // jsx block
    return (
        <section className="greeting-hub" style={style}>
            <h1>
                Good {timeOfDay}
                {name ? `, ${name}` : ""}!
            </h1>
            <p>Welcome to the GreetingHub Project 🚀</p>

            {/* name input */}
            <input
                type="text"
                placeholder="Please enter your name..."
                value={name}
                onChange={handleInputChange}
            />
        </section>
    );
}

export default GreetingHub;