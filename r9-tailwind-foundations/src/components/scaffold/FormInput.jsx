import { useState } from "react";

export default function formInput({ label, placeholder = "", className = "" }) {
    const [value, setValue] = useState("");

    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {label && (
                <label>
                    {label}
                </label>
            )}

            <input
                value={value}
                onchange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
    );
}