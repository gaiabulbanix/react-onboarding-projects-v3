import { useState } from 'react';
import Panel from './components/Panel';
import ActionRow from './components/ActionRow';
import FormInput from './components/FormInput';


export default function App2() {
    const [state, setState] = useState('');

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <Panel >
                <ActionRow
                    left={<FormInput
                        value={state}
                        placeholder="Enter input here."
                        onChange={(e) => setState(e.target.value)}
                    />}
                    right={
                        <button
                            className={`px-3 py-1.5 rounded-md
                        ${state === ''
                                    ? "bg-blue-300 cursor-not-allowed"
                                    : "bg-blue-600 text-white"
                                }
                        `}
                            disabled={state === ''}
                        >
                            Button
                        </button>
                    }
                >
                </ActionRow>
            </Panel>
        </div>

    );
}