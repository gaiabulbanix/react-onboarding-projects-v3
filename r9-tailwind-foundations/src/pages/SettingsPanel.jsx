import Panel from "../components/scaffold/Panel";
import ActionRow from "../components/scaffold/ActionRow";
import FormInput from "../components/scaffold/FormInput";

export default function SettingsPanel() {
    return (
        <div className="py-4">
            <Panel title="User Settings">
                <p className="text-gray-600">Adjust your preferences below.</p>

                <ActionRow label="Profile Actions" className="mt-4">
                    <button className="px-2 py-1 bg-blue-500 text-white rounded">
                        Edit Profile
                    </button>
                    <button className="px-2 py-1 bg-gray-200" text-gray-700 rounded>
                        View Profile
                    </button>
                </ActionRow>
            </Panel>
        </div>
    );
}