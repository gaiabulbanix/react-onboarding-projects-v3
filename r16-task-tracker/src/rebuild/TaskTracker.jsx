import { useState } from "react";

export default function TaskTracker() {
    // states
    const [taskArray, setTaskArray] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    // handlers
    const handleAddTask = (e) => {
        e.preventDefault();
        if (!taskInput.trim()) return;
        setTaskArray(prev => {
            return [...prev, {
                id: Date.now(),
                taskName: taskInput.trim(),
                completed: false,
            }]
        });
        setTaskInput('');
    };

    const handleToggleTask = (id) => {
        setTaskArray(prev => {
            return prev.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed,
                    };
                } return task;
            })
        });
    }

    const handleDeleteAllTasks = () => {
        setTaskArray([]);
    }

    const handleDeleteTask = (id) => {
        setTaskArray(prev =>
            prev.filter(task => task.id !== id)
        );
    }

    return (
        <>
            <div>
                <h1>Task Tracker</h1>
                <p>Total Tasks: {taskArray.length}</p>
            </div>
            <div>
                <form onSubmit={handleAddTask}>
                    <input
                        type="text"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                    />
                    <button type="submit">Add Task</button>
                </form>
            </div>
            <div>
                <ul>
                    {taskArray.map(task => (
                        <li key={task.id}>
                            {task.taskName} - {task.completed ? "Complete" : "Pending"}
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleToggleTask(task.id)}
                            />
                            <button
                                onClick={() => handleDeleteTask(task.id)}
                            >
                                Delete Task
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={handleDeleteAllTasks}
                >
                    Remove All Tasks
                </button>
            </div >
        </>
    );
}