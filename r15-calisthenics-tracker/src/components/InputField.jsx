export default function InputField({ inputClassName = '', wrapperClassName = '', label, htmlFor, ...inputProps }) {
    return (
        <div className={`flex items-center gap-2 ${wrapperClassName}`}>
            {label && <label htmlFor={htmlFor} className="w-28">{label}</label>}
            <input
                className={inputClassName}
                {...inputProps}
            />
        </div>
    );
}