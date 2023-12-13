import React from 'react'
import HMGLogoWhite from '../assets/hmg-logo--white.png'

const Footer = () => {
  return (
    <>
    <footer class="p-4md:p-8 lg:p-10 bg-brand-blue-dark">
  <div class="mx-auto max-w-screen-xl text-center">
      <a href="/" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
         <img className='h-[2rem] w-[5rem]' src={HMGLogoWhite} alt='Logo' />
      </a>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 All Rights Reserved.</span>
  </div>
</footer>
    </>
  )
}

export default Footer