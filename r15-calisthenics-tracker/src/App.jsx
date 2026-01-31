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
            {workoutList.length === 0 && (
              <li className="italic text-slate-400">
                "No workouts yet - Add one to get Started!"
              </li>
            )}
            {workoutList.map((workout, index) => (
              <li
                key={workout.id}
                className="flex gap-4 items-center justify-between">
                <span>
                  {index + 1} - {workout.workout} - {workout.reps} rep(s)
                </span>
                <div className="flex gap-2">
                  <Button
                    buttonStyle="danger"
                    buttonSize="sm"
                    onClick={() => {
                      setWorkoutList(prev => prev.filter(w => w.id !== workout.id));
                    }}>
                    Remove
                  </Button>
                  <Button
                    buttonStyle="primary"
                    buttonSize="sm"
                    onClick={() => {
                      const newWorkout = prompt('Edit workout:', workout.workout);
                      const newWorkoutReps = prompt('Edit reps:', workout.reps);
                      const newWorkoutRepsNum = Number(newWorkoutReps);


                      if (!newWorkout || newWorkout.trim() === '') return;
                      if (!Number.isInteger(newWorkoutRepsNum) || newWorkoutRepsNum < 1) return;

                      setWorkoutList(prev => prev.map(w =>
                        w.id === workout.id
                          ? {
                            ...w,
                            workout: newWorkout,
                            reps: newWorkoutRepsNum,
                          }
                          : w
                      ));
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
                buttonStyle="primary"
                buttonSize="md"
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
                Add Workout
              </Button>
              <Button
                buttonStyle={workoutList.length === 0 ? 'secondary' : 'danger'}
                buttonSize="md"
                onClick={() => {
                  if (!confirm('Are you sure you want to delete all workouts?')) return;
                  setWorkoutList([]);
                }}
                disabled={workoutList.length === 0}
              >
                Remove All Workouts
              </Button>
            </div>
          }
        />
      </Panel >
    </div >
  );
}