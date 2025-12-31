// Note:
// Although Account Status and Billing Status cards share structure,
// the are intentionally kept separate for now.
// Their behaviors, semantics, and state meanings differ,
// and abstraction is not yet justified.

import { useState } from 'react';
import Panel from './components/Panel';
import ActionRow from './components/ActionRow';
import FormInput from './components/FormInput';


export default function App2() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [notifications, setNotifications] = useState(false);
    const [status, setStatus] = useState('active');
    const [billingStatus, setBillingStatus] = useState('overdue');

    return (
        <div className="min-h-screen bg-gray-900 p-6">
            <Panel >
                {/* Account Status Card: */}
                {/* - Shows current account status (active or paused) */}
                {/* - Primary action pauses the account */}
                {/* - Secondary action button restores the account*/}
                <h2>Account Status -
                    <span
                        className={`
                       ${status === 'active'
                                ? 'text-green-900'
                                : 'text-red-700'
                            }
                            `}
                    >
                        {`${status === 'active' ? ' Active' : ` Paused`}`}
                    </span>
                </h2>
                <p className="italic text-gray-300">
                    {status === 'active' ? 'Your account is currently active' : `Your account is currently paused`}
                </p>

                <ActionRow
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
                {/* - Primary action constrained when overdue */}
                {/* - Secondary action resolves billing issue */}
                <h2 className="mt-4">Billing Status</h2>
                <ActionRow
                    left={
                        <button
                            className={`px-3 py-1.5 rounded-md bg-gray-200 text-gray-700`}
                            onClick={() => {
                                if (billingStatus === 'overdue') {
                                    setBillingStatus('paid')
                                };
                            }}
                            disabled={billingStatus === 'paid'}
                        >
                            Resolve Billing
                        </button>

                    }
                    right={
                        <button
                            className={`px-3 py-1.5 rounded-md text-white
                                ${billingStatus === 'overdue'
                                    ? 'bg-red-500 cursor-not-allowed'
                                    : 'bg-blue-600 cursor-not-allowed'
                                }`}
                        >
                            {billingStatus === 'paid' && 'Paid'}
                            {billingStatus === 'overdue' && 'Overdue'}
                        </button>
                    }>
                </ActionRow>
            </Panel >
        </div >
    );
}