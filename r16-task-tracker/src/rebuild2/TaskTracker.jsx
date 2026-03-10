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

    const handleRenderTask = () => {

    }

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
                        taskArray.map(){

                    }
                    }
                </ul>
            </div>
        </>
    );
}