<<<<<<< HEAD
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import web from "../../public/image/pc.png";
import mobile from "../../public/image/mobile.png";
import server from "../../public/image/maintain.png";
import design from "../../public/image/design.png";

export default function Services() {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="flex flex-col-reverse items-center lg:flex-row my-10 lg:space-x-10">
            <div className="grid grid-cols-1 w-[100%] lg:w-full lg:grid-cols-2 gap-5">
                <div
                    className="serviceCard"
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-delay="100"
                >
                    <div className="kotakBlur bg-[#39A1CC]"></div>
                    <img src={web} alt="web" className="w-[30%] mx-auto my-5" />
                    <h3 className="text-3xl">Web Creation</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Cupiditate at commodi officia, nobis, distinctio
                        omnis, magnam.
                    </p>
                </div>

                <div
                    className="serviceCard"
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-delay="300"
                >
                    <div className="kotakBlur bg-[#FF5163]"></div>
                    <img
                        src={mobile}
                        alt="mobile"
                        className="w-[30%] mx-auto my-5"
                    />
                    <h3 className="text-3xl">Mobile Development</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Cupiditate at commodi officia, nobis, distinctio
                        omnis, magnam.
                    </p>
                </div>

                <div
                    className="serviceCard"
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-delay="500"
                >
                    <div className="kotakBlur bg-[#08FFC8]"></div>
                    <img
                        src={server}
                        alt="maintenance"
                        className="w-[30%] mx-auto my-5"
                    />
                    <h3 className="text-3xl">Software Maitenance</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Cupiditate at commodi officia, nobis, distinctio
                        omnis, magnam.
                    </p>
                </div>

                <div
                    className="serviceCard"
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-delay="700"
                >
                    <div className="kotakBlur bg-[#ECC285]"></div>
                    <img
                        src={design}
                        alt="design"
                        className="w-[30%] mx-auto my-5"
                    />
                    <h3 className="text-3xl">UI/UX Design</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Cupiditate at commodi officia, nobis, distinctio
                        omnis, magnam.
                    </p>
                </div>
            </div>

            <div className="space-y-3 w-full sm:w-[70%] lg:w-[70%]">
                <h1
                    className="text-5xl text-center lg:text-left"
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-delay="100"
                >
                    We&apos;re Here to Serve{" "}
                    <span className="text-green_custom">What You Need</span>
                </h1>

                <p
                    className="text-center lg:text-left text-lg lg:text-xl font-light py-5"
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-delay="300"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor tempora cum voluptates placeat culpa saepe
                    accusantium, temporibus voluptatum quisquam perspiciatis
                    porro et rem. Et illo dignissimos debitis provident eius
                    molestiae!
                </p>
            </div>
        </div>
    );
}
=======
import React from 'react';
import Title from '../components/Title';

function Services() {
    return (
        <section className='md:h-screen md:flex md:flex-row-reverse md:justify-between px-8 bg-white'>
            <div className='md:w-2/3 md:flex md:flex-col md:justify-center md:pl-12'>
                <Title normal="We're Here to Serve" highlighted="What You Need" />
                <p className='md:block hidden text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatem quibusdam delectus iusto cupiditate corrupti corporis aut obcaecati voluptatibus vel incidunt fugit, aspernatur tempore facilis soluta suscipit ipsam et excepturi.</p>
            </div>
            <div className='place-items-center md:grid-cols-2 md:auto-rows-fr md:place-items-start md:w-5/6 md:my-8 container grid gap-5'>
                <div className='service-card md:w-full flex flex-col items-center justify-center w-5/6 h-full p-4 text-center align-middle'>
                    {/* <div className='shadow-card left-5 top-5 -z-50 fixed w-full h-full'> */}
                    {/* </div> */}
                    <svg className='-top-1/3 right-1/3 fixed' xmlns="http://www.w3.org/2000/svg" width="227" height="227" viewBox="0 0 227 227" fill="none">
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
                    <img src={"./icons/pc.png"} alt="" width={75} />
                    <h3 className='py-2 text-3xl font-semibold'>Web Creation</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Cupiditate at commodi officia, nobis, distinctio omnis, magnam.</p>
                </div>
                <div className='service-card md:w-full flex flex-col items-center justify-center w-5/6 h-full p-4 text-center align-middle'>
                    {/* <div className='shadow-card left-5 top-5 -z-50 fixed w-full h-full'> */}
                    {/* </div> */}
                    <svg className='-top-1/3 right-1/3 fixed' xmlns="http://www.w3.org/2000/svg" width="227" height="227" viewBox="0 0 227 227" fill="none">
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
                    <img src={"./icons/mobile.png"} alt="" width={75} />
                    <h3 className='py-2 text-3xl font-semibold'>Mobile Development</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Cupiditate at commodi officia, nobis, distinctio omnis, magnam.</p>
                </div>
                <div className='service-card md:w-full flex flex-col items-center justify-center w-5/6 h-full p-4 text-center align-middle'>
                    {/* <div className='shadow-card left-5 top-5 -z-50 fixed w-full h-full'> */}
                    {/* </div> */}
                    <svg className='-top-1/3 right-1/3 fixed' xmlns="http://www.w3.org/2000/svg" width="227" height="227" viewBox="0 0 227 227" fill="none">
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
                    <img src={"./icons/maintain.png"} alt="" width={75} />
                    <h3 className='py-2 text-3xl font-semibold'>Software Maintenance</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Cupiditate at commodi officia, nobis, distinctio omnis, magnam.</p>
                </div>
                <div className='service-card md:w-full flex flex-col items-center justify-center w-5/6 h-full p-4 text-center align-middle'>
                    {/* <div className='shadow-card left-5 top-5 -z-50 fixed w-full h-full'></div> */}
                    <svg className='-top-1/3 right-1/3 fixed' xmlns="http://www.w3.org/2000/svg" width="227" height="227" viewBox="0 0 227 227" fill="none">
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
                    <img src={"./icons/design.png"} alt="" width={75} />
                    <h3 className='py-2 text-3xl font-semibold'>UI/UX Design</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Cupiditate at commodi officia, nobis, distinctio omnis, magnam.</p>
                </div>
            </div>
        </section>
    );
}

export default Services;
>>>>>>> 68f68031c1530ebf4cc52d2903ba6c518d7a047e
