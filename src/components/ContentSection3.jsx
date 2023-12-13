import React from 'react'
import { Link } from 'react-router-dom'

const ContentSection3 = () => {
  return (
    <>
<section className="bg-center bg-cover bg-no-repeat bg-[url('https://godlistens.com/images/backgrounds/god-listens-mobile-screenshots-background.png')] bg-gray-500 bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl py-24">
        <div className='bg-white max-w-xl p-8 md:p-20 lg:mx-0 rounded-2xl'>
        <h1 className="font-serif mb-4 text-4xl font-extrabold tracking-tight leading-none text-primary-800">Customization</h1>
        <p className="mb-8 text-lg font-normal lg:text-xl">Personalize with your logo and choose colors that resonate with your ministry's identity.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
        <Link to="/register" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 uppercase">
                Register for free
            </Link>
            <Link to="/" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 uppercase">
                Schedule a tour
            </Link> 
        </div>
        </div>
    </div>
</section>

    </>
  )
}

export default ContentSection3