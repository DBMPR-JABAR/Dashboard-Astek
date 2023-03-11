import { useState } from 'react'
import { animated, useTransition } from '@react-spring/web'
import Image from 'next/image'
import HamburgerSidebar from './hamburger/HamburgerSidebar'
import logoAstekWhitePng from '../../../assets/logo/logo_astek_white.png'
import iconCrossFillWhiteSvg from '../../../assets/icon/cross_fill_white.svg'
import dashboardFillYellowSvg from '../../../assets/icon/dashboard_fill_yellow.svg'

export default function SlideableNavSidebar() {
  const [isShown, setIsShown] = useState(false)

  const sideNavTransition = useTransition(isShown, {
    from: { opacity: 0, x: '-100%' },
    enter: { opacity: 0.5, x: '0%' },
    leave: { opacity: 0, x: '-100%' },
  })

  const handleOnClick = () => {
    setIsShown((value) => !value)
  }

  return (
    <div>
      <HamburgerSidebar isShown={isShown} onClick={handleOnClick} />
      {sideNavTransition((style, isOpen) => {
        return (
          isOpen && (
            <>
              <animated.div
                className="fixed top-0 right-0 left-0 bottom-0 z-[9998] h-screen w-screen bg-white"
                onClick={handleOnClick}
                style={{ opacity: style.opacity }}
              />
              <animated.div
                className="fixed top-0 left-0 z-[9999] h-screen w-[70%] overflow-y-auto rounded-tr-lg rounded-br-lg bg-primary-purple"
                style={{ x: style.x }}
              >
                <div className="mt-1 mb-6 flex items-center justify-between py-4 px-6">
                  <Image
                    className="w-32 md:w-36"
                    src={logoAstekWhitePng}
                    alt="Logo Temanjabar"
                  />
                  <Image
                    src={iconCrossFillWhiteSvg}
                    className="w-3"
                    alt="Tombol tutup sidebar"
                    onClick={handleOnClick}
                  />
                </div>
                <div className="text-sm">
                  <span className="block p-4 font-intro text-white">
                    Menu Utama
                  </span>
                  <div className="relative flex items-center p-4 after:absolute after:top-1/2 after:right-0 after:h-3/5 after:w-2 after:-translate-y-1/2 after:rounded-tl after:rounded-bl after:bg-yellow-400">
                    <Image
                      src={dashboardFillYellowSvg}
                      className="w-5"
                      alt="Tombol tutup sidebar"
                      onClick={handleOnClick}
                    />
                    <span className="ml-3 block font-intro text-yellow-400">
                      Dashboard
                    </span>
                  </div>
                </div>
              </animated.div>
            </>
          )
        )
      })}
    </div>
  )
}
