import React from 'react'
import ksbjLogo from '../assets/ksbj-logo.png'
import wayFmLogo from '../assets/wayfm-logo.png'
import wayLoudLogo from '../assets/way-loud-logo.png'
import vidaLogo from '../assets/vida-unida-logo.png'
import ngenLogo from '../assets/ngen-logo.png'


const CompaniesLogoSection = () => {
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-3 gap-8 text-gray-500 sm:gap-12 md:grid-cols-5 dark:text-gray-400 justify-center">
            <a href="https://ksbj.godlistens.com" rel='noopener noreferrer' target='_blank' className="flex justify-center items-center w-20 h-20 sm:w-28 sm:h-28 opacity-70 grayscale">
                <img src={ksbjLogo} alt="KSBJ Logo" />
            </a>
            <a href="https://wayfm.godlistens.com" rel='noopener noreferrer' target='_blank' className="flex justify-center items-center w-20 h-20 sm:w-28 sm:h-28 opacity-70 grayscale">
                <img src={wayFmLogo} alt="WayFM Logo" />
            </a>
            <a href="https://wayfm.godlistens.com" rel='noopener noreferrer' target='_blank' className="flex justify-center items-center w-20 h-20 sm:w-28 sm:h-28 opacity-70 grayscale">
                <img src={wayLoudLogo} alt="Way Loud Logo" />
            </a>
            <a href="https://vidaunida.godlistens.com" rel='noopener noreferrer' target='_blank' className="flex justify-center items-center w-20 h-20 sm:w-28 sm:h-28 opacity-70 grayscale">
                <img src={vidaLogo} alt="Vida Unida Logo" />
            </a>
            <a href="https://ngen.godlistens.com" rel='noopener noreferrer' target='_blank' className="flex justify-center items-center w-20 h-20 sm:w-28 sm:h-28 opacity-70 grayscale">
                <img src={ngenLogo} alt="Ngen Radio Logo" />
            </a>
            
        </div>
    </div>
</section>
    </>
  )
}

export default CompaniesLogoSection