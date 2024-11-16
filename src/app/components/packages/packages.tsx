"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import logo from '../../../../public/Untitled-d26J7iAU3-transformed.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Pkgweb from "./pkgaiweb";
import Ecomweb from "./ecomweb";
import Comprofile from "./comprofile";

const Packages = () => {

    const [showPackage, setShowPackage] = useState(1)
    // function ParentComponent() {
    // const [showComponentB, setShowComponentB] = useState(false);

    // const handleClick = () => {
    //     setShowComponentB(true);
    // };
    useEffect(() => {
        AOS.init({
            // Global settings here
        });
    }, []);

    return (
        < section id="packages" className="bg-black" >
            <div className="flex flex-col px-6 py-20 md:px-32  ">
                <h1 className="text-4xl lg:text-5xl text-[#f38a0b] font-extrabold text-center">Book Promo Slots Immediately Before They Run Out!</h1>

                {/* line  */}
                <div className="flex items-center space-x-2 pt-4 md:pt-7">
                    <hr className="w-full border-t-8 border-[#f38a0b] md:w-14" />
                    {/* <h5 className="font-mono text-xl font-bold text-white">Our Solutions</h5>
                <hr className="w-6 border-t-4 border-[#f38a0b] md:w-14" /> */}
                </div>

                <h2 className="font-sans text-4xl font-extrabold leading-10 mt-4 text-white">
                    Services We provide to
                    <br className="hidden md:inline text-white" /> Our <br className="md:hidden" />
                    <span className="text-blue-500 md:px-3">Customers</span>
                </h2>

                <div className="text-orange-500">
                    <div className="flex flex-wrap items-center justify-center mt-2 mb-1 pt-3">

                        <button
                            onClick={() => setShowPackage(1)}
                            className="btn btn-sm px-5 py-1 text-2xl rounded-2xl bg-[#f38a0b]  border-2 border-[#f38a0b]  text-black font-bold hover:bg-transparent hover:border-[#f38a0b]  hover:text-[#f38a0b]  duration-300 mx-3 my-3 sm:my-0 active-btn"
                        >
                            AI Website
                        </button>



                        <button
                            onClick={() => setShowPackage(2)}
                            className="btn btn-sm px-5 py-1 rounded-2xl text-2xl bg-[#f38a0b]  border-2 border-[#f38a0b]  text-black font-bold hover:bg-transparent hover:border-[#f38a0b]  hover:text-[#f38a0b]  duration-300 mx-3 my-3 sm:my-0 false">



                            Website E-Commerce Online</button>


                        <button
                            onClick={() => setShowPackage(3)}
                            className="btn btn-sm px-5 py-1 text-2xl rounded-2xl bg-[#f38a0b]  border-2 border-[#f38a0b]  text-black font-bold hover:bg-transparent hover:border-[#f38a0b]  hover:text-[#f38a0b]  duration-300 mx-3 my-3 sm:my-0 false">
                            Website Company Profile</button></div>


                </div>
            </div>
            {showPackage === 1 && <Pkgweb />}
            {showPackage === 2 && <Ecomweb />}
            {showPackage === 3 && <Comprofile />}
        </section >
    )
}






export default Packages;
