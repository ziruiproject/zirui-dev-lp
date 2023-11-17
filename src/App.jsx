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
      <div>
        <Title normal="Work" highlighted="Showcase">Work Showcase</Title>
        <div className='grid grid-cols-1 mx-6 gap-y-7 '>
          <PortoCard></PortoCard>
          <PortoCard></PortoCard>
          <PortoCard></PortoCard>
          <PortoCard></PortoCard>
        </div>
      </div>

    </>
  )
}

export default App
