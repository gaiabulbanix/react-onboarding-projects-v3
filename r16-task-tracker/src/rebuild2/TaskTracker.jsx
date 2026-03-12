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
            id: new Date(Date.now()).toLocaleString(),
            name: newTaskItem,
            complete: false,
        }])
        setTaskItem('');
    };

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
                        taskArray.map((taskItem, index) => {
                            return (
                                <li
                                    key={taskItem.id}
                                >
                                    {`${index} - ${taskItem.id} - ${taskItem.name} - ${taskItem.complete}`}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    );
}