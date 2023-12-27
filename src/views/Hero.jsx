import { twMerge } from "tailwind-merge";

export default function Hero() {
    return (
        <div className="relative px-10 text-center h-[88.5vh] flex flex-col items-center justify-center">
            <div className="bg-[url('../../public/image/parallax.svg')] bg-cover bg-fixed blur-md w-full h-full absolute top-0 -z-10"></div>
            <h1
                className="px-2 text-6xl lg:text-7xl "
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
            >
                <span className=" text-green_custom">Transforming</span> Your
                Digital Dreams Into{" "}
                <span className=" text-green_custom">Reality</span>
            </h1>
            <p
                className="my-3 text-lg lg:text-xl font-light"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
            >
                From initial design concepts to final deployment, we&apos;ll
                partner with you every step of the way to transform your digital
                dreams into reality.
            </p>

            <div
                className={twMerge(
                    "font-bold w-[200px] mx-auto",
                    "flex flex-col items-center justify-center space-y-2 space-x-0 my-5",
                    "md:w-full md:space-y-0 md:space-x-5 md:flex-row",
                )}
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="500"
            >
                <a
                    href=""
                    className="border border-green_custom text-green_custom rounded-md py-4 px-8 w-full md:w-auto text-lg"
                >
                    Make it Happen
                </a>
                <a
                    href=""
                    className="border border-gray-400 text-gray-400 rounded-md py-4 px-8 w-full md:w-auto text-lg"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
}
