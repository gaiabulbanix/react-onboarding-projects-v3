import React from "react";
import TaskItems from "./TaskItems";

function TaskList() {

    // jsx block
    return (
        <section className="task-list">
            <h1>RB1 — Task Tracker 🎨</h1>
            <h2>Task List</h2>
            <ul>
                <TaskItems />
            </ul>
        </section>
    )
}

export default TaskList;