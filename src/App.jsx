import Services from './views/Services'
import Hero from './views/Hero'
import Technologies from './views/Technologies'

import Title from './components/Title'

import './App.css'


function App() {


  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <Technologies></Technologies>
      <div className='text-white'>
        <Title normal="Work" highlighted="Showcase">Work Showcase</Title>
        <div className='font-thin'>
          <div className='glass aspect-square'>
            <div className='flex justify-between'>
              <span className=''>Title 1</span>
              <div className='flex'>
                <span>Take a look</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                  <path d="M11.125 4.375H4.375C3.47989 4.375 2.62145 4.73058 1.98851 5.36351C1.35558 5.99645 1 6.85489 1 7.75V24.625C1 25.5201 1.35558 26.3785 1.98851 27.0115C2.62145 27.6444 3.47989 28 4.375 28H21.25C22.1451 28 23.0035 27.6444 23.6365 27.0115C24.2694 26.3785 24.625 25.5201 24.625 24.625V17.875M17.875 1H28M28 1V11.125M28 1L11.125 17.875" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <img src="/src/assets/dummy.png" alt="" />
          </div>
          <div className='glass'>
            <span className='text-white'>Title 2</span>
          </div>
          <div className='glass'>
            <span className='text-white'>Title 3</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
