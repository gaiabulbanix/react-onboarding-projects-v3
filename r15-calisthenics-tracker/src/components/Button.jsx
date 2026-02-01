export default function Button({ children, className = '', buttonStyle = 'primary', buttonSize = 'md', ...buttonProps }) {
    const buttonStyles = {
        primary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
        secondary: 'bg-slate-300 text-slate-900 hover:bg-slate-400',
        disabled: 'bg-slate-400 text-slate-900',
        danger: 'bg-red-500 text-slate-900 hover:bg-red-600',
        success: 'bg-green-500 text-slate-900 hover:bg-green-600',
    }

    const buttonSizes = {
        lg: '',
        md: 'px-3 py-1.5',
        sm: 'px-2 py-1',
    }

    return (
        <button
            className={`rounded-md font-medium transition-colors duration-200
                ${className}
                ${buttonStyles[buttonStyle]}
                ${buttonSizes[buttonSize]}`}
            {...buttonProps}>
            {children}
        </button>
    );
}