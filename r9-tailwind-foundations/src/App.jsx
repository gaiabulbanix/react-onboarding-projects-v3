import Panel from "./components/scaffold/Panel";
import ActionRow from "./components/scaffold/ActionRow";
import FormInput from "./components/scaffold/FormInput";
import SettingsPanel from "./pages/SettingsPanel";
import NotificationSettings from "./pages/NotificationSettings";
import PasswordSecurity from "./pages/PasswordSecurity";
import Button from "./components/scaffold/Button";
import { useState } from "react"

export default function App() {

  const [activePage, setActivePage] = useState("settings");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex gap-2">
        <Button
          size="sm"
          variant={activePage === "settings" ? "primary" : "secondary"}
          onClick={() => setActivePage("settings")}
        >
          Settings
        </Button>

        <Button
          size="sm"
          variant={activePage === "notifications" ? "primary" : "secondary"}
          onClick={() => setActivePage("notifications")}
        >
          Notifications
        </Button>

        <Button
          size="sm"
          variant={activePage === "security" ? "primary" : "secondary"}
          onClick={() => setActivePage("security")}
        >
          Security
        </Button>
      </div>

      <Panel title="Default Panel" className="mt-4">
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

      {activePage === "settings" && <SettingsPanel />}

      {activePage === "notifications" && <NotificationSettings />}

      {activePage === "security" && <PasswordSecurity />}

    </div >
  );
}