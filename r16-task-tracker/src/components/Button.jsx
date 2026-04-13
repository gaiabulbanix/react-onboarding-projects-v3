export default function Button({ className = '', children, buttonSize = 'sm', buttonStyle = 'primary', disabled, ...props }) {
    const buttonStyles = {
        primary: 'bg-slate-100 text-slate-900',
        secondary: 'bg-slate-900 text-slate-100',
        danger: 'bg-red-500 text-slate-900 font-bold',
    };

    const buttonSizes = {
        xs: 'px-1 py-0.5',
        sm: 'px-2 py-1',
        md: 'px-3 py-1.5',
    };

    return (
        <>
            <button className={`
            rounded-md border-2 border-teal-800
            ${className}
            ${buttonStyles[buttonStyle]}
            ${buttonSizes[buttonSize]}
            ${disabled
                    ? "opacity-50 cursor-not-allowed"
                    : buttonStyle === "primary"
                        ? "hover:bg-slate-300"
                        : buttonStyle === "secondary"
                            ? "hover:bg-slate-800"
                            : buttonStyle === "danger"
                                ? "hover:bg-red-600" : ""}
            `}
                disabled={disabled}
                {...props}>
                {children}
            </button>
        </>
    );
};