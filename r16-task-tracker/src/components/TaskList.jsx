import TaskItem from "./TaskItem";

export default function TaskList({ className = '', tasks, handleToggleTask, handleRemoveTask, emptyMessage, handleEditTask, }) {
    if (tasks.length === 0) {
        return <p>{emptyMessage}</p>;
    }
    return (
        <ul className={`${className} mt-2 mb-2`}>
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