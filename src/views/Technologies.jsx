import React from 'react';
import TechCard from '../components/TechCard'
import Title from '../components/Title';

function Technologies() {

    return (
        <div className='flex flex-col px-6'>
            <Title normal="Mastering Most of" highlighted="Modern Technologies" />
            <img src={"./imgs/techs.png"} alt="" />
        </div>
    );
}

export default Technologies;