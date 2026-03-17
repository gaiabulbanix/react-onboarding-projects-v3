import { useState } from "react";

export default function TaskTracker() {
    // states
    const [taskArray, setTaskArray] = useState([])
    const [taskItem, setTaskItem] = useState('');

    // handlers
    const handleAddTask = (e) => {
        e.preventDefault();
        let newTaskItem = taskItem.trim();
        if (!newTaskItem) return;
        setTaskArray(prev => [...prev, {
            id: crypto.randomUUID(),
            name: newTaskItem,
            date: new Date(Date.now()).toLocaleString(),
            complete: false,
        }])
        setTaskItem('');
    };

    const handleToggleTask = (id) => {
        setTaskArray(prev =>
            prev.map(task =>
                task.id === id
                    ? { ...task, complete: !task.complete }
                    : task
            )
        )
    }

    const handleDeleteTask = () => {
        setTaskArray(prev =>
            prev.filter(

            )
        )
    }

    // jsx block
    return (
        <>
            <div>
                <form
                    onSubmit={handleAddTask}
                >
                    <input
                        type="text"
                        value={taskItem}
                        onChange={(e) => setTaskItem(e.target.value)}

                    />
                    <button
                        type="submit"
                    >
                        Add Task
                    </button>
                </form>
            </div>
            <div>
                <ul>
                    {
                        taskArray.map((task, index) => {
                            return (
                                <li
                                    key={task.id}
                                >
                                    {`${index} - ${task.id} - ${task.name} - ${task.date} - ${task.complete ? 'Complete' : 'Incomplete'}`}
                                    <input
                                        type="checkbox"
                                        checked={task.complete}
                                        onChange={() => handleToggleTask(task.id)}
                                    />
                                    <button>
                                        Delete Task
                                    </button>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    );
}