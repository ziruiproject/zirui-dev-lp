import React from 'react';
import Title from '../components/Title';

function Technologies() {

    return (
        <div className='h-screen bg-green py-8 flex flex-col justify-center items-center px-6'>
            <Title className='md:text-center' normal="Mastering Most of" highlighted="Modern Technologies" />
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita ducimus vero ex labore at doloremque. Consectetur sapiente laboriosam dolor placeat, dolore ex, quo vero dolorum, nostrum eius modi possimus!</p> */}
            <img className='w-2/3' src={"./imgs/techs.png"} alt="" />
        </div>
    );
}

export default Technologies;