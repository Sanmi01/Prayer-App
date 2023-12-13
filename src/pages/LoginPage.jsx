import React from 'react'
import Header2 from '../components/Header2'
import LoginForm from '../components/LoginForm'
import Footer2 from '../components/Footer2'


const LoginPage = () => {
  return (
    <div className='bg-brand-gray h-screen'>
    <Header2 />
    <LoginForm />
    <Footer2 />
  </div>
  )
}

export default LoginPage