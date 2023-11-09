import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import heroImage from './assets/hero.png'
import './App.css'

function App() {

  const coloredStyle = {
    color: '#08FFC8', // Color for "Transforming" and "Reality"
  };

  return (
    <>
      <div style={{ backgroundImage: `url(${heroImage})` }}
        className='h-screen bg-cover bg-center bg-no-repeat px-1'
      >
        <nav className='font-serif text-white font-thin px-10 py-6 border-b-1 border-green md:py-8'>
          <ul className='flex text-xl justify-between align-middle lg:justify-evenly'>
            <li>Zirui Dev</li>
            <li className='hidden md:flex'>Techonologies</li>
            <li className='hidden md:flex'>Portofolio</li>
            <li className='hidden md:flex'>Contact</li>
            <li className='hidden md:flex'>About Us</li>
            <li className='md:hidden'>Button</li>
          </ul>
        </nav>
        <div className='flex-row font-serif text-center'>
          <h1 className='font-semibold text-5xl text-white px-2'>
            <span style={coloredStyle}>Transforming</span> Your Digital Dreams Into <span style={coloredStyle}>Reality</span>
          </h1>
          <span className='text-white font-thin'>From initial design concepts to final deployment, we'll partner with you every step of the way to transform your digital dreams into reality.</span>
          <div>
            <button className='text-white border-1 py-3 px-5 text-2xl text border-green'>Make it Happen</button>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
