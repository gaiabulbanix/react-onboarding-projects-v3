export default function Panel({ children, className = '', }) {
    return (
        <div className={`p-6 bg-slate-700 rounded-xl border-2 border-teal-800 text-slate-100 ${className}`}>
            {children}
        </div>
    );
}