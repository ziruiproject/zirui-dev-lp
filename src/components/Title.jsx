import React from 'react'

export default function Title({ normal, highlighted }) {
    const coloredStyle = {
        color: '#08FFC8',
    }

    return (
        <h2 className='text-white text-5xl text-center py-10'>
            {normal} <span style={coloredStyle}>{highlighted}</span>
        </h2>
    )
}
