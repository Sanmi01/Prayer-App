import React from 'react'
import Header2 from '../components/Header2'
import RegisterForm from '../components/RegisterForm'
import Footer2 from '../components/Footer2'

const Register = () => {
  return (
    <div className='bg-brand-gray h-screen'>
      <Header2 />
      <RegisterForm />
      <Footer2 />
    </div>
  )
}

export default Register