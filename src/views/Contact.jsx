import React from "react";
import talk from "../../public/image/lets-talk.png";

import { MdMail } from "react-icons/md";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="my-20 flex flex-col md:flex-row justify-center items-center text-center">
            <h1
                id="text"
                className="text-6xl w-full"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="100"
            >
                Let&apos;s Talk, <br />
                <span className="text-green_custom">No Cost,</span> <br />
                Just Answer.
            </h1>

            <div className="lg:mr-20">
                <img
                    src={talk}
                    alt="talk"
                    className="w-[70%] lg:w-[90%] mx-auto"
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    data-aos-anchor="#text"
                />
                {/* inputt */}

                <p
                    className="text-xl"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                >
                    It&apos;s just between us, and we&apos;re here to help!
                </p>
                <p
                    className="text-xl"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                >
                    Or You can reach us via:
                </p>
                <div className="flex justify-center space-x-5 my-5">
                    <a
                        href="#"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                    >
                        <MdMail className="text-2xl" />
                    </a>
                    <a
                        href="#"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        <FaInstagram className="text-2xl" />
                    </a>
                    <a
                        href="#"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="300"
                    >
                        <FaTiktok className="text-2xl" />
                    </a>
                    <a
                        href="#"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="400"
                    >
                        <FaLinkedin className="text-2xl" />
                    </a>
                </div>
            </div>
        </section>
    );
}
