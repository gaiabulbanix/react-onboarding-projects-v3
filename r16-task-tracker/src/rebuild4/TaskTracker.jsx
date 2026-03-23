import { useState, useEffect } from 'react';
import Panel from './Panel';
import TaskForm from './TaskForm';

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

    const handleCompleteTask = (id) => (
        setTaskList(prev => prev.map((task) => {
            if (id !== task.id) return task;
            return {
                ...task,
                completed: !task.completed,
            }
        })));

    const handleDeleteTask = (id) => (
        setTaskList(prev => prev.filter(task => id !== task.id))
    );

    const handleDeleteAllTasks = () => (
        setTaskList([])
    )

    // jsx block
    return (
        <>
            <Panel className="w-1/2">
                <h1>Task Tracker</h1>
            </Panel>
            <Panel className="mt-6 flex-col w-1/2">
                <TaskForm
                    handleAddTask={handleAddTask}
                    taskItem={taskItem}
                    setTaskItem={setTaskItem}
                />
            </Panel>
            <Panel className="mt-6 w-2/3">
                <ul>
                    {taskList.map((task, index) => (
                        <li key={task.id} className="flex gap-2 mt-2">
                            {index + 1}. {task.name} - {task.date} - {task.completed ? 'Complete' : 'Pending'}
                            <input
                                type="checkbox"
                                onChange={() => handleCompleteTask(task.id)}
                                checked={task.completed}
                            />
                            <button
                                className="px-2 py-1 rounded-md bg-slate-100 text-slate-900"
                                onClick={() => handleDeleteTask(task.id)}
                            >
                                Delete Task
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    className="px-2 py-1 rounded-md bg-slate-100 text-slate-900"
                    onClick={handleDeleteAllTasks}
                >
                    Delete all Tasks
                </button>
            </Panel>
        </>
    );
};