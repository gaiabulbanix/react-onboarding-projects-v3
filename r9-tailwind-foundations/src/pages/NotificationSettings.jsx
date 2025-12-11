import Panel from "../components/scaffold/Panel";
import ActionRow from "../components/scaffold/ActionRow";
import FormInput from "../components/scaffold/FormInput";
import Button from "../components/scaffold/Button";

export default function NotificationSettings() {
    return (
        <div className="py-4">
            <Panel title="Notification Settings">
                <p className="text-gray-600">Manage your notifications.</p>

                <ActionRow label="Email Notifications" className="mt-4">
                    <Button size="sm">
                        Enable
                    </Button>
                </ActionRow>

                <ActionRow label="SMS Notifications" className="mt-3">
                    <Button size="sm" variant="secondary">
                        Disable
                    </Button>
                </ActionRow>

                <div className="mt-6 h-px bg-gray-200" />

                <FormInput
                    label="Notification Frequency"
                    placeholder="e.g. 7 days"
                    className="mt-4"
                />
                <ActionRow className="mt-6 mb-1">
                    <Button>
                        Save Settings
                    </Button>
                </ActionRow>
            </Panel>
        </div >
    );
}