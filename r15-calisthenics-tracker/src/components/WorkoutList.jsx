import Panel from "./Panel";
import Button from "./Button";
import WorkoutItem from "./WorkoutItem";

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
                    <WorkoutItem key={workoutItem.id}
                        handleRemoveWorkout={handleRemoveWorkout}
                        handleEditWorkout={handleEditWorkout}
                        workoutItem={workoutItem}
                        index={index}
                    />
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