import React from 'react';

function TechCard({ svgContent, index }) {
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className={'glass-green rounded-15 flex flex-col items-center justify-center w-3/4 py-14 h-60'}>
                {svgContent}
            </div>
        </div >
    );
}

export default TechCard;
