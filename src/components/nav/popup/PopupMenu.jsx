import Image from 'next/image'
import { useState } from 'react'

export default function PopupMenu({
  icon,
  activeIcon,
  text,
  disableBorder,
  className,
}) {
  const [isMenuHovering, setMenuHovering] = useState(false)

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        e.stopPropagation()
      }}
      className={`flex px-4 py-3 hover:bg-yellow-400 hover:text-white ${className} ${
        !disableBorder && 'border-b border-gray-400'
      }`}
      onMouseEnter={() => setMenuHovering(true)}
      onMouseLeave={() => setMenuHovering(false)}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      <Image
        src={isMenuHovering ? activeIcon || icon : icon}
        alt="Menu Icon"
        className="block h-5 w-8 justify-self-end rounded-full"
      />
      <span className="ml-3">{text}</span>
    </div>
  )
}
