import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ onGenerateTaskArray = [], onDelTask, onCheckUncheck, onEditTask, onClearCompleted }) {

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
                            // key=index is how react knows which item is which, in an array/object that is generated through jsx
                            key={index}
                            task={task}
                            // here we pass on the index from TaskItem onto App.js for it to perform the functions on the specific index later
                            onDelTask={() => onDelTask(index)}
                            onCheckUncheck={() => onCheckUncheck(index)}
                            // we require both the index passed from TaskItem, as well as a value from it, so we have two arguments here
                            onEditTask={(editValue) => onEditTask(index, editValue)}
                        />
                    ))
                )}
            </ul>
            <button type="button" id="clear-btn" onClick={onClearCompleted}>Clear Completed Tasks</button>
        </section>
    );
}

export default TaskList;