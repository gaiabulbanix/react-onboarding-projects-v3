export default function Button({ className = '', children, buttonSize = 'sm', buttonStyle = 'primary', disabled = false, ...props }) {
    const buttonStyles = {
        primary: 'bg-slate-100 text-slate-900 hover:bg-slate-300',
        secondary: 'bg-slate-900 text-slate-100 hover:bg-slate-700',
        disabled: 'bg-slate-400 text-slate-900 cursor-not-allowed opacity-50',
        danger: 'bg-red-500 text-slate-900 font-bold hover:bg-red-700',
        success: 'bg-green-500 text-slate-900 hover:bg-green-600',
    };

    const resolvedStyle = disabled ? 'disabled' : buttonStyle;

    const buttonSizes = {
        xs: 'px-1 py-0.5',
        sm: 'px-2 py-1',
        md: 'px-3 py-1.5',
    };

    return (
        <>
            <button className={`
            rounded-md font-medium transition-colors duration-200
            ${className}
            ${buttonStyles[resolvedStyle]}
            ${buttonSizes[buttonSize]}`}
                {...props}>
                {children}
            </button>
        </>
    );
};