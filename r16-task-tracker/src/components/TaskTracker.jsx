import Panel from "./Panel";
import Button from "./Button";
import { useState } from "react";

export default function TaskTracker() {
    // color scheme
    // -dark mode: bg-slate-900 text-slate-100
    // -dark mode accent: border-teal-800
    // -light mode: bg-slate-100 text-slate-900

    // states
    const [taskList, setTaskList] = useState([{
        id: 1,
        title: 'Test Task',
        completed: false,
    }]);

    const [taskInput, setTaskInput] = useState('')

    // handlers
    const handleAddTask = () => {
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
        return;
    }

    return (
        <>
            <Panel>
                <h1>Task Tracker</h1>
            </Panel>
            <Panel className='mt-6'>
                <form action="" className="flex flex-col gap-2">
                    <label htmlFor="">Task Input</label>
                    <p>{taskInput}</p>
                    <input
                        className="px-3 py-1.5 rounded-md border-teal-800 border-2 text-slate-900"
                        type="text"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                    />
                </form>
                <div className="flex justify-between mt-4 py-2 items-start">
                    <div>
                        <ul>
                            {taskList.map((task) => (
                                <li key={task.id} className="flex gap-2">
                                    ID: {task.id} - {task.title} - {task.completed ? 'Complete!' : 'Pending'}
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => handleToggleTask(task.id)}
                                    />
                                </li>

                            ))}
                        </ul>
                    </div>
                    <div className="flex gap-2">

                        <Button
                            onClick={handleAddTask}
                        >
                            Add Task
                        </Button>
                        <Button>
                            Remove All Tasks
                        </Button>
                    </div>
                </div>
            </Panel >
        </>
    );
}