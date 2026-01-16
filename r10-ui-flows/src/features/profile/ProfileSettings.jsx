import { useState, useEffect } from "react";
import Panel from "../../components/Panel";
import ActionRow from "../../components/ActionRow";
import FormInput from "../../components/FormInput";

export default function ProfileSettings({ className, onSave, savedDisplayName, savedEmailNotifications }) {
    const [displayName, setDisplayName] = useState(savedDisplayName);
    const [emailNotifications, setEmailNotifications] = useState(savedEmailNotifications);

    const isDirty =
        displayName !== savedDisplayName ||
        emailNotifications !== savedEmailNotifications;

    useEffect(() => {
        setDisplayName(savedDisplayName);
        setEmailNotifications(savedEmailNotifications);
    }, [savedDisplayName, savedEmailNotifications]);

    return (
        <Panel className={className}>
            <h2>Profile Settings</h2>
            <FormInput
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                label="Display Name"
                placeholder="Enter your display name"
                className="mt-4"
            />
            <label className="flex items-center gap-2 mt-4">
                <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={(e) => setEmailNotifications(e.target.checked)}
                />
                Email Notifications
            </label>

            <ActionRow
                className="mt-4"
                left={
                    <button
                        className="rounded-md px-3 py-1.5 bg-gray-200 text-gray-700"
                        onClick={() => {
                            setDisplayName(savedDisplayName);
                            setEmailNotifications(savedEmailNotifications);
                        }}
                        disabled={!isDirty}
                    >
                        Cancel
                    </button>}
                right={
                    <button
                        className="rounded-md px-3 py-1.5 bg-gray-200 text-gray-700"
                        onClick={() => {
                            onSave?.({
                                displayName,
                                emailNotifications,
                            });
                        }}
                        disabled={!isDirty}
                    >
                        Save
                    </button>}
            />

            <p className="italic text-gray-300">
                {`${isDirty ? 'You have unsaved changes.' : ''}`}
            </p>
        </Panel>
    );
}