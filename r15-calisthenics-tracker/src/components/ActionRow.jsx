export default function ActionRow({ left, right, className = '', }) {
    return (
        <div className={`flex justify-between py-2 ${className}`}>
            <div>{left}</div>
            <div>{right}</div>
        </div>
    );
}