import { useState } from 'react'

import Image from 'next/image'

import visibleFillBlackSvg from '../../../assets/icon/visible_fill_black.svg'
import invisibleFillBlackSvg from '../../../assets/icon/invisible_fill_black.svg'

export default function InputPassword({
  id,
  placeHolderText,
  value,
  onChange,
}) {
  const [isVisible, setIsVisible] = useState(false)

  const handleVisibility = () => setIsVisible((visible) => !visible)

  return (
    <div className="relative">
      <input
        id={id}
        className="w-full rounded-lg border border-gray-400 bg-gray-50 p-3 focus:border-2 focus:border-primary-purple"
        placeholder={placeHolderText}
        type={isVisible ? 'text' : 'password'}
        value={value}
        onChange={onChange}
      />
      <Image
        src={isVisible ? invisibleFillBlackSvg : visibleFillBlackSvg}
        className="absolute top-1/2 right-3 w-6 -translate-y-1/2"
        alt="Icon Visible"
        onClick={handleVisibility}
      />
    </div>
  )
}
