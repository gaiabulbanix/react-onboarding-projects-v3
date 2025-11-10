import React, { useState, useEffect } from "react";
import "./ThemeToggler.css";

function ThemeToggler() {
    // 🧠 Theme state: starts as "light"
    const [theme, setTheme] = useState("dark");
    const [hasLoaded, setHasLoaded] = useState(false);

    // theme pref storage
    useEffect(() => {
        const savedTheme = localStorage.getItem("prefTheme");
        if (savedTheme) {
            setTheme(savedTheme);
        }

        // delay until
        requestAnimationFrame(() => setHasLoaded(true));
    }, []);

    // auto save to storage block
    useEffect(() => {
        if (!hasLoaded) return;
        localStorage.setItem("prefTheme", theme);

        // set both dependencies
    }, [theme, hasLoaded]);

    // 🧠 Toggle logic
    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    }

    // 🧠 Apply theme class to <body> only when theme changes
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);


    // JSX
    return (
        <section className="theme-section">
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>
                Switch to {theme === "dark" ? "Light" : "Dark"} Mode
            </button>
        </section>
    );
}

export default ThemeToggler;