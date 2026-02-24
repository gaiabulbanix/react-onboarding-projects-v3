export default function TaskForm({ className = '', onSubmit, }) {
    return (
        <form
            className={`${className}`}
            onSubmit={onSubmit}
        >
            <label>Task Input</label>
            <p>{taskInput}</p>
            <input
                className="px-3 py-1.5 rounded-md border-teal-800 border-2 text-slate-900"
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
            />
        </form>
    );
}