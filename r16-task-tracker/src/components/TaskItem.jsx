import { useState } from 'react';
import Button from "./Button";

export default function TaskItem({ className = '', task, index, handleToggleTask, handleDeleteTask, handleEditTask, }) {
    const [editState, setEditState] = useState(false);
    const [editInput, setEditInput] = useState('');

    return (
        editState
            ?
            <li className="flex justify-between items-center">
                <div>
                    <input type="text"
                        className="p-1/2 rounded-md border-2 border-teal-800 text-slate-100 bg-slate-900"
                        value={editInput}
                        onChange={(e) => setEditInput(e.target.value)}
                    />

                </div>
                <div className="flex gap-0.5">
                    <Button
                        type="button" buttonSize="xs" buttonStyle="primary"
                        onClick={() => {
                            handleEditTask({ taskId: task.id, editInput: editInput, });
                            setEditState(false);
                        }}
                        disabled={!editInput.trim() || editInput.trim() === task.name}
                    >
                        Save
                    </Button>
                    <Button type="button" buttonSize="xs" buttonStyle="primary" onClick={() => {
                        setEditInput(task.name);
                        setEditState(false);
                    }}>
                        Cancel
                    </Button>
                </div>
            </li >
            :
            <li className="flex gap-2 items-center">
                <div className="flex flex-1 min-w-0 items-center overflow-hidden gap-4">
                    <span className="truncate min-w-0">
                        {index + 1}. {task.name}
                    </span>
                    <span className="shrink-0 text-sm ml-auto text-slate-400">
                        {task.date} - {task.completed ? 'Complete' : 'Pending'}
                    </span>
                </div>
                <div className="flex items-center gap-0.5 shrink-0">
                    <input type="checkbox" checked={task.completed} onChange={() => handleToggleTask(task.id)} />
                    <Button type="button" onClick={() => handleDeleteTask(task.id)} buttonSize="xs" buttonStyle="primary">Delete</Button>
                    <Button type="button" buttonSize="xs" buttonStyle="primary"
                        onClick={() => {
                            setEditInput(task.name);
                            setEditState(true);
                        }}>
                        Edit
                    </Button>
                </div>
            </li>
    );
};