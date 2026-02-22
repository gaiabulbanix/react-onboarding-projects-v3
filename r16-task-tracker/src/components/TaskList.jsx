import TaskItem from "./TaskItem";

export default function TaskList({ className = ' ', tasks, onToggle, onDelete }) {
    return (
        <ul className={`${className}`}>
            {tasks.map((task) => (
                <TaskItem
                    className="flex gap-2 mt-2"
                    key={task.id}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    task={task}
                >
                </TaskItem>
            ))}
        </ul>
    );
}