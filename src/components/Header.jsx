import React from 'react'
import GodListensLogo from "../assets/god-listens-logomark.svg"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className=''>
    <nav className="bg-brand-gray-light border-gray-200 px-4 lg:px-6 py-3.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
                <img src={GodListensLogo} className="mr-3 h-9 sm:h-12" alt="God Listens Logo" />
            </Link>
            <div className="flex items-center lg:order-2">
                <Link to="/register" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 lg:px-6 py-3 lg:py-3.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">REGISTER</Link>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header