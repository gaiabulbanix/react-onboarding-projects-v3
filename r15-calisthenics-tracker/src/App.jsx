import { useState, useEffect } from 'react';
import Panel from "./components/Panel";

export default function App() {
  const [workoutName, setWorkoutName] = useState('');
  const [workoutList, setWorkoutList] = useState([]);


  return (
    // color scheme
    // -dark mode: bg-slate-900 text-slate-100
    // -dark mode accent: border-teal-800
    // -light mode: bg-slate-100 text-slate-900

    <div className="p-8 min-h-screen bg-slate-900 text-slate-100">
      <Panel>
        <h1>Calisthenics Tracker</h1>
      </Panel>
      <Panel className="mt-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="workoutInput">Input Workout</label>
          <p>{workoutName}</p>
          <input
            id="workoutInput"
            type="text"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
            placeholder="Enter your workout here." />
        </div>
        <div className="mt-4 flex justify-between py-2">
          <div>
            <ul className="flex flex-col gap-2">
              <li>Workout 1</li>
              <li>Workout 2</li>
              <li>Workout 3</li>
            </ul>
          </div>
          <div>
            <button
              className="rounded-md px-3 py-1.5 bg-slate-100 text-slate-900"
              onClick={() => setWorkoutList([...workoutList, workoutName])}
            >Add Workout
            </button>
          </div>
        </div>
      </Panel>
    </div>
  );
}