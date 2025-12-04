import Panel from "../components/scaffold/Panel";
import ActionRow from "../components/scaffold/ActionRow";
import FormInput from "../components/scaffold/FormInput";

export default function SettingsPanel() {
    return (
        <div className="py-4">
            <Panel title="User Settings">
                {/* { content here} */}
                <p>Adjust your preferences below.</p>
            </Panel>
            <Panel>
                <FormInput></FormInput>
                <ActionRow></ActionRow>
            </Panel>
        </div>
    );
}