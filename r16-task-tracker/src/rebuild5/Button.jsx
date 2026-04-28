export default function Button({ className = '', children, ...props }) {
    return (
        <button className={`px-3 py-1.5 rounded-md border bg-slate-900 border-teal-800 ${className}`} {...props}>
            {children}
        </button>
    );
};