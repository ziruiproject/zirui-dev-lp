import React from 'react';
import Title from '../components/Title';

function Technologies() {
    return (
        <section className='md:h-screen md:items-center md:flex md:flex-col md:justify-center'>
            <Title className='' normal="Mastering Most of" highlighted="Modern Technologies" />
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita ducimus vero ex labore at doloremque. Consectetur sapiente laboriosam dolor placeat, dolore ex, quo vero dolorum, nostrum eius modi possimus!</p> */}
            <img className='max-w-xl' src={"./imgs/techs.png"} alt="" />
        </section>
    );
}

export default Technologies;