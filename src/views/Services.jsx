import React from 'react';
import Title from '../components/Title';

function Services() {
    return (
        <div className='h-full px-6 bg-white'>
            <Title normal="We're Here to Serve" highlighted="What You Need" />
            <div className='grid grid-cols-1 grid-rows-4 grid-'>
                <div className='flex flex-col items-center justify-center w-3/4 p-4 text-center align-middle service-card'>
                    <img src="./src/assets/icons/pc.png" alt="" width={75} />
                    <h3 className='text-3xl font-semibold'>Web Creation</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Cupiditate at commodi officia, nobis, distinctio omnis, magnam.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;