import React from 'react'
import PrayerHands from '../assets/prayer-hands.jpeg'

const CTA = () => {
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 lg:grid lg:grid-cols-2 sm:py-16 lg:px-6">
        <div className="my-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">Not Just A Tool.</h2>
            <p className="mb-6 text-lg">The God Listens Prayer App isn't just a tool; it's your gateway to unparalleled digital engagement. Dive into the digital age and witness the transformative power of active prayer engagement.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
        <a href="/" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 uppercase">
                Register for free
            </a>
            <a href="/" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 uppercase">
                Schedule a tour
            </a> 
        </div>
        </div>
        <img className="w-full dark:hidden" src={PrayerHands} alt="Prayer Hands" />
    </div>
</section>
    </>
  )
}

export default CTA