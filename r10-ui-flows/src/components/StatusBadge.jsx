export default function StatusBadge({ label, variant = 'neutral' }) {
    const variantStyles = {
        neutral: 'bg-gray-300 text-gray-800',
        success: 'bg-green-500 text-white',
        danger: 'bg-red-500 text-white',
    };

    return (
        <span
            className={`px-2 py-0.5 rounded-md text-sm font-medium ${variantStyles[variant] ?? variantStyles.neutral}`}
        >
            {label}
        </span>
    );
}