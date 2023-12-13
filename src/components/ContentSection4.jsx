import React from 'react'
import GodListensHero from '../assets/god-listens-laptop-and-mobile-hero.png'


const ContentSection4 = () => {
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="text-gray-500 sm:text-lg dark:text-gray-400 flex flex-col justify-center items-center text-center gap-8 ">
          <h2 className="font-serif mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Efficient Community Engagement</h2>
          <p className="mb-4 text-xl font-medium md:px-16 lg:px-20">Tailored for ministries seeking to lead in digital engagement. A dedicated space for ministries to initiate, guide, and sustain conversations.</p>
          <img src={GodListensHero} className='w-4/5 bg-primary-200'  alt="mockup" />
      </div>
  </div>
</section>
    </>
  )
}

export default ContentSection4