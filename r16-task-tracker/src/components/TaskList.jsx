import TaskItem from "./TaskItem";

export default function TaskList({ className = '', tasks, handleToggleTask, handleRemoveTask, handleEditTask, filter, }) {
    return (
        <ul className={`${className}`}>
            {tasks.length === 0 && (
                filter === 'all'
                    ? <li className="italic text-slate-400">No tasks yet - add one above!</li>
                    : <li className="italic text-slate-400">No tasks match this filter.</li>
            )}
            {tasks.map((task, index) => (
                <TaskItem key={task.id}
                    handleToggleTask={handleToggleTask}
                    handleRemoveTask={handleRemoveTask}
                    task={task}
                    index={index}
                    handleEditTask={handleEditTask}
                />
            ))}
        </ul>
    );
};