export default function Panel({ children, className = '', }) {
    return (
        <div className={`p-6 rounded-xl bg-white shadow-md border border-gray-200 ${className}`}>
            {children}
        </div>
    );
}