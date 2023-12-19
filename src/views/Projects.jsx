import React from "react";
import { project } from "../content/Project";

import PortoCard from "../components/PortoCard";

export default function Projects() {
    return (
        <section className="flex flex-col justify-center items-center">
            <h1
                className="py-10 text-5xl text-center"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
            >
                Showing our{" "}
                <span className="text-green_custom">Past Projects</span>
            </h1>

            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 w-[100%] sm:w-[60%] lg:w-[60%]">
                {project.map((x, i) => {
                    return (
                        <div
                            key={i}
                            data-aos="fade-right"
                            data-aos-duration="500"
                            data-aos-delay={100 + 100 * (i + 1)}
                        >
                            <PortoCard data={x} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
