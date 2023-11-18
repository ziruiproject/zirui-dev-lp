import React from 'react'

export default function Title({ normal, highlighted }) {
    const coloredStyle = {
        color: '#08FFC8',
    }

    return (
        <h2 className='py-10 text-5xl font-semibold text-left'>
            {normal} <span style={coloredStyle}>{highlighted}</span>
        </h2>
    )
}
