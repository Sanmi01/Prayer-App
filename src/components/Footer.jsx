import React from 'react'
import HMGLogoWhite from '../assets/hmg-logo--white.png'

const Footer = () => {
  return (
    <>
    <footer className="p-4md:p-8 lg:p-10 bg-brand-blue-dark">
  <div className="mx-auto max-w-screen-xl text-center">
      <a href="/" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
         <img className='h-[2rem] w-[5rem]' src={HMGLogoWhite} alt='Logo' />
      </a>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 All Rights Reserved.</span>
  </div>
</footer>
    </>
  )
}

export default Footer