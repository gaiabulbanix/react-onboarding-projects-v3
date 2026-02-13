export default function Button({ children, className = '', ...buttonProps }) {
    return (
        <button
            className={`px-3 py-1.5 rounded-md bg-slate-100 text-slate-900 hover:bg-slate-200 ${className}`}
            {...buttonProps}
        >
            {children}
        </button>
    );
}