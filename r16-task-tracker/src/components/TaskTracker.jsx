import Panel from "./Panel";
import Button from "./Button";
import TaskList from "./TaskList";
import { useState } from "react";
import TaskForm from "./TaskForm";

export default function TaskTracker() {
    // color scheme
    // -dark mode: bg-slate-900 text-slate-100
    // -dark mode accent: border-teal-800
    // -light mode: bg-slate-100 text-slate-900

    // states
    const [taskList, setTaskList] = useState([]);

    const [taskInput, setTaskInput] = useState('')

    // handlers
    const handleAddTask = (e) => {
        e.preventDefault();
        if (!taskInput.trim()) return;
        setTaskList(prev => {
            let nextId;
            if (prev.length === 0) {
                nextId = 1;
            } else {
                const lastTask = prev[prev.length - 1];
                nextId = lastTask.id + 1;
            };

            return [...prev, {
                id: nextId,
                title: taskInput.trim(),
                completed: false,
            }]
        });
        setTaskInput('');
    };

    const handleToggleTask = (id) => {
        setTaskList(prev => {
            return prev.map(task => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed };
                } return task;
            })
        })
    }

    const handleDeleteTask = (id) => {
        setTaskList(prev => {
            return prev.filter(task => task.id !== id)
        });
    }

    const handleClearTasks = () => {
        setTaskList([]);
    }

    return (
        <>
            <Panel>
                <h1>Task Tracker</h1>
            </Panel>
            <Panel className='mt-6'>
                {/* <TaskForm
                    className="flex flex-col gap-2"
                    onSubmit={handleAddTask}
                >

                </TaskForm> */}
                <form
                    className="flex flex-col gap-2"
                    onSubmit={handleAddTask}
                >
                    <label>Task Input</label>
                    <p>{taskInput}</p>
                    <input
                        className="px-3 py-1.5 rounded-md border-teal-800 border-2 text-slate-900"
                        type="text"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                    />
                    <div className="flex justify-between mt-4 py-2 items-start">
                        <div>
                            <TaskList
                                tasks={taskList}
                                onToggle={handleToggleTask}
                                onDelete={handleAddTask}
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button
                                type="submit"
                            >
                                Add Task
                            </Button>
                            <Button
                                onClick={handleClearTasks}
                            >
                                Remove All Tasks
                            </Button>
                        </div>
                    </div>
                </form >
            </Panel >
        </>
    );
}