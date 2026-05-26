import { useState, useEffect } from 'react';
import Panel from './Panel';
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
        };
    });

    useEffect(() => {
        localStorage.setItem('savedWorkouts', JSON.stringify(workoutList));
    }, [workoutList]);

    // **handlers**
    // add workout
    const handleAddWorkout = (e) => {
        e.preventDefault();
        if (!isValidEntry) return;
        setWorkoutList(prev =>
            [...prev, {
                id: crypto.randomUUID(),
                workout,
                reps: workoutRepsNumber,
            }]);
        setWorkout('');
        setWorkoutReps('');
    };

    // remove workout
    const handleRemoveWorkout = (id) => {
        setWorkoutList(prev => prev.filter(w => w.id !== id));
    };

    // edit single workout
    const handleEditWorkout = (e, workoutItem, editWorkoutInput, editWorkoutReps) => {
        e.preventDefault();
        const newWorkout = editWorkoutInput;
        const newWorkoutReps = editWorkoutReps;
        const newWorkoutRepsNumber = Number(newWorkoutReps);
        if (!newWorkout || newWorkout.trim() === '') return;
        if (!Number.isInteger(newWorkoutRepsNumber) || newWorkoutRepsNumber < 1) return;
        setWorkoutList(prev => prev.map(w =>
            w.id === workoutItem.id
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

    // **derived**
    const workoutRepsNumber = Number(workoutReps);
    const isValidWorkout = workout.trim();
    const isValidWorkoutReps = Number.isInteger(workoutRepsNumber) && workoutRepsNumber >= 1;
    const isValidEntry = isValidWorkout && isValidWorkoutReps;
    const isEmptyList = workoutList.length === 0;

    return (
        <>
            <Panel className="w-full max-w-3xl">
                <h1>Calisthenics Tracker</h1>
            </Panel>

            <Panel className="mt-6 w-full max-w-3xl">
                <WorkoutInput
                    className="flex justify-between items-end"
                    workout={workout}
                    setWorkout={setWorkout}
                    workoutReps={workoutReps}
                    setWorkoutReps={setWorkoutReps}
                    handleAddWorkout={handleAddWorkout}
                    isValidEntry={isValidEntry}
                />
            </Panel>

            <Panel className="mt-6 w-full max-w-3xl">
                <h2>Task List</h2>
                <WorkoutList
                    workoutList={workoutList}
                    handleRemoveWorkout={handleRemoveWorkout}
                    handleRemoveAllWorkouts={handleRemoveAllWorkouts}
                    handleEditWorkout={handleEditWorkout}
                    isEmptyList={isEmptyList}
                    isValidEntry={isValidEntry}
                    workout={workout}
                    workoutReps={workoutReps}
                />
            </Panel>
        </>
    );
}