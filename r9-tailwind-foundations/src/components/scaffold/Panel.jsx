export default function Panel({ title, children, variant = 'default', className = '' }) {
  const baseStyles = 'p-6 rounded-xl shadow-md border transition-colors duration-200';

  const variantStyles =
    variant === 'soft' ? 'bg-gray-50 border-gray-300 shadow-sm' : 'bg-white border-gray-200';

  return (
    <div className={`${baseStyles} ${variantStyles} ${className}`}>
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      {children}
    </div>
  );
}
