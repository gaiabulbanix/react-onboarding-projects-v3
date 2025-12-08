export default function Button({
    children,
    className = "",
    onClick = () => { },
    variant = "primary"
}) {
    const baseStyles =
        ""

    return (
        <button
            onClick={onClick}
            className={`px-3 py-1.5 rounded-md font-medium transition-colors duration-200 ${className}`}
        >
            {children}
        </button>
    );
}