export default function Panel({ children, className = '' }) {
    return (
        <div className={`p-6 bg-slate-700 rounded-xl border-4 border-teal-800 ${className}`}>
            {children}
        </div>
    );
}