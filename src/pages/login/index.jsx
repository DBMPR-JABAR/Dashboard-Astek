import { useState } from 'react'
import Image from 'next/image'

import heroDbmprImg from '../../assets/images/hero_dbmpr.png'
import logoAstekWhiteImg from '../../assets/logo/logo_astek_white.png'
import InputText from '../../components/form/input/InputText'
import InputPassword from '../../components/form/input/InputPassword'
import Button from '../../components/form/input/Button'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className="lg:flex">
      <div className="hidden lg:relative lg:block lg:h-full lg:min-h-screen lg:w-1/2">
        <div className=" after:absolute after:top-0 after:left-0 after:z-10 after:block after:h-full after:w-full after:bg-[#333365CC]">
          <Image
            src={heroDbmprImg}
            alt="Hero DBMPR Jabar"
            className="absolute top-0 left-0 block h-full w-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center text-white">
          <Image src={logoAstekWhiteImg} alt="Logo Astek" className="w-96" />
        </div>
      </div>
      <div className="relative min-h-screen lg:w-1/2">
        <div className="absolute top-0 left-0 h-full min-h-screen w-full bg-red-500 after:absolute after:top-0 after:left-0 after:z-10 after:block after:h-full after:w-full after:bg-[#333365CC] lg:hidden">
          <Image
            src={heroDbmprImg}
            alt="Hero DBMPR Jabar"
            className="absolute top-0 left-0 block h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 h-full min-h-screen pt-24 pb-32 lg:flex lg:items-center lg:justify-center">
          <Image
            src={logoAstekWhiteImg}
            alt="Logo Astek"
            className="mx-auto mb-10 w-36 lg:hidden"
          />
          <div className="mx-4 rounded-2xl border border-gray-400 bg-white p-8 md:mx-8 lg:mx-12 lg:w-full">
            <div>
              <p className="text-center font-intro text-2xl">Selamat Datang</p>
              <p className="text-center font-intro">
                Silahkan masuk ke akun ASTEK!
              </p>
            </div>
            <div className="mt-10">
              <label className="mb-3 block font-bold" htmlFor="username">
                Username
              </label>
              <InputText
                id="username"
                placeHolderText="E-Mail / NIP / NIK"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="mt-6">
              <label className="mb-3 block font-bold" htmlFor="password">
                Password
              </label>
              <InputPassword
                id="password"
                placeHolderText="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="mt-10">
              <Button text="Masuk" onClick={null} />
            </div>
          </div>
        </div>
        <span className="absolute bottom-4 z-10 block w-full px-12 text-center text-sm text-white lg:bottom-8 lg:text-gray-900">
          Dinas Bina Marga dan Penataan Ruang Provinsi Jawa Barat
        </span>
      </div>
    </div>
  )
}
