import React from 'react';

function Navbar() {
    return (
        <div>
            <nav className='z-50 px-10 py-6 font-serif font-thin border-b-1 border-green md:py-8'>
                <ul className='flex justify-between text-xl align-middle lg:justify-evenly'>
                    <li>Zirui Dev</li>
                    <li className='hidden md:flex'>Services</li>
                    <li className='hidden md:flex'>Technologies</li>
                    <li className='hidden md:flex'>Portofolio</li>
                    <li className='hidden md:flex'>Contact Us</li>
                    <li className='md:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;