import Panel from "./components/Panel";
import ActionRow from "./components/ActionRow";
import FormInput from "./components/FormInput";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Panel>
        <h1>R10 UI Flows</h1>
        <ActionRow
          left={<p>Primary</p>}
          right={
            <button
              type="button"
              className="px-2 py-1 bg-blue-600 text-white rounded-md font-medium"
            >
              Primary
            </button>}
        />
        <ActionRow
          left={<p>Secondary</p>}
          right={
            <button
              type="button"
              className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md font-medium"
            >
              Secondary
            </button>}
        />
      </Panel>
    </div>
  );
}