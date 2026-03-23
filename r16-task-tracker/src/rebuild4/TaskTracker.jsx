import { useState } from 'react';

export default function TaskTracker() {
    // color scheme
    // -dark mode: bg-slate-900 text-slate-100
    // -dark mode accent: border-teal-800
    // -light mode: bg-slate-100 text-slate-900

    // hooks
    const [taskItem, setTaskItem] = useState('');

    return (
        <>
            <div>
                <form>
                    <input
                        className="text-slate-900"
                        type="text"
                        value={taskItem}
                        onChange={(e) => setTaskItem(e.target.value)}
                    />
                </form>
            </div >
            <div>
                <p>{taskItem}</p>
            </div>
        </>
    );
};