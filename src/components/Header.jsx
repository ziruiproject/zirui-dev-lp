import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export default function Header() {
    const [response, setresponse] = useState(false);

    function klik() {
        setresponse((prev) => !prev);
    }

    return (
        <header
            className={twMerge(
                "border-b border-green_custom bg-white_custom",
                "flex justify-between md:justify-center items-center px-10 py-8",
            )}
        >
            <h1 className="text-3xl md:hidden">Zirui Dev</h1>
            <ul
                className={twMerge(
                    response ? "top-[101px] opacity-100" : "-top-96 opacity-0",
                    "z-10 bg-white_custom transition-all duration-200",
                    "absolute inset-x-0 py-5 px-10 space-y-3 border-b border-b-green_custom", // responsive
                    "md:relative md:py-0 md:top-0 md:opacity-100 md:flex md:justify-between md:items-center md:space-y-0 md:border-none",
                    "md:space-x-14 lg:space-x-32 xl:space-x-40",
                )}
            >
                <li className="hidden md:block">
                    <a href="#">Zirui Dev</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Technologies</a>
                </li>
                <li>
                    <a href="#">Portofolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            <FaBars
                className="md:hidden text-2xl cursor-pointer"
                onClick={klik}
            />
        </header>
    );
}
