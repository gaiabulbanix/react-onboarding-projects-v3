import { useState, useEffect } from 'react';
import Panel from './Panel';
import ActionRow from './ActionRow';
import Button from './Button';
import WorkoutInput from './WorkoutInput';
import WorkoutList from './WorkoutList';

export default function CalisthenicsTracker() {
    // color scheme
    // -dark mode: bg-slate-900 text-slate-100
    // -dark mode accent: border-teal-800
    // -light mode: bg-slate-100 text-slate-900
    // - primary: 'bg-slate-100 text-slate-900',
    // - secondary: 'bg-slate-900 text-slate-100',
    // - danger: 'bg-red-500 text-slate-900 font-bold',
    // *use slightly lower/higher values where needed for contrast (200)

    // **hooks**
    const [workout, setWorkout] = useState('');
    const [workoutReps, setWorkoutReps] = useState('');
    const [workoutList, setWorkoutList] = useState(() => {
        const raw = localStorage.getItem('savedWorkouts')
        if (!raw) return [];
        try {
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            console.warn("Invalid JSON in localStorage (savedWorkouts)");
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('savedWorkouts', JSON.stringify(workoutList));
    }, [workoutList]);

    // **handlers**
    // add workout
    const handleAddWorkout = (e) => {
        e.preventDefault();
        if (!isValidEntry) return;
        setWorkoutList(prev => [...prev,
        {
            id: crypto.randomUUID(),
            workout,
            reps: workoutRepsNumber,
        }]);
        setWorkout('');
        setWorkoutReps('');
    }

    // remove workout
    const handleRemoveWorkout = (id) => {
        setWorkoutList(prev => prev.filter(w => w.id !== id));
    }

    // edit single workout
    const handleEditWorkout = (id) => {
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
    }

    // remove all workouts
    const handleRemoveAllWorkouts = () => {
        if (!confirm('Are you sure you want to delete all workouts?')) return;
        setWorkoutList([]);
    }

    // **derived states**
    const workoutRepsNumber = Number(workoutReps);
    const isValidWorkout = workout.trim();
    const isValidWorkoutReps = Number.isInteger(workoutRepsNumber) && workoutRepsNumber >= 1;
    const isValidEntry = isValidWorkout && isValidWorkoutReps;
    const isEmptyList = workoutList.length === 0;

    return (
        <>
            <Panel>
                <h1>Calisthenics Tracker</h1>
            </Panel>

            <Panel className="mt-6">
                <WorkoutInput
                    workout={workout}
                    setWorkout={setWorkout}
                    workoutReps={workoutReps}
                    setWorkoutReps={setWorkoutReps}
                    handleAddWorkout={handleAddWorkout}
                    isValidEntry={isValidEntry}
                />
            </Panel>

            <Panel className="mt-6">
                <ul className="flex flex-col gap-2 min-h-[3rem]">
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
                                    onClick={() => handleRemoveWorkout(workout.id)}>
                                    Remove
                                </Button>
                                <Button
                                    buttonStyle="primary"
                                    buttonSize="sm"
                                    onClick={() => handleEditWorkout(workout.id)}>
                                    Edit
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col gap-2 items-end">
                    <div className="flex gap-2">
                        <Button
                            className="mt-4"
                            buttonStyle={isEmptyList ? 'disabled' : 'danger'}
                            buttonSize="md"
                            onClick={handleRemoveAllWorkouts}
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
            </Panel>
        </>
    );
}