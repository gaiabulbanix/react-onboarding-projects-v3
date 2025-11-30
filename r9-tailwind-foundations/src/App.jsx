import Panel from "./components/scaffold/Panel";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Panel title="Default Panel">
        <p className="text-gray-600">This is the default panel variant</p>
      </Panel>

      <Panel title="Soft Panel" variant="soft" className="mt-2">
        <p className="text-gray-600">This is the soft panel variant</p>
      </Panel>
    </div>
  );
}