import Panel from '../components/scaffold/Panel';
import ActionRow from '../components/scaffold/ActionRow';
import FormInput from '../components/scaffold/FormInput';
import Button from '../components/scaffold/Button';

export default function PasswordSecurity() {
  return (
    <div className="py-4">
      <Panel title="Password & Security">
        <p className="text-gray-600">Manage your password and security preferences.</p>

        <ActionRow label="Change Password" className="mt-4">
          <Button size="sm">Update</Button>
        </ActionRow>

        <ActionRow label="Two-Factor Authentication" className="mt-3">
          <Button size="sm" variant="secondary">
            Configure
          </Button>
        </ActionRow>

        <div className="mt-6 h-px bg-gray-200" />

        <FormInput
          label="Current Password"
          placeholder="Enter your current password."
          className="mt-4"
        />
        <ActionRow className="mt-6 mb-1">
          <Button>Update Security Preferences</Button>
        </ActionRow>
      </Panel>
    </div>
  );
}
