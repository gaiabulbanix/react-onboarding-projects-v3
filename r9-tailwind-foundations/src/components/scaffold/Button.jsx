export default function Button({
    children,
    className = "",
    onClick = () => { },
    variant = "primary"
}) {
    const baseStyles =
        "px-3 py-1.5 rounded-md font-medium transition-colors duration-200";

    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
        danger: "bg-red-500 text-white hover:bg-red-600",
    }
    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
            {children}
        </button>
    );
}