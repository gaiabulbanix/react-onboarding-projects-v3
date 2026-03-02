import { useState } from "react";

export default function TaskTracker() {
    // states
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    return (
        <>
            <div>
                <h1>Task Tracker</h1>
                <p>Total Tasks: {tasks.length}</p>
            </div>
            <div>
                <form>
                    <input
                        type="text"
                        value={input}
                    />
                </form>
            </div>
            <div>
                <ul>

                </ul>
                <button>Remove All Tasks</button>
            </div>
        </>
    );
}