import FormInput from "./FormInput";
import Button from "./Button";

export default function WorkoutInput({ className = '', workout, setWorkout, workoutReps, setWorkoutReps, handleAddWorkout, isValidEntry, }) {
    return (
        <form
            onSubmit={handleAddWorkout}
        >
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
            <Button
                className="mt-4"
                type="submit"
                buttonStyle={!isValidEntry ? 'disabled' : 'primary'}
                buttonSize="md"
                disabled={!isValidEntry}
            >
                Add Workout
            </Button>
        </form>
    );
}