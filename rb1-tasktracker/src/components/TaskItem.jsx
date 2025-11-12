import React from "react";

function TaskItem({ task, onDelTask }) {

    // jsx block
    return (
        <li>
            {task}
            <button
                type="button"
                id="del-btn"
                onClick={onDelTask}
            >Delete</button>
        </li>
    );
}

export default TaskItem;