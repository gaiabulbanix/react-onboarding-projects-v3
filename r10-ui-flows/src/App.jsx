import Panel from "./components/Panel";
import ActionRow from "./components/ActionRow";
import FormInput from "./components/FormInput";
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Panel>
        <h1>R10 UI Flows</h1>
        {/* state test */}
        <p>{name}</p>
        <FormInput
          label="Name"
          placeholder="Enter your name here."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <ActionRow
          left={<p>Primary</p>}
          right={
            <button
              type="button"
              disabled={name === ''}
              className={`px-2 py-1 rounded-md font-medium
                ${name === ''
                  ? 'bg-blue-300 cursor-not-allowed'
                  : 'bg-blue-600 text-white'
                }`}
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
    </div >
  );
}