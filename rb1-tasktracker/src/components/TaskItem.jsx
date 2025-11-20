import React, { useState } from "react";

function TaskItem({ task, onDelTask, onCheckUncheck, onEditTask, onSelect }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(task.taskValue);

    function handleLocalSave() {
        onEditTask(editValue)
        setIsEditing(false);
    }

    // jsx block
    return (
        // adds completed and selected classes when appropriate, and toggles select when clicked
        <li className={`${task.complete ? "completed" : ""} ${task.selected ? "selected" : ""}`} onClick={onSelect}>
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
                        {/* added click event propagation stop to prevevnt activation during selection */}
                        <button type="button" id="edit-btn" onClick={(e) => {
                            e.stopPropagation();
                            setIsEditing(true);
                        }}>Edit</button>
                        {/* added click event propagation stop to prevevnt activation during selection */}
                        <button type="button" id="del-btn" onClick={(e) => {
                            e.stopPropagation();
                            onDelTask();
                        }}>Delete</button>
                        <input
                            type="checkbox"
                            checked={task.complete}
                            onChange={(e) => {
                                e.stopPropagation();
                                onCheckUncheck();
                            }}
                        />
                    </div>
                </>
            )}
        </li >
    );
}

export default TaskItem;