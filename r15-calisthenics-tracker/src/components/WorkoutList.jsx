import Panel from "./Panel";
import Button from "./Button";

export default function WorkoutList({ className = '', workoutList, handleRemoveWorkout, handleRemoveAllWorkouts, handleEditWorkout, isEmptyList, }) {
    return (
        <>
            <ul className="flex flex-col gap-2 min-h-[3rem]">
                {workoutList.length === 0 && (
                    <li className="italic text-slate-400">
                        No workouts yet - add one to get Started!
                    </li>
                )}
                {workoutList.map((workoutItem, index) => (
                    <li
                        key={workoutItem.id}
                        className="flex gap-4 items-center justify-between">
                        <span>
                            {index + 1} - {workoutItem.workout} - {workoutItem.reps} rep(s)
                        </span>
                        <div className="flex gap-2">
                            <Button
                                buttonStyle="danger"
                                buttonSize="sm"
                                onClick={() => handleRemoveWorkout(workoutItem)}>
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
                </div>
            </div>
        </>
    );
}