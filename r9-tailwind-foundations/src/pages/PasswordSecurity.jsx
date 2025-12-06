import Panel from "../components/scaffold/Panel";
import ActionRow from "../components/scaffold/ActionRow";
import FormInput from "../components/scaffold/FormInput";

export default function PasswordSecurity() {
    return (
        <div className="py-4">
            <Panel title="Password & Security">
                <p className="text-gray-600">Manage your password and security preferences.</p>
                <ActionRow label="Change Password" className="mt-4">
                    <button className="px-2 py-1 bg-blue-500 text-white rounded">
                        Update
                    </button>
                </ActionRow>
                <ActionRow label="Two-Faction Authentication" className="mt-3">
                    <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded">
                        Configure
                    </button>
                </ActionRow>
                <div className="mt-6 mb-2 h-px bg-ray-200"></div>
                <FormInput
                    label="Current Password"
                    placeholder="Enter your current password."
                    className="mt-4"
                />
                <ActionRow label="" className="mt-6 mb-1">
                    <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md">
                        Update Security Preferences
                    </button>
                </ActionRow>
            </Panel>
        </div >
    );
}