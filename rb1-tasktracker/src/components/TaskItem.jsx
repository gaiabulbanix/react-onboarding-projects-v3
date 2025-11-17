import React from "react";

function TaskItem({ task, onDelTask, onCheckUncheck }) {

    // jsx block
    return (
        <li className={task.complete ? "completed" : ""}>
            {/* anything that gets passed onto TaskList can be "selected" later, such as index */}
            <span>{task.taskValue}</span>
            <div className="task-actions">
                <button type="button" id="del-btn" onClick={onDelTask}>
                    Delete
                </button>
                <input
                    type="checkbox"
                    checked={task.complete}
                    onChange={onCheckUncheck}
                />
            </div>
        </li>
    );
}

export default TaskItem;