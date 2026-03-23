import { useState, useEffect } from 'react';
import Panel from './Panel';

export default function TaskTracker() {
    // color scheme
    // -dark mode: bg-slate-900 text-slate-100
    // -dark mode accent: border-teal-800
    // -light mode: bg-slate-100 text-slate-900

    // hooks
    const [taskItem, setTaskItem] = useState('');
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        console.log(taskList);
    }, [taskList]);

    // handlers
    const handleAddTask = (e) => {
        e.preventDefault();
        const newTask = taskItem.trim();
        if (!newTask) return;
        const now = new Date().toLocaleString();
        setTaskList(prev => [...prev, {
            id: crypto.randomUUID(),
            name: newTask,
            date: now,
            completed: false,
        }]);
        setTaskItem('');
    };

    const handleCompleteTask = (id) => {
        setTaskList(prev => prev.map((task) => {
            if (id !== task.id) return;
            return {
                ...task,
                completed: !task.completed,
            };
        }))
    };

    // jsx block
    return (
        <>
            <Panel className="w-1/2">
                <h1>Task Tracker</h1>
            </Panel>
            <Panel className="mt-6 flex-col w-1/2">
                <form
                    className="flex items-center gap-2"
                    onSubmit={handleAddTask}
                >
                    <input
                        className="text-slate-900 border-teal-800 border-2 px-2 py-1 rounded-md"
                        type="text"
                        value={taskItem}
                        placeholder="Input a Task here..."
                        onChange={(e) => setTaskItem(e.target.value)}
                    />
                    <button
                        className="px-2 py-1 rounded-md bg-slate-100 text-slate-900"
                        type="submit"
                    >
                        Add Task
                    </button>
                </form>
            </Panel>
            <Panel className="mt-6 w-1/2">
                <ul>
                    {taskList.map((task, index) => (
                        <li key={task.id} className="flex gap-2">
                            {index + 1}. {task.name} - {task.date} - {task.completed ? 'Complete' : 'Pending'}
                            <input
                                type="checkbox"
                                onChange={() => handleCompleteTask(task.id)}
                                checked={task.completed}
                            />
                            <button
                                className="px-2 py-1 rounded-md bg-slate-100 text-slate-900"
                            >
                                Delete Task
                            </button>
                        </li>
                    ))}
                </ul>
            </Panel>
        </>
    );
};