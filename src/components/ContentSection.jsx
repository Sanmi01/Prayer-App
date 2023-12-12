import React from 'react'
import GodListensFeatured from '../assets/god-listens-featured-screenshot.png'

const ContentSection = () => {
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="text-gray-500 sm:text-lg dark:text-gray-400 flex flex-col justify-center items-center text-center gap-8 ">
          <h2 className="font-serif mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-white">Prayer Platform, A Widget, A Spiritual Journal – Your Ultimate Engagement Tool.</h2>
          <p className="mb-4 text-xl font-medium">Step into the future of digital ministry. Engage, connect, and support your community like never before.</p>
          <img src={GodListensFeatured} className='w-full'  alt="mockup" />
      </div>
  </div>
</section>
    </>
  )
}

export default ContentSection