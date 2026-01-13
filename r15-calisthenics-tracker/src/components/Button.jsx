export default function Button({ children, className = '', onClick }) {
    return (
        <button
            className={`rounded-md px-3 py-1.5 ${className}
        bg-slate-100 text-slate-900
        `}
            onClick={onClick}>
            {children}
        </button>
    );
}