import React from 'react'
import ksbjLogo from '../assets/ksbj-logo.png'
import wayFmLogo from '../assets/wayfm-logo.png'
import wayLoudLogo from '../assets/way-loud-logo.png'
import vidaLogo from '../assets/vida-unida-logo.png'
import ngenLogo from '../assets/ngen-logo.png'
import { Link } from 'react-router-dom'



const CompaniesLogoSection = () => {
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-3 gap-8 text-gray-500 sm:gap-12 md:grid-cols-5 dark:text-gray-400 justify-center">
            <Link to="https://ksbj.godlistens.com" rel='noopener noreferrer' target='_blank' className="flex justify-center items-center w-20 h-20 sm:w-28 sm:h-28 opacity-70 grayscale">
                <img src={ksbjLogo} alt="KSBJ Logo" />
            </Link>
            <Link to="https://wayfm.godlistens.com" rel='noopener noreferrer' target='_blank' className="flex justify-center items-center w-20 h-20 sm:w-28 sm:h-28 opacity-70 grayscale">
                <img src={wayFmLogo} alt="WayFM Logo" />
            </Link>
            <Link to="https://wayfm.godlistens.com" rel='noopener noreferrer' target='_blank' className="flex justify-center items-center w-20 h-20 sm:w-28 sm:h-28 opacity-70 grayscale">
                <img src={wayLoudLogo} alt="Way Loud Logo" />
            </Link>
            <Link to="https://vidaunida.godlistens.com" rel='noopener noreferrer' target='_blank' className="flex justify-center items-center w-20 h-20 sm:w-28 sm:h-28 opacity-70 grayscale">
                <img src={vidaLogo} alt="Vida Unida Logo" />
            </Link>
            <Link to="https://ngen.godlistens.com" rel='noopener noreferrer' target='_blank' className="flex justify-center items-center w-20 h-20 sm:w-28 sm:h-28 opacity-70 grayscale">
                <img src={ngenLogo} alt="Ngen Radio Logo" />
            </Link>
            
        </div>
    </div>
</section>
    </>
  )
}

export default CompaniesLogoSection