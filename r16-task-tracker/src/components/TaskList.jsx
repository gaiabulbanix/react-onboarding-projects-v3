import TaskItem from "./TaskItem";

export default function TaskList({ className = '', tasks, handleToggleTask, handleDeleteTask, emptyMessage, handleEditTask, }) {
    if (tasks.length === 0) {
        return <p>{emptyMessage}</p>;
    }
    return (
        <ul className={`${className} mt-2 mb-2`}>
            {tasks.map((task, index) => (
                <TaskItem key={task.id}
                    handleToggleTask={handleToggleTask}
                    handleDeleteTask={handleDeleteTask}
                    task={task}
                    index={index}
                    handleEditTask={handleEditTask}
                />
            ))}
        </ul>
    );
};