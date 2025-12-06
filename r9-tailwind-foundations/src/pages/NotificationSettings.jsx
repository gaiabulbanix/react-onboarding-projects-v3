import Panel from "../components/scaffold/Panel";
import ActionRow from "../components/scaffold/ActionRow";
import FormInput from "../components/scaffold/FormInput";

export default function NotificationSettings() {
    return (
        <div className="py-4">
            <Panel title="Notification Settings">
                <p>Manage your notifications.</p>
                <ActionRow label="Email Notifications" className="mt-4">
                    <button className="px-2 py-1 bg-blue-500 text-white rounded">
                        Enable
                    </button>
                </ActionRow>
                <ActionRow label="SMS Notifications" className="mt-3">
                    <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded">
                        Disable
                    </button>
                </ActionRow>
                <div className="mt-6 mb-2 h-px bg-gray-200" />
                <FormInput
                    label="Notification Frequency"
                    placeholder="e.g. 7 days"
                    className="mt-4"
                />
                <ActionRow label="" className="mt-6 mb-1">
                    <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md">
                        Save Settings
                    </button>
                </ActionRow>
            </Panel>
        </div >
    );
}