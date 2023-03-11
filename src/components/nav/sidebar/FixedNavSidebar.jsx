import Image from 'next/image'
import { useRef, useState } from 'react'
import logoAstekWhitePng from '../../../assets/logo/logo_astek_white.png'
import dashboardFillYellowSvg from '../../../assets/icon/dashboard_fill_yellow.svg'
import defaultProfilePictureJpg from '../../../assets/images/default_photo_profile.jpg'
import settingFillWhiteSvg from '../../../assets/icon/setting_fill_white.svg'
import profileFillGraySvg from '../../../assets/icon/profile_fill_gray.svg'
import profileFillWhiteSvg from '../../../assets/icon/profile_fill_white.svg'
import loginFillWhiteSvg from '../../../assets/icon/login_fill_white.svg'
import loginFillGraySvg from '../../../assets/icon/login_fill_gray.svg'

import Popup from '../popup/Popup'
import PopupMenu from '../popup/PopupMenu'
import useOutsideClick from '../../../hooks/useOutsideClick'

export default function FixedNavSidebar({ setNavWidth }) {
  const [isProfileMenuVisible, setProfileMenuVisibility] = useState(false)

  const profileMenuRef = useRef(null)
  useOutsideClick(profileMenuRef, () => setProfileMenuVisibility(false))

  const handleProfileMenuOnClick = () => {
    setProfileMenuVisibility((value) => !value)
  }

  return (
    <div
      className="fixed top-0 left-0 z-[9999] flex h-screen min-w-[300px] flex-col justify-between bg-primary-purple font-intro text-white"
      ref={(el) => {
        setNavWidth(el?.clientWidth)
      }}
    >
      <div>
        <div className="flex items-center justify-between py-4 px-6">
          <Image
            className="mx-auto mt-2 w-52"
            src={logoAstekWhitePng}
            alt="Logo Astek"
          />
        </div>
        <div className="mt-7 text-sm">
          <span className="block p-4">Menu Utama</span>
          <div className="relative flex items-center p-4 after:absolute after:top-1/2 after:right-0 after:h-3/5 after:w-2 after:-translate-y-1/2 after:rounded-tl after:rounded-bl after:bg-yellow-400">
            <Image
              src={dashboardFillYellowSvg}
              className="w-5"
              alt="Icon Dashboard"
            />
            <span className="ml-3 block font-intro text-yellow-400">
              Dashboard
            </span>
          </div>
        </div>
      </div>
      <div className="mx-6 border-t border-gray-400 py-4">
        <div
          role="button"
          tabIndex={0}
          className="flex items-center hover:cursor-pointer"
          onClick={handleProfileMenuOnClick}
          onKeyDown={handleProfileMenuOnClick}
          ref={profileMenuRef}
        >
          <div className="inline-block rounded-full border-[2px] border-white p-[2.5px]">
            <Image
              src={defaultProfilePictureJpg}
              alt="Profile Picture"
              className="w-10 rounded-full"
            />
          </div>
          <div className="ml-3 grow">
            <span className="block font-bold">Dandi S., ST</span>
            <span className="block text-xs">dandi@gmail.com</span>
          </div>
          <Image
            src={settingFillWhiteSvg}
            alt="Icon Setting"
            className="block w-5 justify-self-end rounded-full"
          />
          {isProfileMenuVisible && (
            <Popup className="absolute -right-3 bottom-4 translate-x-full">
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
          )}
        </div>
      </div>
    </div>
  )
}
