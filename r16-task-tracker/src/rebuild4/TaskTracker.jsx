import { useState } from 'react';
import Panel from './Panel';

export default function TaskTracker() {
    // color scheme
    // -dark mode: bg-slate-900 text-slate-100
    // -dark mode accent: border-teal-800
    // -light mode: bg-slate-100 text-slate-900

    // hooks
    const [taskItem, setTaskItem] = useState('');


    return (
        <>
            <Panel className="w-1/2">
                <h1>Task Tracker</h1>
            </Panel>
            <Panel className="mt-6 flex-col w-1/2">
                <form
                    className="flex items-center gap-2"
                    onSubmit={''}
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
            </Panel>
            <Panel className="mt-6 w-1/2">
                <p>{taskItem}</p>
            </Panel>
        </>
    );
};