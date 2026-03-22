import { useState } from 'react';

export default function TaskTracker() {
    // states
    const [taskList, setTaskList] = useState([]);
    const [taskItem, setTaskItem] = useState('');

    // handler

    const handleAddTask = () => {
        setTaskList(prev => {
            taskList.map(task => )
        });
    };

    const handleDisplayTaskList = () => {
        setTaskList
    };

    const handleDeleteTaskItem;

    const handleDeleteAllTasks;

    // jsx
    return (
        <>
            <div>
                <form
                    onSubmit={() => handleAddTask}
                >
                    <input
                        type="text"
                        value={(e) => setTaskItem(e.target.value)}
                    />
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