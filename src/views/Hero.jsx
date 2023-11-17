import React from 'react';
import Navbar from '../components/Navbar';
import heroImage from '../assets/hero.png'

function Hero() {
    const coloredStyle = {
        color: '#08FFC8',
    }

    return (
        <div className='magicpattern flex-col h-screen bg-cover bg-center bg-no-repeat px-1'>
            <Navbar></Navbar>
            <div className='flex flex-col justify-center h-5/6 mx-10 font-serif text-center'>
                <h1 className='font-semibold text-6xl text-white px-2'>
                    <span style={coloredStyle}>Transforming</span> Your Digital Dreams Into <span style={coloredStyle}>Reality</span>
                </h1>
                <span className='text-white text-lg font-light py-6'>From initial design concepts to final deployment, we'll partner with you every step of the way to transform your digital dreams into reality.</span>
                <div className='flex flex-col mx-14'>
                    <button className='text-white text-xl font-medium rounded-5 border-green border-1 py-4 px-2 mb-3'>Make it Happen</button>
                    <button className='button-unactive text-white text-xl font-medium  py-4 px-2 mb-3'>Learn More</button>
                </div>
            </div>
        </div >
    );
}

export default Hero;