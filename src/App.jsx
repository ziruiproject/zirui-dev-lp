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

        <div className=''>
          <PortoCard></PortoCard>
          <PortoCard></PortoCard>
        </div>
        <PortoCard></PortoCard>
      </div>

    </>
  )
}

export default App
