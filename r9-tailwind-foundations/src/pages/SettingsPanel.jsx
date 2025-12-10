import Panel from "../components/scaffold/Panel";
import ActionRow from "../components/scaffold/ActionRow";
import FormInput from "../components/scaffold/FormInput";
import Button from "../components/scaffold/Button";

export default function SettingsPanel() {
    return (
        <div className="py-4">
            <Panel title="User Settings">
                <p className="text-gray-600">Adjust your preferences below.</p>

                <ActionRow label="Profile Actions" className="mt-4">
                    <Button size="sm">
                        Edit Profile
                    </Button>
                    <Button size="sm" variant="secondary">
                        View Profile
                    </Button>
                </ActionRow>
                <div className="mt-6 mb-2 h-px bg-gray-200" />
                <FormInput label="Username" placeholder="Enter your username." className="mt-4">
                </FormInput>
                <FormInput label="Email" placeholder="Enter your email." className="mt-3 mb-2">
                </FormInput>
                <ActionRow label="" className="mt-6 mb-1">
                    <Button>
                        Save Changes
                    </Button>
                </ActionRow>
            </Panel>
        </div>
    );
}