import { useEffect, useState } from 'react'
import Image from 'next/image'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import defaultProfilePictureJpg from '../../assets/images/default_photo_profile.jpg'
import chevronDownFillPurpleSvg from '../../assets/icon/chevron_down_fill_purple.svg'

import NavSidebar from './sidebar/NavSidebar'
import Popup from './popup/Popup'
import PopupMenu from './popup/PopupMenu'
import profileFillGraySvg from '../../assets/icon/profile_fill_gray.svg'
import profileFillWhiteSvg from '../../assets/icon/profile_fill_white.svg'
import loginFillGraySvg from '../../assets/icon/login_fill_gray.svg'
import loginFillWhiteSvg from '../../assets/icon/login_fill_white.svg'

export default function Nav({ setNavWidth }) {
  const [isOnTop, setIsOnTop] = useState(true)
  const { width } = useWindowDimensions()

  useEffect(() => {
    function onWindowScrolled() {
      setIsOnTop(!(window.scrollY > 0))
    }

    window.addEventListener('scroll', onWindowScrolled)

    return () => {
      window.removeEventListener('scroll', onWindowScrolled)
    }
  }, [])

  return (
    <nav
      className={`sticky top-0 z-[999] border-gray-300 transition ${
        isOnTop ? 'border-b-0 bg-transparent' : 'border-b bg-white'
      }`}
    >
      <div className="mx-5 md:mx-10">
        <div className="flex items-center justify-between py-4 lg:justify-end">
          <NavSidebar setNavWidth={setNavWidth} />
          <div className="relative flex lg:hidden">
            <div className="rounded-full border-[2px] border-primary-purple p-[2.5px]">
              <Image
                src={defaultProfilePictureJpg}
                alt="Profile Picture"
                className="w-7 rounded-full"
              />
            </div>
            <Image
              src={chevronDownFillPurpleSvg}
              alt="Profile Picture"
              className="ml-3 w-4 rounded-full"
            />
            <Popup className="absolute right-0 -bottom-4 w-max translate-y-full">
              <PopupMenu
                icon={profileFillGraySvg}
                activeIcon={profileFillWhiteSvg}
                text="Profile"
              />
              <PopupMenu
                icon={loginFillGraySvg}
                activeIcon={loginFillWhiteSvg}
                text="Logout"
                disableBorder
              />
            </Popup>
          </div>
        </div>
      </div>
    </nav>
  )
}
