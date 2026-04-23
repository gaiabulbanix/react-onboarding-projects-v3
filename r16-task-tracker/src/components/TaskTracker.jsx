import { useState, useEffect, } from 'react';
import Panel from './Panel';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import Button from './Button';

export default function TaskTracker() {
    // color scheme
    // -dark mode: bg-slate-900 text-slate-100
    // -dark mode accent: border-teal-800
    // -light mode: bg-slate-100 text-slate-900
    // - primary: 'bg-slate-100 text-slate-900',
    // - secondary: 'bg-slate-900 text-slate-100',
    // - danger: 'bg-red-500 text-slate-900 font-bold',
    // *use slightly lower/higher values where needed for contrast (200)

    // **hooks**
    const [taskItem, setTaskItem] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [filter, setFilter] = useState('all');

    // load from local storage
    useEffect(() => {
        const raw = localStorage.getItem("savedTasks");
        if (!raw) return;
        try {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
                setTaskList(parsed);
            }
        } catch {
            console.warn("Invalid JSON in localStorage (savedTasks)");
        };
    }, []);

    // save to local storge
    useEffect(() => {
        localStorage.setItem("savedTasks", JSON.stringify(taskList));
    }, [taskList])

    // add task
    const handleAddTask = (e) => {
        e.preventDefault();
        const newTask = taskItem.trim();
        if (!newTask) return;
        const now = new Date().toLocaleString();
        setTaskList(prev => (
            [...prev, {
                id: crypto.randomUUID(),
                name: newTask,
                date: now,
                completed: false,
            }]));
        setTaskItem('');
    };

    // toggle task
    const handleToggleTask = (id) => {
        setTaskList(prev =>
            prev.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)
            ));
    };

    // delete task
    const handleDeleteTask = (id) => {
        setTaskList(prev =>
            prev.filter(task => task.id !== id)
        );
    };

    // delete all tasks
    const handleDeleteAllTasks = () => {
        setTaskList([]);
    }

    // edit single task
    const handleEditTask = ({ taskId, editInput, }) => {
        const editInputTrimmed = editInput.trim();
        if (!editInputTrimmed) return;
        setTaskList(prev =>
            prev.map((task) => (
                taskId === task.id
                    ? { ...task, name: editInputTrimmed, }
                    : task
            )));
    };

    // filter logic
    const filteredTasks =
        filter === 'all'
            ? taskList
            : filter === 'completed'
                ? taskList.filter(task => task.completed)
                : taskList.filter(task => !task.completed);

    // jsx block
    return (
        <>
            <Panel className="w-full max-w-3xl">
                <h1>Task Tracker</h1>
            </Panel>

            <Panel className="mt-6 w-full max-w-3xl">
                <TaskInput
                    taskItem={taskItem}
                    setTaskItem={setTaskItem}
                    handleAddTask={handleAddTask}
                />
            </Panel>

            <Panel className="mt-6 w-full max-w-3xl">
                <div className="flex gap-2 items-center">
                    <h2>Task List</h2>
                    <span>
                        <Button
                            buttonStyle={filter === 'all' ? 'secondary' : 'primary'}
                            onClick={() => setFilter('all')}
                            disabled={taskList.length === 0}
                        >Show All</Button>
                        <Button
                            buttonStyle={filter === 'completed' ? 'secondary' : 'primary'}
                            onClick={() => setFilter('completed')}
                            disabled={taskList.length === 0}
                        >Show Completed</Button>
                        <Button
                            buttonStyle={filter === 'pending' ? 'secondary' : 'primary'}
                            onClick={() => setFilter('pending')}
                            disabled={taskList.length === 0}
                        >Show Pending</Button>
                    </span>
                </div>

                <TaskList
                    tasks={filteredTasks}
                    handleToggleTask={handleToggleTask}
                    handleDeleteTask={handleDeleteTask}
                    handleEditTask={handleEditTask}
                    emptyMessage={
                        filter === 'all'
                            ? "No tasks yet - add one above!"
                            : "No tasks match this filter."
                    }
                />
                <Button onClick={handleDeleteAllTasks} buttonStyle='danger' disabled={taskList.length === 0}>
                    Delete All Items
                </Button>
                <Button>
                    Clear All Completed
                </Button>
            </Panel>
        </>
    );
};