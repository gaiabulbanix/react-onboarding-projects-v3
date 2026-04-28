import TaskItem from "./TaskItem";

export default function TaskList({ taskList, handleCompleteTask, handleDeleteTask, }) {
    return (
        <>
            <ul>
                {taskList.map((task, index) => (
                    <TaskItem
                        handleCompleteTask={handleCompleteTask}
                        handleDeleteTask={handleDeleteTask}
                        task={task}
                        index={index}
                        key={task.id}
                    />
                ))}
            </ul >
        </>
    );
};