import TaskItem from "./TaskItem";

export default function TaskList({ className = '', taskList, handleToggleTask, handleDeleteTask, }) {
    if (taskList.length === 0) {
        return <p className="mt-2 mb-2">No tasks yet - add one above!</p>;
    }
    return (
        <ul className={`${className} mt-2 mb-2`}>
            {taskList.map((task, index) => (
                <TaskItem key={task.id} handleToggleTask={handleToggleTask} handleDeleteTask={handleDeleteTask} task={task} index={index} />
            ))}
        </ul>
    );
};