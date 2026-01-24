import { useState, useEffect } from 'react';
import Panel from "./components/Panel";
import ActionRow from './components/ActionRow';
import Button from './components/Button';
import FormInput from './components/FormInput';

export default function App() {
  const [workout, setWorkout] = useState('');
  const [workoutList, setWorkoutList] = useState(() => {
    try {
      const loadedWorkoutList = localStorage.getItem('storedWorkoutList');
      return loadedWorkoutList ? JSON.parse(loadedWorkoutList) : [];
    } catch {
      return [];
    }
  });
  const [workoutReps, setWorkoutReps] = useState('');
  useEffect(() => {
    localStorage.setItem('storedWorkoutList', JSON.stringify(workoutList));
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
        <FormInput
          inputClassName="px-3 py-1.5 rounded-md border-teal-800 border-2 text-slate-900"
          label="Input Workout:"
          htmlFor="workoutInput"
          id="workoutInput"
          type="text"
          value={workout}
          onChange={(e) => setWorkout(e.target.value)}
          placeholder="Enter your workout here."
        >
        </FormInput>
        <FormInput
          wrapperClassName="mt-4"
          inputClassName="px-3 py-1.5 rounded-md border-teal-800 border-2 text-slate-900"
          label="Input Reps:"
          htmlFor="workoutRepsInput"
          id="workoutRepsInput"
          type="number"
          min={1}
          step={1}
          value={workoutReps}
          onChange={(e) => setWorkoutReps(e.target.value)}
          placeholder="Enter your number of reps here."
        >
        </FormInput>
        <ActionRow className="mt-4"
          left={<ul className="flex flex-col gap-2">
            {workoutList.map((workout, index) => (
              <li
                key={workout.id}
                className="flex gap-4 items-center justify-between">
                <span>
                  {index + 1} - {workout.workout} - {workout.reps} rep(s)
                </span>
                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      setWorkoutList(prev => prev.filter(thisWorkout => thisWorkout.id !== workout.id));
                    }}>
                    Remove
                  </Button>
                  <Button
                    onClick={() => {

                    }}>
                    Edit
                  </Button>
                </div>
              </li>
            ))}
          </ul>}
          right={
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  if (!workout.trim()) return;
                  setWorkoutList(prev => [...prev,
                  {
                    id: crypto.randomUUID(),
                    workout,
                    reps: Number(workoutReps) || 1,
                  }]);
                  setWorkout('');
                  setWorkoutReps('');
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
      </Panel >
    </div >
  );
}