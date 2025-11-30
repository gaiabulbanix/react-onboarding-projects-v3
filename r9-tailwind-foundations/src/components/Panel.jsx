export default function Panel({ children }) {
    return (
        <div className="p-4 rounded-xl bg-white shadow-md border border-gray-200">
            {children}
        </div>
    );
}