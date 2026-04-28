import Button from "./Button";

export default function TaskItem({ className = '', task, onToggle, onDelete }) {
    return (
        <li
            className={`${className}`}
        >
            ID: {task.id} - {task.title} - {task.completed ? 'Complete!' : 'Pending'}
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            <Button
                className="px-1 py-0.5"
                onClick={() => onDelete(task.id)}
            >
                Delete Task
            </Button>
        </li>
    );
}