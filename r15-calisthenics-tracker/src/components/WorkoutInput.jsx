import InputField from "./InputField";
import Button from "./Button";

export default function WorkoutInput({ className = '', workout, setWorkout, workoutReps, setWorkoutReps, handleAddWorkout, isValidEntry, }) {
    return (
        <form
            className={`${className}`}
            onSubmit={handleAddWorkout}
        >
            <InputField
                inputClassName="p-1 rounded-md border-teal-800 border-2 text-slate-900"
                label="Input Workout"
                htmlFor="workoutInput"
                id="workoutInput"
                type="text"
                value={workout}
                onChange={(e) => setWorkout(e.target.value)}
                placeholder="Enter workout here..."
            >
            </InputField>
            <div className="flex items-end gap-4">
                <InputField
                    wrapperClassName="mt-4"
                    inputClassName="p-1 rounded-md border-teal-800 border-2 text-slate-900"
                    label="Input Reps"
                    htmlFor="workoutRepsInput"
                    id="workoutRepsInput"
                    type="number"
                    min={1}
                    step={1}
                    value={workoutReps}
                    onChange={(e) => setWorkoutReps(e.target.value)}
                    placeholder="Enter reps here..."
                >
                </InputField>
                <Button
                    type="submit"
                    buttonStyle={!isValidEntry ? 'disabled' : 'primary'}
                    buttonSize="md"
                    disabled={!isValidEntry}
                >
                    Add Workout
                </Button>
            </div>
        </form>
    );
}