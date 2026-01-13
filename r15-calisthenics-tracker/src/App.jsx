import { useState, useEffect } from 'react';
import Panel from "./components/Panel";
import ActionRow from './components/ActionRow';
import Button from './components/Button';

export default function App() {
  const [workoutName, setWorkoutName] = useState('');
  const [workoutList, setWorkoutList] = useState(() => {
    try {
      const loadedWorkoutList = localStorage.getItem('storedWorkouts');
      return loadedWorkoutList ? JSON.parse(loadedWorkoutList) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('storedWorkouts', JSON.stringify(workoutList));
  }, [workoutList]);

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
              <Button
                onClick={() => {
                  if (!workoutName.trim()) return;
                  setWorkoutList(prev => [...prev, workoutName]);
                  setWorkoutName('');
                }}>
                Add Workout and Save to Storage
              </Button>
              <Button
                onClick={() => {
                  setWorkoutList([]);
                }}>
                Remove Workouts and Save to Storage
              </Button>
            </div>
          }
        />
      </Panel>
    </div>
  );
}