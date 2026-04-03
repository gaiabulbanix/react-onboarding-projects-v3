import { useState, useEffect, } from 'react';
import Panel from './Panel';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import Button from './Button';

export default function TaskTracker() {
    // **hooks**
    const [taskItem, setTaskItem] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [filter, setFilter] = useState('all');

    // log array
    useEffect(() => {
        console.log(taskList);
    }, [taskList]);

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
        setTaskList(prev => (
            prev.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)
            )));
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

    // filter logic
    // const filteredTasks = () => {
    //     if (filter === 'all') {
    //         // return tasklist here regardless of completion
    //     } else if (filter === 'completed') {
    //         // return tasklist but filtered only for completed === true, use taskList.filter probably
    //     } else if (filter === 'pending') {
    //         // return tasklist but filtered only for completed === false, use taskList.filter probably
    //     } else return;
    //     // return if there's an error
    // };

    // jsx block
    return (
        <>
            <Panel className="w-fit">
                <h1>Task Tracker</h1>
            </Panel>
            <Panel className="mt-6 w-fit">
                <TaskInput
                    taskItem={taskItem}
                    setTaskItem={setTaskItem}
                    handleAddTask={handleAddTask}
                />
            </Panel>
            {taskList.length > 0 && <Panel className="mt-6 w-fit">
                <TaskList
                    taskList={taskList}
                    handleToggleTask={handleToggleTask}
                    handleDeleteTask={handleDeleteTask}
                />
                <Button onClick={handleDeleteAllTasks}>Delete All Items</Button>
            </Panel>}

        </>
    );
};