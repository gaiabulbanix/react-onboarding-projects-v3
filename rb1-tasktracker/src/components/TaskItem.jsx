import React from "react";

function TaskItem({ task, onDelTask, onCheckUncheck }) {

    // jsx block
    return (
        <li>
            {task}
            <button type="button" id="del-btn" onClick={onDelTask}>
                Delete
            </button>
            <input
                type="checkbox"
                checked={task.complete}
                onChange={onCheckUncheck}
            />
        </li>
    );
}

export default TaskItem;