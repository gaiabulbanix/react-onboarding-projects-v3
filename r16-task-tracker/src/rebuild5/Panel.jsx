export default function Panel({ children, className = '', }) {
    return (
        <div className={`p-6 border-2 rounded-xl border-teal-800 bg-slate-700 text-slate-100 ${className}`}>
            {children}
        </div>
    );
};