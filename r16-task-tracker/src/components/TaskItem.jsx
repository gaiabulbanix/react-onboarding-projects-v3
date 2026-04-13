import Button from "./Button";

export default function TaskItem({ className = '', task, index, handleToggleTask, handleDeleteTask }) {
    return (
        <li className="flex gap-2 items-center">
            {index + 1}. {task.name} - {task.date} - {task.completed ? 'Complete' : 'Pending'}
            <input type="checkbox" checked={task.completed} onChange={() => handleToggleTask(task.id)} />
            <Button type="button" onClick={() => handleDeleteTask(task.id)} buttonSize='xs' buttonStyle='primary'>Delete</Button>
        </li>
    );
};