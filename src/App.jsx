import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Services from './views/Services'
import Title from './components/Title'
import Hero from './views/Hero'
import './App.css'

function App() {

  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <div>
        <Title normal="Mastering Most of" highlighted="Modern Technologies" />
      </div>
    </>
  )
}

export default App
