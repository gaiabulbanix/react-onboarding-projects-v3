import { useState, useEffect } from 'react';

export default function TaskTracker() {
    // hooks
    const [taskList, setTaskList] = useState([]);
    const [taskItem, setTaskItem] = useState('');
    useEffect(() => {
        console.log(taskList);
    }, [taskList]);

    // handler
    const handleAddTask = (e) => {
        e.preventDefault();
        const newTask = taskItem.trim();
        if (!newTask) return;
        setTaskList(prev => [...prev, newTask]);
        setTaskItem('');
    }

    const handleRenderTask = () => {
        return taskList.map((task, index) => {
            return (
                <li
                    key={index}
                >
                    {`${task}`}
                </li>
            );
        });
    }

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
                    {handleRenderTask()}
                </ul>
            </div>
        </>
    );
}