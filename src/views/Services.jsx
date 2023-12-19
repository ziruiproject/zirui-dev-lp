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
