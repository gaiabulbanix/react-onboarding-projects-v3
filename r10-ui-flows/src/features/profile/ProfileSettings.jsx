import React from "react";
import Panel from "../../components/Panel";
import ActionRow from "../../components/ActionRow";
import

    < Panel >
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
                    setSavedDisplayName(displayName);
                    setSavedEmailNotifications(emailNotifications);
                }}
                disabled={!isDirty}
            >
                Save
            </button>}
    />
</Panel >

