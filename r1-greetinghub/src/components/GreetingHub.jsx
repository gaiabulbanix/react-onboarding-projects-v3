import React from "react";
import "./GreetingHub.css";

function GreetingHub({ name, timeOfDay }) {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        timeOfDay = "Morning";
    } else if (currentHour < 18) {
        timeOfDay = "Afternoon";
    } else if (currenthour < 22) {
        timeOfDay = "Evening";
    } if (timeOfDay = ) {

    };

    return (
        <section className="greeting-hub">
            <h1>
                Good {timeOfDay}, {name}!
            </h1>
            <p>Welcome to the GreetingHub Project 🚀</p>
        </section>
    );
}

export default GreetingHub;