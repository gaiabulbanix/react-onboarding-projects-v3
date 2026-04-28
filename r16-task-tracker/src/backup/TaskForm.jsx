import { useState } from "react";
import Button from "./Button";

export default function TaskForm({ className = '', onSubmit, }) {
    const [taskInput, setTaskInput] = useState('');

    return (
        <form
            className={`${className}`}
            onSubmit={(e) => {
                e.preventDefault();
                if (!taskInput.trim()) return;
                onSubmit(taskInput);
                setTaskInput('');
            }}
        >
            <label>Task Input</label>
            <input
                className="px-3 py-1.5 rounded-md border-teal-800 border-2 text-slate-900"
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
            />
            <Button
                type="submit"
            >
                Add Task
            </Button>
        </form>
    );
}