import { useState } from 'react';
import Panel from "./Panel";
import Button from "./Button";

export default function WorkoutItem({ className = '', index, workoutItem, handleRemoveWorkout, handleEditWorkout, }) {
    const [editState, setEditState] = useState(false);
    const [editWorkoutInput, setEditWorkoutInput] = useState('');
    const [editWorkoutReps, setEditWorkoutReps] = useState('');

    return (
        editState
            ?
            <li>
                <form
                    className="flex justify-between items-center"
                    onSubmit={(e) => {
                        handleEditWorkout(e, workoutItem, editWorkoutInput, editWorkoutReps);
                        setEditState(false);
                    }}
                >
                    <div >
                        <input
                            className="p-0.5 rounded-md border-2 border-teal-800 text-slate-100 bg-slate-900"
                            type="text"
                            value={editWorkoutInput}
                            onChange={(e) => setEditWorkoutInput(e.target.value)}
                        />
                        <input
                            className="p-0.5 rounded-md border-2 border-teal-800 text-slate-100 bg-slate-900"
                            type="number"
                            value={editWorkoutReps}
                            onChange={(e) => setEditWorkoutReps(e.target.value)}
                        />
                    </div>
                    <div>
                        <Button
                            type="submit"
                        >
                            Save
                        </Button>
                        <Button
                            type="button"
                            onClick={() => setEditState(false)}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </li>
            :
            <li
                className="flex gap-4 items-center justify-between">
                <span>
                    {index + 1} - {workoutItem.workout} - {workoutItem.reps} rep(s)
                </span>
                <div className="flex gap-2">
                    <Button
                        buttonStyle="danger"
                        buttonSize="sm"
                        onClick={() => handleRemoveWorkout(workoutItem.id)}>
                        Remove
                    </Button>
                    <Button
                        buttonStyle="primary"
                        buttonSize="sm"
                        onClick={() => {
                            setEditWorkoutInput(workoutItem.workout);
                            setEditWorkoutReps(workoutItem.reps);
                            setEditState(true);
                        }}>
                        Edit
                    </Button>
                </div>
            </li>
    );
}