import { useState } from 'react';
import Panel from './components/Panel';
import ActionRow from './components/ActionRow';
import FormInput from './components/FormInput';


export default function App2() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [notifications, setNotifications] = useState(false);
    const [status, setStatus] = useState('active');

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <Panel >
                {/* <ActionRow
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
                            className={`px-3 py-1.5 rounded-md
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
                </ActionRow> */}

                {/* Account Status Card: */}
                {/* - Shows current account status (active or paused) */}
                {/* - Primary action pauses the account */}
                {/* - Secondary action button restores the account*/}

                <h2>Account Status</h2>
                <p className="mt-3">
                    {status === 'active' && 'Active'}
                    {status === 'paused' && 'Paused'}
                </p>

                <ActionRow
                    className="mt-4"
                    left={
                        <button
                            className="px-3 py-1.5 rounded-md bg-gray-200 text-gray-700"
                            onClick={() => {
                                if (status === 'paused') {
                                    setStatus('active');
                                }
                            }}
                        >
                            View Details
                        </button>
                    }
                    right={
                        <button
                            className={`
                                px-3 py-1.5 rounded-md
                                ${status === 'paused'
                                    ? 'bg-blue-300 cursor-not-allowed'
                                    : 'bg-blue-600 text-white'
                                }
                                `}
                            onClick={() => setStatus(prev => (prev === 'active' ? 'paused' : 'active'))}
                            disabled={status === 'paused' ? true : false}
                        >
                            {status === 'active' && 'Pause'}
                            {status === 'paused' && 'Paused'}
                        </button>
                    }
                >
                </ActionRow>

                {/* Billing Status Account: */}
                {/* - Represents billing state */}
                {/* - Primary action is will show danger when overdue */}
                {/* - Secondary action resolves the action back to primary */}
            </Panel >
        </div >
    );
}