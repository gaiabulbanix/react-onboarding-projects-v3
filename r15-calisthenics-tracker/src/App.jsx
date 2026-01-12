import { useState, useEffect } from 'react';
import Panel from "./components/Panel";
import ActionRow from './components/ActionRow';

export default function App() {
  const [workoutName, setWorkoutName] = useState('');
  const [workoutList, setWorkoutList] = useState([]);
  useEffect(() => {
    try {
      const loadedWorkoutList = localStorage.getItem('storedWorkouts');
      const parsedLoadedWorkoutList = loadedWorkoutList ? JSON.parse(loadedWorkoutList) : [];
      setWorkoutList(parsedLoadedWorkoutList);
    } catch {
      setWorkoutList([]);
    }
  }, []);

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
        <ActionRow className="mt-4"
          left={<ul className="flex flex-col gap-2">
            {workoutList.map((workout, index) => (
              <li key={index}>{workout}</li>
            ))}
          </ul>}
          right={
            <div className="flex gap-2">
              <button
                className="rounded-md px-3 py-1.5 bg-slate-100 text-slate-900"
                onClick={() => {
                  setWorkoutList([...workoutList, workoutName]);
                  localStorage.setItem('storedWorkouts', JSON.stringify(workoutList));
                }}
              >Add Workout
              </button>
              <button className="rounded-md px-3 py-1.5 bg-slate-100 text-slate-900">
                Remove Workouts
              </button>
            </div>
          }
        />
      </Panel>
    </div>
  );
}