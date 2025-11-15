import React, { useState } from "react";

// parent prop inside function
function TaskInput({ onAddTask }) {
    // new task useStates
    const [newTask, setNewTask] = useState("");

    // add task to storage array and save it to localStorage
    function addTask(e) {
        // stop reloads
        e.preventDefault();

        // prevent empty input
        if (!newTask || !newTask.trim()) return;

        // send task to parent App using parent handler
        onAddTask(newTask)

        // reset form text input
        setNewTask("");
    }

    // jsx block
    return (
        <section className="task-input">
            <h2>Task Input</h2>
            <form onSubmit={addTask}>
                <label htmlFor="taskInput"></label>
                <input
                    id="taskInput"
                    type="text"
                    placeholder="Please input a task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default TaskInput;