import Button from "./Button";

export default function TaskInput({ className = '', taskItem, setTaskItem, handleAddTask, }) {
    return (
        <form className={`flex gap-2 items-center ${className}`} onSubmit={handleAddTask}>
            <label htmlFor="taskInput">
                Task Input
            </label>
            <input
                className="p-1 rounded-md border-2 border-teal-800 text-slate-900"
                type="text"
                value={taskItem}
                onChange={(e) => setTaskItem(e.target.value)}
                placeholder="Please add an item..."
            />
            <Button type="submit">
                Add Task
            </Button>
        </form>
    );
};