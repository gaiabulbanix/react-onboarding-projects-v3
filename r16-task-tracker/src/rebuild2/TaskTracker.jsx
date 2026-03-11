import { useState } from "react";

export default function TaskTracker() {
    // states
    const [taskArray, setTaskArray] = useState([])
    const [taskItem, setTaskItem] = useState('');

    // handlers
    const handleAddTask = () => {
        e.preventDefault();
        setTaskArray(prev => [...prev, newTask])
    };

    // jsx block
    return (
        <>
            <div>
                <form>
                    <input
                        type="text"
                        value="taskItem"
                        onChange={(e) => setTaskItem(e.target.value)}
                        onSubmit={handleAddTask}
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
                            <li>
                                {`${index} - ${taskItem.name} - ${taskItem.complete}`}
                            </li>
                        })
                    }
                </ul>
            </div>
        </>
    );
}