export default function ActionRow({ label, children, className = '', }) {
  return (
    <div className={`flex items-center justify-between py-2 ${className}`}>
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <div className="flex items-center gap-2">{children}</div>
    </div>
  );
}