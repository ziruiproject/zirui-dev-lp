/* eslint-disable react/prop-types */
import React from "react";

import { FiExternalLink } from "react-icons/fi";

export default function PortoCard({ data }) {
    const { name, link, tech, image } = data;

    return (
        <section className="border rounded-md w-full justify-self-center">
            <div className="flex items-center justify-between px-8 py-5">
                <h3 className="text-lg">{name}</h3>
                <div className="flex justify-center items-center space-x-3 text-lg">
                    <h3>Take a Look</h3>
                    <a href={link}>
                        <FiExternalLink />
                    </a>
                </div>
            </div>

            <img src={image} alt="project image" className="w-full" />
            <div className="px-8 py-5 text-xl">
                <h3>Made with</h3>
                <p className="font-bold">{tech.join(", ")}</p>
            </div>
        </section>
    );
}
