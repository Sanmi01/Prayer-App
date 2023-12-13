import React from 'react'
import GodListensDesktop from '../assets/god-listens-desktop-app-screenshot--rounded.png'
import { Link } from 'react-router-dom'

const ContentSection5 = () => {
  return (
    <>
    <section className="bg-brand-blue-dark dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="text-gray-500 sm:text-lg dark:text-gray-400 flex flex-col justify-center items-center text-center gap-8 ">
          <h2 className="font-serif mb-4 text-4xl tracking-tight font-bold text-white">Take It For A Spin</h2>
          <p className="mb-4 text-xl font-medium text-white md:px-16 lg:px-20">Seamlessly integrate the Prayer Platform into your website or use your branded God Listens url and watch as it becomes the epicenter of engagement and spiritual conversations.</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
            <Link to="/" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 bg-white uppercase">
                Open in a new tab
            </Link> 
        </div>
          
          <img src={GodListensDesktop} className='w-4/5 rounded-3xl border-[2rem] border-black'  alt="mockup" />
      </div>
  </div>
</section>
    </>
  )
}

export default ContentSection5