import { Banner } from 'flowbite-react';

const BannerSection = () => {
  return (
    <div className='w-full bg-brand-blue-dark py-16'>
     <Banner>
      <div className="grid mx-auto max-w-screen-xl lg:grid-cols-12 w-full justify-center p-4 items-center">
        <div className="mb-4 md:mb-0 lg:col-span-7">
          <h2 className="max-sm-custom:block flex flex-row justify-center gap-2 text-2xl lg:text-3xl font-semibold text-white uppercase">
            {/* <span className='text-primary-500'>Elevate</span>&nbsp;your digital engagement */}
            <span className='text-primary-500 '>Elevate </span> your digital engagement
          </h2>
        </div>
        <div className="flex max-sm-custom:flex-col flex-row items-center col-span-12 lg:col-span-5 justify-center gap-4">
        <a href="/" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 my-3 max-sm-custom:w-full uppercase">
                Register for free
                {/* <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
            </a>
            <a href="/" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 bg-white max-sm-custom:w-full uppercase">
                Schedule a tour
            </a> 
        </div>
      </div>
    </Banner>
    </div>
  )
}

export default BannerSection