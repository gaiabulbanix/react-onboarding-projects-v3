import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ onGenerateTaskArray = [] }) {

    // delete task from storage array and task list (item)
    function handleDelTask(task) {
        console.log(task);
    }

    // jsx block
    return (
        <section className="task-list">
            <h2>Task List</h2>
            <ul>
                {onGenerateTaskArray.length === 0 ? (
                    <li>No tasks yet</li>
                ) : (
                    onGenerateTaskArray.map((task, index) => (
                        <TaskItem
                            key={index}
                            task={task}
                            onDelTask={handleDelTask}
                        />
                    ))
                )}
            </ul>
        </section>
    );
}

export default TaskList;