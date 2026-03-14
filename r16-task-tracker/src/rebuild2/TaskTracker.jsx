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

    const handleToggleTask = () => {
        setTaskArray(prev =>
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
                                    key={taskItem.id}
                                >
                                    {`${index} - ${task.id} - ${task.name} - ${task.date} - ${task.complete}`}
                                    <input
                                        type="checkbox"
                                        onChahnge={() => handleToggleTask()}
                                    />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    );
}