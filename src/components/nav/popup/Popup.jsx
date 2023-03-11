export default function Popup({ children, className }) {
  return (
    <div
      className={`overflow-hidden rounded-md border border-gray-400 bg-white text-sm text-gray-900 ${className}`}
    >
      {children}
    </div>
  )
}
