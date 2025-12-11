import Panel from "./components/scaffold/Panel";
import ActionRow from "./components/scaffold/ActionRow";
import FormInput from "./components/scaffold/FormInput";
import SettingsPanel from "./pages/SettingsPanel";
import NotificationSettings from "./pages/NotificationSettings";
import PasswordSecurity from "./pages/PasswordSecurity";
import Button from "./components/scaffold/Button";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Panel title="Default Panel">
        <p className="text-gray-600">This is the default panel variant.</p>
      </Panel>

      <Panel title="Soft Panel" variant="soft" className="mt-3">
        <p className="text-gray-600">This is the soft panel variant.</p>
      </Panel>

      <Panel title="Actions Demo" className="mt-4">
        <ActionRow label="Profile">
          <Button size="sm">
            Edit
          </Button>
          <Button size="sm" variant="secondary">
            View
          </Button>
        </ActionRow>

        <ActionRow label="Settings">
          <Button size="sm" variant="success">
            Enable
          </Button>
        </ActionRow>
      </Panel>

      <Panel title="Form Input Demo" className="mt-4">
        <FormInput
          label="Username"
          placeholder="Enter your username."
        />
        <FormInput
          label="Email"
          placeholder="Enter your email."
          className="mt-3"
        />
      </Panel>

      <SettingsPanel />

      <NotificationSettings />

      <PasswordSecurity />
    </div >
  );
}