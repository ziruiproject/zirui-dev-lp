import Services from './views/Services'
import Hero from './views/Hero'
import Technologies from './views/Technologies'

import Title from './components/Title'
import PortoCard from './components/PortoCard'

import './App.css'


function App() {


  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <Technologies></Technologies>
      <div className='text-white'>
        <Title normal="Work" highlighted="Showcase">Work Showcase</Title>
        <div className='mx-6 grid gap-y-6 grid-cols-1 '>
          <PortoCard className="mb-8"></PortoCard>
          <PortoCard className="mb-8"></PortoCard>
          <PortoCard className="mb-8"></PortoCard>
          <PortoCard></PortoCard>
        </div>
      </div>

    </>
  )
}

export default App
