import Services from './views/Services'
import Hero from './views/Hero'
import Technologies from './views/Technologies'

import Title from './components/Title'
import PortoCard from './components/PortoCard'

import './App.css'

function App() {

  const coloredStyle = {
    color: '#08FFC8',
  }

  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <Technologies></Technologies>
      <section className='px-6 pb-12'>
        <Title normal="Webfolio: Navigating Our" highlighted="Past Projects"></Title>
        <div className='gap-y-7 grid grid-cols-1'>
          <PortoCard></PortoCard>
          <PortoCard></PortoCard>
          <PortoCard></PortoCard>
          <PortoCard></PortoCard>
        </div>
      </section >
      <section>

      </section>
      <section className='flex flex-col items-center w-screen h-screen px-6'>
        <h2 className='pt-10 text-5xl font-semibold text-center'>
          Let's Talk, <br />
          <span style={coloredStyle}>No Cost, <br />
          </span> Just Answers.
        </h2>
        <img src={"./imgs/lets-talk.png"} alt="" />
        <form action="get">
          <input placeholder='Enter your email here' className='form-card focus:outline-none px-4 py-2 scale-150' type="text" />
        </form>
        <span className='pt-5'> It's just between us, and we're here to help!</span>
        <span>Or You can reach us via:</span>
      </section>

    </>
  )
}

export default App
