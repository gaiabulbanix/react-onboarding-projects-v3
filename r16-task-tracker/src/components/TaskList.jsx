import TaskItem from "./TaskItem";

export default function TaskList({ className = '', taskList, handleToggleTask, handleDeleteTask, }) {
    return (
        <ul className={`${className}`}>
            {taskList.map((task, index) => (
                <TaskItem key={task.id} handleToggleTask={handleToggleTask} handleDeleteTask={handleDeleteTask} task={task} index={index} />
            ))}
        </ul>
    );
};