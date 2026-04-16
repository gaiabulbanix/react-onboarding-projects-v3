import { useState } from 'react';
import Button from "./Button";

export default function TaskItem({ className = '', task, index, handleToggleTask, handleDeleteTask }) {
    const [editState, setEditState] = useState(false);


    return (
        editState
            ?
            <li className="flex justify-between item-center">
                <div>
                    <input type="text" className="p-1/2 rounded-md border-2 border-teal-800 text-slate-900" />

                </div>
                <div className="flex gap-0.5">
                    <Button type="button" buttonSize="xs" buttonStyle="primary">Save</Button>
                    <Button type="button" buttonSize="xs" buttonStyle="primary">Cancel</Button>
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
                    <Button type="button" buttonSize="xs" buttonStyle="primary">Edit</Button>
                </div>
            </li>
    );
};