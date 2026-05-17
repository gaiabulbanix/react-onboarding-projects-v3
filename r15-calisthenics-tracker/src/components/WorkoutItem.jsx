import Panel from "./Panel";
import Button from "./Button";

export default function WorkoutItem({ className = '', index, workoutItem, handleRemoveWorkout, handleEditWorkout }) {
    return (
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
                    onClick={() => handleEditWorkout(workoutItem)}>
                    Edit
                </Button>
            </div>
        </li>
    );
}