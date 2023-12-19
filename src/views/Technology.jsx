import React from "react";
import imgTech from "../../public/image/tech.png";

export default function Technology() {
    return (
        <section className="my-20 flex flex-col items-center justify-center">
            <h1
                className="title"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
            >
                Mastering Most of{" "}
                <span className="text-green_custom">Modern Technologies</span>
            </h1>

            <img
                src={imgTech}
                alt="wee"
                className="sm:w-[70%] lg:w-[60%] xl:w-[40%]"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
            />
        </section>
    );
}
