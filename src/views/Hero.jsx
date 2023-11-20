import React from 'react';
import Navbar from '../components/Navbar';

function Hero() {
    const coloredStyle = {
        color: '#08FFC8',
    }

    return (
        <div className='h-screen'>
            <div className='bg-fixed magicpattern -z-50'></div>
            <Navbar></Navbar>
            <div className='flex flex-col items-center justify-center mx-10  text-center align-middle h-5/6'>
                <h1 className='px-2 text-6xl lg:text-7xl font-semibold'>
                    <span style={coloredStyle}>Transforming</span> Your Digital Dreams Into <span style={coloredStyle}>Reality</span>
                </h1>
                <span className='py-6 text-lg lg:text-xl font-light'>From initial design concepts to final deployment, we'll partner with you every step of the way to transform your digital dreams into reality.</span>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 mx-14 '>
                    <button className='px-8 py-4 mb-3 text-xl font-medium glass-white text-green rounded-5 border-green border-1 md:px-16'>Make it Happen</button>
                    <button className='px-8 py-4 mb-3 text-xl font-medium text-[#C1C1C1] border-[#E9E9E9] rounded-5 border-1 glass-white md:px-16'>Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;