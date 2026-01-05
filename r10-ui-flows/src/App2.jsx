// Note:
// Although Account Status and Billing Status cards share structure,
// the are intentionally kept separate for now.
// Their behaviors, semantics, and state meanings differ,
// and abstraction is not yet justified.

import { useState } from 'react';
import Panel from './components/Panel';
import ActionRow from './components/ActionRow';
import StatusBadge from './components/StatusBadge';
import ProfileSettings from './features/profile/ProfileSettings';

export default function App2() {
    const [status, setStatus] = useState('active');
    const [billingStatus, setBillingStatus] = useState('overdue');
    const [securityStatus, setSecurityStatus] = useState('at_risk');
    const [profileLastSavedAt, setProfileLastSavedAt] = useState(null);

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
                />

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
                    }
                />

                {/* Security Status Card */}
                {/* - Represents account security health */}
                {/* - Primary state shows secure or at risk */}
                {/* - Secondary action resolves security issue */}
                <h2 className="mt-4">
                    Security Status -
                    <span
                        className={
                            `${securityStatus === 'secure'
                                ? 'text-green-900'
                                : 'text-red-700'
                            }`}
                    >
                        {securityStatus === 'secure' && ' Secure'}
                        {securityStatus === 'at_risk' && ' At Risk'}
                    </span>
                </h2>
                <p
                    className="italic text-gray-300"
                >
                    {securityStatus === 'secure'
                        ? 'Your account security is in good standing.'
                        : 'Security issue detected. Action required.'}
                </p>
                <ActionRow
                    left={
                        <button
                            className={`px-3 py-1.5 rounded-md
                                ${securityStatus === 'secure'
                                    ? 'bg-gray-200 text-gray-700'
                                    : 'bg-gray-900 text-white'
                                }
                            `}
                            onClick={() => {
                                if (securityStatus === 'at_risk') {
                                    setSecurityStatus('secure')
                                };
                            }}
                            disabled={securityStatus === 'secure'}
                        >
                            Fix Security Issue
                        </button>
                    }
                    right={
                        <StatusBadge
                            label={securityStatus === 'secure' ? 'Secure' : 'At Risk'}
                            variant={securityStatus === 'secure' ? 'success' : 'danger'}
                        />
                    }
                />
            </Panel >

            <ProfileSettings
                className="mt-6"
                onSave={() => {
                    setProfileLastSavedAt(Date.now());
                }}
            />
            <Panel>
                <p>
                    {`Profile Settings Last Saved - 
                    ${profileLastSavedAt
                            ? new Date(profileLastSavedAt).toLocaleString()
                            : ''}
                    `}
                </p>
            </Panel>
        </div >
    );
}