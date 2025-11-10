import React, { useState, useEffect } from "react";

function TaskInput() {
    // task useStates
    const [taskArray, setTaskArray] = useState([]);
    const [newTask, setTask] = useState("");

    // load task array from localStorage if available
    useEffect(() => {
        try {
            const loadedStoredTasks = localStorage.getItem("storedTasks");
            const parsedStoredTasks = loadedStoredTasks ? JSON.parse(loadedStoredTasks) : [];
            setTaskArray(parsedStoredTasks);
        } catch {
            setTaskArray([]);
        }
    }, []);

    // add task to storage array and save it to localStorage
    function addTask() {
        // add new task to array
        const newTaskArray = [...taskArray, newTask];
        setTaskArray(newTaskArray);
        // save array to localStorage
        localStorage.setItem("storedTasks", JSON.stringyfy(newTaskArray));
    }

    // jsx block
    return (
        <section className="task-input">
            <h2>Task Input</h2>
            <form action="">
                <label htmlFor="taskInput"></label>
                <input
                    id="taskInput"
                    type="text"
                    placeholder="Please input a task..."
                    value={newTask}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit" onClick={addTask}>Submit</button>
            </form>
        </section>
    );
}

export default TaskInput;