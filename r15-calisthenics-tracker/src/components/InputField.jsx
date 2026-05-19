export default function InputField({ inputClassName = '', wrapperClassName = '', label, htmlFor, ...inputProps, }) {
    return (
        <div className={`flex flex-col gap-2 ${wrapperClassName}`}>
            {label && <label htmlFor={htmlFor}>{label}</label>}
            <input
                className={inputClassName}
                {...inputProps}
            />
        </div>
    );
}