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

    const handleToggleTask = () => {
        return ('');
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
                        </li>
                    ))}
                </ul>
                <button>Remove All Tasks</button>
            </div>
        </>
    );
}