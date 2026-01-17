export default function FormInput({ inputClassName = '', wrapperClassName = '', label, type, id, value, onChange, placeholder, htmlFor, children }) {
    return (
        <div className={`flex flex-col gap-2 ${wrapperClassName}`}>
            {label && <label htmlFor={htmlFor}>{label}</label>}
            {children}
            <input
                className={`${inputClassName}`}
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}