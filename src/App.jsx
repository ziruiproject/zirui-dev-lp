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
      <section className='px-6 pb-12'>
        <Title normal="Webfolio: Navigating Our" highlighted="Past Projects"></Title>
        <div className='grid grid-cols-1 gap-y-7 '>
          <PortoCard></PortoCard>
          <PortoCard></PortoCard>
          <PortoCard></PortoCard>
          <PortoCard></PortoCard>
        </div>
      </section >
      <section>

      </section>
      <section className='flex flex-col items-center'>
        <Title className='text-center' normal="Let's Work" highlighted=" With Us"></Title>
        <img src={"./imgs/work-wus.png"} alt="" />
      </section>

    </>
  )
}

export default App
