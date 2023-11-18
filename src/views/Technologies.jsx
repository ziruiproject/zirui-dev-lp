import React from 'react';
import Title from '../components/Title';

function Technologies() {

    return (
        <div className='flex flex-col px-6'>
            <Title normal="Mastering Most of" highlighted="Modern Technologies" />
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita ducimus vero ex labore at doloremque. Consectetur sapiente laboriosam dolor placeat, dolore ex, quo vero dolorum, nostrum eius modi possimus!</p> */}
            <img src={"./imgs/techs.png"} alt="" />
        </div>
    );
}

export default Technologies;