import React, { useState } from "react";

function TaskItem({ task, onDelTask, onCheckUncheck, onEditTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(task.taskValue);

    function handleLocalSave() {
        onEditTask(editValue)
        setIsEditing(false);
    }

    // jsx block
    return (
        <li className={task.complete ? "completed" : ""}>
            {/* anything that gets passed onto TaskList can be "selected" later, such as index */}
            {isEditing ? (
                // edit mode
                <>
                    <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                    />
                    <button type="button" id="save-btn" onClick={handleLocalSave}>Save</button>
                    <button type="button" id="edit-btn" onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                // normal mode
                <>
                    <span>{task.taskValue}</span>
                    <div className="task-actions">
                        <button type="button" id="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
                        <button type="button" id="del-btn" onClick={onDelTask}>Delete</button>
                        <input
                            type="checkbox"
                            checked={task.complete}
                            onChange={onCheckUncheck}
                        />
                    </div>
                </>
            )}
        </li >
    );
}

export default TaskItem;