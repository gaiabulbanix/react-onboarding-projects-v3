import { useState } from "react";

export default function TaskTracker() {
    // states
    const [taskArray, setTaskArray] = useState([])
    const [taskItem, setTaskItem] = useState('');

    // handlers
    const handleAddTask = () => {
        return
    };

    // jsx block
    return (
        <>
            <div>
                <form>
                    <input
                        type="text"
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
                    <li>
                    </li>
                </ul>
            </div>
        </>
    );
}