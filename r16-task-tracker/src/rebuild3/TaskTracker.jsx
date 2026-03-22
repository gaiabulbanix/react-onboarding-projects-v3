import { useState } from 'react';

export default function TaskTracker() {
    // states
    const [taskList, setTaskList] = useState([]);
    const [taskItem, setTaskItem] = useState('');

    // jsx
    return (
        <>
            <div>
                <form>
                    <input
                        className="text-slate-900"
                        type="text"
                        value={taskItem}
                        onChange={(e) => setTaskItem(e.target.value)}
                    />
                    <p>{taskItem}</p>
                    <button
                        type="Submit"
                    >
                        Add Task
                    </button>
                </form>
            </div>
        </>
    );
}