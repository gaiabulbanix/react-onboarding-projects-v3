import { useState } from 'react';

export default function App2() {
    const [input, setInput] = useState('');

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="button"
                disabled={
                    input === ''
                        ? true
                        : false
                }
            >
                Button
            </button>
        </div>
    );
}