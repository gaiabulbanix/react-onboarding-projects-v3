export default function TaskItem({ handleCompleteTask, handleDeleteTask, task, index, }) {
    return (
        <li key={task.id} className="flex gap-2 mt-2">
            {index + 1}. {task.name} - {task.date} - {task.completed ? 'Complete' : 'Pending'}
            <input
                type="checkbox"
                onChange={() => handleCompleteTask(task.id)}
                checked={task.completed}
            />
            <button
                className="px-2 py-1 rounded-md bg-slate-100 text-slate-900"
                onClick={() => handleDeleteTask(task.id)}
            >
                Delete Task
            </button>
        </li>
    );
}