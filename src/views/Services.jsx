import React from 'react';
import Title from '../components/Title';

function Services() {
    return (
        <div className='h-full px-6 bg-white'>
            <Title normal="We're Here to Serve" highlighted="What You Need" />
            <div className='grid grid-cols-1 grid-rows-4 gap-5 place-items-center'>
                <div className='flex flex-col items-center justify-center w-3/4 p-4 text-center align-middle service-card'>
                    <div className='fixed w-full h-full shadow-card left-5 top-5 -z-50'>
                    </div>
                    <svg className='fixed -top-1/3 right-1/3' xmlns="http://www.w3.org/2000/svg" width="227" height="227" viewBox="0 0 227 227" fill="none">
                        <g filter="url(#filter0_f_225_5424)">
                            <circle cx="113.5" cy="113.5" r="30" fill="#39A1CC" />
                        </g>
                        <defs>
                            <filter id="filter0_f_225_5424" x="0" y="0" width="227" height="227" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="37.5" result="effect1_foregroundBlur_225_5424" />
                            </filter>
                        </defs>
                    </svg>
                    <img src="./src/assets/icons/pc.png" alt="" width={75} />
                    <h3 className='py-2 text-3xl font-semibold'>Web Creation</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Cupiditate at commodi officia, nobis, distinctio omnis, magnam.</p>
                </div>
                <div className='flex flex-col items-center justify-center w-3/4 p-4 text-center align-middle service-card'>
                    <div className='fixed w-full h-full shadow-card left-5 top-5 -z-50'>
                    </div>
                    <svg className='fixed -top-1/3 right-1/3' xmlns="http://www.w3.org/2000/svg" width="227" height="227" viewBox="0 0 227 227" fill="none">
                        <g filter="url(#filter0_f_225_5424)">
                            <circle cx="113.5" cy="113.5" r="30" fill="#FF5163" />
                        </g>
                        <defs>
                            <filter id="filter0_f_225_5424" x="0" y="0" width="227" height="227" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="37.5" result="effect1_foregroundBlur_225_5424" />
                            </filter>
                        </defs>
                    </svg>
                    <img src="./src/assets/icons/mobile.png" alt="" width={75} />
                    <h3 className='py-2 text-3xl font-semibold'>Mobile Development</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Cupiditate at commodi officia, nobis, distinctio omnis, magnam.</p>
                </div>
                <div className='flex flex-col items-center justify-center w-3/4 p-4 text-center align-middle service-card'>
                    <div className='fixed w-full h-full shadow-card left-5 top-5 -z-50'>
                    </div>
                    <svg className='fixed -top-1/3 right-1/3' xmlns="http://www.w3.org/2000/svg" width="227" height="227" viewBox="0 0 227 227" fill="none">
                        <g filter="url(#filter0_f_225_5424)">
                            <circle cx="113.5" cy="113.5" r="30" fill="#08FFC8" />
                        </g>
                        <defs>
                            <filter id="filter0_f_225_5424" x="0" y="0" width="227" height="227" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="37.5" result="effect1_foregroundBlur_225_5424" />
                            </filter>
                        </defs>
                    </svg>
                    <img src="./src/assets/icons/maintain.png" alt="" width={75} />
                    <h3 className='py-2 text-3xl font-semibold'>Software Maintenance</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Cupiditate at commodi officia, nobis, distinctio omnis, magnam.</p>
                </div>
                <div className='flex flex-col items-center justify-center w-3/4 p-4 text-center align-middle service-card'>
                    <div className='fixed w-full h-full shadow-card left-5 top-5 -z-50'>
                    </div>
                    <svg className='fixed -top-1/3 right-1/3' xmlns="http://www.w3.org/2000/svg" width="227" height="227" viewBox="0 0 227 227" fill="none">
                        <g filter="url(#filter0_f_225_5424)">
                            <circle cx="113.5" cy="113.5" r="38.5" fill="#ECC285" />
                        </g>
                        <defs>
                            <filter id="filter0_f_225_5424" x="0" y="0" width="227" height="227" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="37.5" result="effect1_foregroundBlur_225_5424" />
                            </filter>
                        </defs>
                    </svg>
                    <img src="./src/assets/icons/design.png" alt="" width={75} />
                    <h3 className='py-2 text-3xl font-semibold'>UI/UX Design</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Cupiditate at commodi officia, nobis, distinctio omnis, magnam.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;