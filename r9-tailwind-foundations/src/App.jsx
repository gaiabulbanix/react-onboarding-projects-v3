import Panel from "./components/scaffold/Panel";
import ActionRow from "./components/scaffold/ActionRow";
import FormInput from "./components/scaffold/FormInput";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Panel title="Default Panel">
        <p className="text-gray-600">This is the default panel variant</p>
      </Panel>

      <Panel title="Soft Panel" variant="soft" className="mt-2">
        <p className="text-gray-600">This is the soft panel variant</p>
      </Panel>

      <Panel title="Actions Demo" className="mt-4">
        <ActionRow label="Profile">
          <button className="px-2 py-1 bg-blue-500 text-white rounded">Edit</button>
          <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded">View</button>
        </ActionRow>

        <ActionRow label="Settings">
          <button className="px-2 py-1 bg-green-500 text-white rounded">Enable</button>
        </ActionRow>
      </Panel>

      <Panel title="Form Input Demo" className="mt-4">
        <FormInput label="Username" placeholder="Enter your username" />
        <FormInput label="Email" placeholder="Enter your email" className="mt-3" />
      </Panel>

    </div>
  );
}