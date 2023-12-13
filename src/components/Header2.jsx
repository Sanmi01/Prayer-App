import React from 'react'
import { Link } from 'react-router-dom'
import GodListensLogoBlue from '../assets/GodListensLogoBlue.webp'

const Header2 = () => {
  return (
    <header className='bg-brand-gray flex justify-center pb-2 pt-6'>
        <Link to="/">
            <img src={GodListensLogoBlue} alt='Logo' />
        </Link>
    </header>
  )
}

export default Header2