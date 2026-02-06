export default function Panel({ className = '', children, }) {
    return (
        <div className={`p-6 border-4 border-teal-800 bg-slate-700 rounded-xl ${className}`}>
            {children}
        </div>
    );
}