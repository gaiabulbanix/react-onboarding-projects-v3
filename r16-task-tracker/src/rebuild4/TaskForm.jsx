export default function TaskForm({ handleAddTask, taskItem, setTaskItem }) {
    return (
        <form
            className="flex items-center gap-2"
            onSubmit={handleAddTask}
        >
            <input
                className="text-slate-900 border-teal-800 border-2 px-2 py-1 rounded-md"
                type="text"
                value={taskItem}
                placeholder="Input a Task here..."
                onChange={(e) => setTaskItem(e.target.value)}
            />
            <button
                className="px-2 py-1 rounded-md bg-slate-100 text-slate-900"
                type="submit"
            >
                Add Task
            </button>
        </form>
    );
};