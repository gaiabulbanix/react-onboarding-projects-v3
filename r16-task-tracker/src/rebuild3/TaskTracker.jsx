import { useState, useEffect } from 'react';

export default function TaskTracker() {
    // hooks
    const [taskList, setTaskList] = useState([]);
    const [taskItem, setTaskItem] = useState('');

    useEffect(() => {
        console.log(taskList);
    }, [taskList]);

    // handlers
    const handleAddTask = (e) => {
        e.preventDefault();
        const newTask = taskItem.trim();
        if (!newTask) return;
        setTaskList(prev => [...prev, newTask]);
        setTaskItem('');
    };

    // jsx
    return (
        <>
            <div>
                <form
                    onSubmit={handleAddTask}
                >
                    <input
                        className="text-slate-900"
                        type="text"
                        value={taskItem}
                        onChange={(e) => setTaskItem(e.target.value)}
                    />
                    <p>{taskItem}</p>
                    <button
                        type="submit"
                    >
                        Add Task
                    </button>
                </form>
            </div>
            <div>
                <ul>
                    {taskList.map((task, index) => (
                        <li
                            key={index}
                        >
                            {`${task}`}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}