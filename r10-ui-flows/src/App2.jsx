import { useState } from 'react';
import Panel from './components/Panel';
import ActionRow from './components/ActionRow';
import FormInput from './components/FormInput';


export default function App2() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [notifications, setNotifications] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <Panel >
                <ActionRow
                    left={<FormInput
                        value={name}
                        placeholder="Enter name here."
                        onChange={(e) => setName(e.target.value)}
                    />}
                    right={
                        <button
                            className={`px-3 py-1.5 rounded-md
                        ${name === '' || email === ''
                                    ? "bg-blue-300 cursor-not-allowed"
                                    : "bg-blue-600 text-white"
                                }
                        `}
                            disabled={name === '' || email === ''}
                        >
                            Submit
                        </button>
                    }
                >
                </ActionRow>
                <ActionRow
                    left={<FormInput
                        value={email}
                        placeholder="Enter email here."
                        onChange={(e) => setEmail(e.target.value)}
                    />}>
                </ActionRow>
                <ActionRow
                    left={<p>Enable Notifications</p>}
                    right={
                        <button
                            className={`py-3 px-1.5 rounded-md
                                ${notifications
                                    ? "bg-blue-600 text-white"
                                    : "bg-blue-300"
                                }
                                `}
                            onClick={() => setNotifications(prev => !prev)}
                        >
                            {notifications
                                ? "Enabled"
                                : "Disabled"
                            }
                        </button>
                    }

                >
                </ActionRow>
            </Panel>
        </div>

    );
}