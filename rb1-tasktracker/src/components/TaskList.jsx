import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ onGenerateTaskArray = [], onDelTask, onCheckUncheck }) {

    // jsx block
    return (
        <section className="task-list">
            <h2>Task List</h2>
            <ul>
                {/* make a list using a map of the array - if there is no valid array, say "no tasks yet", if there is one, make the list*/}
                {onGenerateTaskArray.length === 0 ? (
                    <li>No tasks yet</li>
                ) : (
                    // remember that array and filter uses (element, index, array) => callback function
                    onGenerateTaskArray.map((task, index) => (
                        <TaskItem
                            key={index}
                            task={task}
                            onDelTask={() => onDelTask(index)}
                            onCheckUncheck={() => onCheckUncheck(index)}
                        />
                    ))
                )}
            </ul>
        </section>
    );
}

export default TaskList;