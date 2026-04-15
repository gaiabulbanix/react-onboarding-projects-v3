import { useState } from 'react';
import Button from "./Button";

export default function TaskItem({ className = '', task, index, handleToggleTask, handleDeleteTask }) {
    const [editState, setEditState] = useState(false);


    return (
        editState
            ?
            <li className="flex justify-between item-center">
                <span>
                    <input type="text" className="p-1/2 rounded-md border-2 border-teal-800 text-slate-900" />
                </span>
                <span className="flex gap-0.5">
                    <Button type="button" buttonSize="xs" buttonStyle="primary">Save</Button>
                    <Button type="button" buttonSize="xs" buttonStyle="primary">Cancel</Button>
                </span>

            </li >
            :
            <li className="flex justify-between items-center">
                <span>
                    {index + 1}. {task.name} - {task.date} - {task.completed ? 'Complete' : 'Pending'}
                </span>
                <span>
                    <input type="checkbox" checked={task.completed} onChange={() => handleToggleTask(task.id)} />
                    <Button type="button" onClick={() => handleDeleteTask(task.id)} buttonSize="xs" buttonStyle="primary">Delete</Button>
                    <Button type="button" buttonSize="xs" buttonStyle="primary">Edit</Button>
                </span>

            </li>
    );
};