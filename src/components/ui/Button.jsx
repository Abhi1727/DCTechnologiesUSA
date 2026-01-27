export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center gap-2'
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-transparent text-primary-600 border-2 border-primary-600 hover:bg-primary-50',
    outline: 'bg-transparent text-gray-700 border-2 border-gray-300 hover:bg-gray-50',
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
