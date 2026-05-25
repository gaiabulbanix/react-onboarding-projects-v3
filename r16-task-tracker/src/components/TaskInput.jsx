import Button from "./Button";

export default function TaskInput({ className = '', taskItem, setTaskItem, handleAddTask, newTask, }) {
    return (
        <form className={`flex justify-between ${className}`} onSubmit={handleAddTask}>
            <div className="flex gap-2 items-center">
                <label htmlFor="taskInput" className="w-28">
                    Task Input
                </label>
                <input
                    className="p-1 rounded-md border-2 border-teal-800 text-slate-900"
                    type="text"
                    value={taskItem}
                    onChange={(e) => setTaskItem(e.target.value)}
                    placeholder="Please add a task..."
                    onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                            setTaskItem('');
                        }
                    }}
                />
            </div>
            <Button
                type="submit"
                buttonStyle={!newTask ? 'disabled' : 'primary'}
                buttonSize="md"
                disabled={!newTask}
            >
                Add Task
            </Button>
        </form>
    );
};