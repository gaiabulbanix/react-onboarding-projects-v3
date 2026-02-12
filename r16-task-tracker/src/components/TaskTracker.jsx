import Panel from "./Panel";
import Button from "./Button";

export default function TaskTracker() {
    // color scheme
    // -dark mode: bg-slate-900 text-slate-100
    // -dark mode accent: border-teal-800
    // -light mode: bg-slate-100 text-slate-900

    // states
    const [tasks, setTasks] = ('');

    return (
        <>
            <Panel>
                <h1>Task Tracker</h1>
            </Panel>
            <Panel className='mt-6'>
                <form action="" className="flex flex-col gap-2">
                    <label htmlFor="">Task Input</label>
                    <input
                        className="px-3 py-1.5 rounded-md border-teal-800 border-2 text-slate-900"
                        type="text"
                    />
                </form>
                <div className="flex justify-between mt-4 py-2 items-start">
                    <div>
                        <ul>
                            <li>Task 1 - Completed? - Edit - Delete</li>
                            <li>Task 2 - Completed? - Edit - Delete</li>
                            <li>Task 3 - Completed? - Edit - Delete</li>
                        </ul>
                    </div>
                    <div className="flex gap-2">
                        <Button>
                            Add Task
                        </Button>
                        <Button>
                            Remove All Tasks
                        </Button>
                    </div>
                </div>
            </Panel>
        </>
    );
}