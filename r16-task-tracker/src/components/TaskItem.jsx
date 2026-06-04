import { useState } from 'react';
import Button from "./Button";

export default function TaskItem({ className = '', task, index, handleToggleTask, handleRemoveTask, handleEditTask, }) {
    const [editState, setEditState] = useState(false);
    const [editInput, setEditInput] = useState('');

    return (
        editState
            ?
            <li className="flex justify-between items-center">
                <form
                    onSubmit={(e) => {
                        handleEditTask({ e: e, taskId: task.id, editInput: editInput, });
                        setEditState(false);
                    }}
                >
                    <div>
                        <input type="text"
                            className="p-0.5 rounded-md border-2 border-teal-800 text-slate-100 bg-slate-900"
                            value={editInput}
                            onChange={(e) => setEditInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Escape') {
                                    setEditState(false);
                                };
                            }}
                        />
                    </div>
                    <div>
                        <Button
                            type="submit"
                            buttonSize="xs"
                            buttonStyle="primary"
                            disabled={!editInput.trim() || editInput.trim() === task.name}
                        >
                            Save
                        </Button>
                        <Button
                            type="button"
                            buttonSize="xs"
                            buttonStyle="primary"
                            onClick={() => setEditState(false)}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </li >
            :
            <li className="flex items-center mt-1">
                <div className="flex flex-1 min-w-0 items-center overflow-hidden">
                    <span className={`truncate min-w-0 ${task.completed && "opacity-50 line-through"}`}>
                        {index + 1}. {task.name}
                    </span>
                    <span className="w-56 shrink-0 text-sm ml-auto text-slate-400">
                        {task.date} - {task.completed ? 'Complete' : 'Pending'}
                    </span>
                </div>
                <div className="flex items-center gap-1">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggleTask(task.id)}
                    />
                    <Button type="button"
                        buttonSize="xs"
                        buttonStyle="danger"
                        onClick={() => handleRemoveTask(task.id)}
                    >
                        Remove
                    </Button>
                    <Button type="button"
                        buttonSize="xs"
                        buttonStyle="primary"
                        onClick={() => {
                            setEditInput(task.name);
                            setEditState(true);
                        }}
                    >
                        Edit
                    </Button>
                </div>
            </li>
    );
};