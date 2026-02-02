import { useState, useEffect } from 'react';
import Panel from "./components/Panel";
import ActionRow from './components/ActionRow';
import Button from './components/Button';
import FormInput from './components/FormInput';

export default function App() {
  // state and validation
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

  const workoutRepsNumber = Number(workoutReps);
  const isValidWorkout = workout.trim();
  const isValidWorkoutReps = Number.isInteger(workoutRepsNumber) && workoutRepsNumber >= 1;
  const isValidEntry = isValidWorkout && isValidWorkoutReps;
  const isEmptyList = workoutList.length === 0;


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
          placeholder="Enter your workout name/type here."
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
          left={<ul className="flex flex-col gap-2 min-h-[3rem]">
            {workoutList.length === 0 && (
              <li className="italic text-slate-400">
                No workouts yet - add one to get Started!
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
                      const newWorkoutRepsNumber = Number(newWorkoutReps);
                      if (!newWorkout || newWorkout.trim() === '') return;
                      if (!Number.isInteger(newWorkoutRepsNumber) || newWorkoutRepsNumber < 1) return;
                      setWorkoutList(prev => prev.map(w =>
                        w.id === workout.id
                          ? {
                            ...w,
                            workout: newWorkout,
                            reps: newWorkoutRepsNumber,
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
            <div className="flex flex-col gap-2 items-end">
              <div className="flex gap-2">
                <Button
                  buttonStyle={!isValidEntry ? 'disabled' : 'primary'}
                  buttonSize="md"
                  onClick={() => {
                    if (!isValidEntry) return;
                    setWorkoutList(prev => [...prev,
                    {
                      id: crypto.randomUUID(),
                      workout,
                      reps: workoutRepsNumber,
                    }]);
                    setWorkout('');
                    setWorkoutReps('');
                  }}
                  disabled={!isValidEntry}
                >
                  Add Workout
                </Button>
                <Button
                  buttonStyle={isEmptyList ? 'disabled' : 'danger'}
                  buttonSize="md"
                  onClick={() => {
                    if (!confirm('Are you sure you want to delete all workouts?')) return;
                    setWorkoutList([]);
                  }}
                  disabled={isEmptyList}
                >
                  Remove All Workouts
                </Button>
                {!isValidEntry && (workout || workoutReps) && (
                  <p className="mt-2 italic text-slate-400">
                    Enter a workout name and at least 1 rep.
                  </p>
                )}
              </div>
            </div>
          }
        />
      </Panel >
    </div >
  );
}