import { useState, useEffect, } from 'react';
import Panel from './Panel';
import Button from './Button';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

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
    const [filter, setFilter] = useState('all');
    const [taskList, setTaskList] = useState(() => {
        const raw = localStorage.getItem('savedTasks');
        if (!raw) return [];
        try {
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            console.warn("Invalid JSON in localStorage (savedTasks)");
            return [];
        };
    });

    useEffect(() => {
        localStorage.setItem("savedTasks", JSON.stringify(taskList));
    }, [taskList])

    // **handlers**
    // add task
    const handleAddTask = (e) => {
        e.preventDefault();
        if (!newTask) return;
        setTaskList(prev =>
            [...prev, {
                id: crypto.randomUUID(),
                name: newTask,
                date: dateNow,
                completed: false,
            }]);
        setTaskItem('');
    };

    // remove task
    const handleRemoveTask = (id) => {
        setTaskList(prev => prev.filter(t => t.id !== id))
    };

    // edit single task
    const handleEditTask = ({ e, taskId, editInput, }) => {
        e.preventDefault();
        const editInputTrimmed = editInput.trim();
        if (!editInputTrimmed) return;
        setTaskList(prev =>
            prev.map((task) => (
                taskId === task.id
                    ? { ...task, name: editInputTrimmed, }
                    : task
            )));
    };

    // toggle task
    const handleToggleTask = (id) => {
        setTaskList(prev =>
            prev.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)
            ));
    };

    // remove all tasks
    const handleRemoveAllTasks = () => {
        if (!confirm('Are you sure you want to delete all tasks?')) return;
        setTaskList([]);
    }

    // clear completed tasks
    const handleClearCompleted = () => {
        setTaskList(prev =>
            prev.filter(task => !task.completed)
        );
    };

    // filter logic
    const filteredTasks =
        filter === 'all'
            ? taskList
            : filter === 'completed'
                ? taskList.filter(task => task.completed)
                : taskList.filter(task => !task.completed);

    // **derived**
    const newTask = taskItem.trim();
    const dateNow = new Date().toLocaleString();

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
                    newTask={newTask}
                />
            </Panel>

            <Panel className="mt-6 w-full max-w-3xl">
                <div className="flex gap-2 items-center">
                    <h2>Task List</h2>
                    <div className="flex gap-1 items-center">
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
                    </div>
                </div>

                <TaskList
                    tasks={filteredTasks}
                    handleToggleTask={handleToggleTask}
                    handleRemoveTask={handleRemoveTask}
                    handleEditTask={handleEditTask}
                    emptyMessage={
                        filter === 'all'
                            ? "No tasks yet - add one above!"
                            : "No tasks match this filter."
                    }
                />
                <div className="flex gap-1 justify-end mt-4">
                    <Button onClick={handleRemoveAllTasks} buttonStyle="danger" disabled={taskList.length === 0}>
                        Remove All Tasks
                    </Button>
                    <Button onClick={handleClearCompleted} buttonStyle="secondary" disabled={!taskList.some(task => task.completed)}>
                        {taskList.some(task => task.completed)
                            ? "Clear All Completed"
                            : "No Completed Tasks"}
                    </Button>
                </div>
            </Panel>
        </>
    );
};