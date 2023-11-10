import React from 'react'

export default function Title() {
    const coloredStyle = {
        color: '#08FFC8',
    }

    return (
        <h2 className='text-white text-5xl text-center py-10'>
            Our <span style={coloredStyle}>Services</span>
        </h2>
    )
}
