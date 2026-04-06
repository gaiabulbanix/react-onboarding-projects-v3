export default function Button({ className = '', children, ...props }) {
    const buttonStyle = {
        primary: '',
        secondary: '',
        disabled: '',
        danger: '',
    };

    const buttonSize = {
        sm: '',
        md: 'px-3, py-1.5',
        lg: 'px-2, py-1',
    };

    return (
        <>
            <button className={`px-3 py-1.5 rounded-md border bg-slate-900 border-teal-800 ${className}`} {...props}>
                {children}
            </button>
        </>
    );
};