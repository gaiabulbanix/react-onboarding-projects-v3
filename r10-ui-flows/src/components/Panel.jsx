export default function Panel({ children, className = '', }) {
    const baseStyles = 'p-6 rounded-xl shadow-md border transition-colors duration-200 bg-white border-gray-200';

    return (
        <div className={`${baseStyles} ${className}`}>
            {children}
        </div>
    );
}