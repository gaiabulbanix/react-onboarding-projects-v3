import TaskItem from "./TaskItem";

export default function TaskList({ className = '', tasks, handleToggleTask, handleRemoveTask, handleEditTask, filteredTasks, filter, }) {
    return (
        <ul className={`${className} mt-2 mb-2`}>
            {filteredTasks.length === 0 && (
                filter === 'all'
                    ? <li>No tasks yet - add one above!</li>
                    : <li>No tasks match this filter.</li>
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