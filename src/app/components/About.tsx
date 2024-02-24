"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import logo from '../../../public/Untitled-d26J7iAU3-transformed.png'

import AOS from 'aos';
import 'aos/dist/aos.css';



const About = () => {
    useEffect(() => {
        AOS.init({
            // Global settings here
        });
    }, []);


    return (
        <section id="About" className=" flex flex-col px-6 py-20 md:px-32 bg-black ">
            <h1 className="text-6xl lg:text-8xl text-[#f38a0b] font-extrabold">About</h1>
            <div className="flex items-center space-x-2 pt-4 md:pt-7">
                <hr className="w-6 border-t-4 border-[#f38a0b] md:w-14" />
                <h5 className="font-mono text-xl font-bold text-white">DevStrim</h5>
                <hr className="w-6 border-t-4 border-[#f38a0b] md:w-14" />
            </div>

            <h2 className="font-sans text-4xl font-extrabold leading-10 mt-4 text-white">
                Empowering Developers Worldwide
                <br className="hidden md:inline text-white" /> Our <br className="md:hidden" />
                <span className="text-blue-500 md:px-3">Customers</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 px-3 lg:px-0 aos-init aos-animate" data-aos="fade-right"
                data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500">

                {/* .......................... card 1 */}
                <div className=" rounded-lg text-center space-y-11 border-2 p-4 relative bg-[#f38a0b] shadow-lg mt-5 md:mt-0  hover_transtion_effect ">

                    <span className=" bg-[#f38a0b] border-2 rounded-full w-20 h-20 p-3  absolute left-1/2 transform -translate-x-1/2 -top-10 mb-5 flex items-center justify-center text-white text-3xl">

                        <Image src={logo} alt='logo' />


                    </span>

                    <div className="space-y-3 px-3 aos-init aos-animate" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">



                        <Image src="/web-development.webp" alt="Web App Development" width={130} height={100} objectFit="cover" className='ml-8' />



                        <h3 className="__className_28ff18 font-bold  text-black hover:text-white">Web App Development</h3>
                        <p className="undefined  text-black hover:text-white text-sm font-semibold text-justify"> CHAMPIONS-SOL, as a skills generation center, crafts cost-effective, scalable web application solutions that are not only easily maintainable but also highly feasible. </p>

                        <hr className="w-full" />

                        <a href="#" className="inline-flex items-center py-2 text-black hover:text-white text-sm font-semibold">
                            View Details
                            <svg className="ml-2 h-3.5 w-3.5" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                            </svg>
                        </a>

                    </div>

                </div>

                {/* .......................... card 2 */}

                <div className=" rounded-lg text-center space-y-11 border-2 p-4 relative bg-[#f38a0b] shadow-lg mt-5 md:mt-0  hover_transtion_effect ">

                    <span className=" bg-[#f38a0b] border-2 rounded-full w-20 h-20 p-3  absolute left-1/2 transform -translate-x-1/2 -top-10 mb-5 flex items-center justify-center text-white text-3xl">

                        <Image src={logo} alt='logo' />


                    </span>

                    <div className="space-y-3 px-3 aos-init aos-animate" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">

                        <Image src="/ui-ux-removebg-preview.png" alt="Web App Development" width={320} height={192} objectFit="cover" />



                        <h3 className="__className_28ff18 font-bold  text-black hover:text-white">UI / UX</h3>
                        <p className="undefined  text-black hover:text-white text-sm font-semibold text-justify"> Our UI&UX design offerings are meticulously researched to simplify complex products, propelling your brand's growth and making it stand out..  </p>

                        <hr className="w-full" />

                        <a href="#" className="inline-flex items-center py-2 text-black hover:text-white text-sm font-semibold">
                            View Details
                            <svg className="ml-2 h-3.5 w-3.5" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                            </svg>
                        </a>
                    </div>

                </div>

                {/* .............. card 3 bg-[#f38a0b] */}

                <div className=" rounded-lg text-center space-y-11 border-2 p-4 relative bg-[#f38a0b] shadow-lg mt-5 md:mt-0  hover_transtion_effect ">

                    <span className=" bg-[#f38a0b] border-2 rounded-full w-20 h-20 p-3  absolute left-1/2 transform -translate-x-1/2 -top-10 mb-5 flex items-center justify-center text-white text-3xl">

                        <Image src={logo} alt='logo' />


                    </span>

                    <div className="space-y-3 px-3 aos-init aos-animate" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">

                        <Image src="/mobile-app.png" alt="Web App Development" width={320} height={192} objectFit="cover" className='text-center' />



                        <h3 className="__className_28ff18 font-bold  text-black hover:text-white">Mobile App Development</h3>
                        <p className="undefined  text-black hover:text-white text-sm font-semibold text-justify"> Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. </p>

                        <hr className="w-full" />

                        <a href="#" className="inline-flex items-center py-2 text-black hover:text-white text-sm font-semibold">
                            View Details
                            <svg className="ml-2 h-3.5 w-3.5" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                            </svg>
                        </a>
                    </div>

                </div>

                {/* ....... */}

                <div className=" rounded-lg text-center space-y-11 border-2 p-4 relative bg-blue-300 shadow-lg mt-5 md:mt-0  hover_transtion_effect ">

                    <span className=" bg-blue-300 border-2 rounded-full w-20 h-20 p-3  absolute left-1/2 transform -translate-x-1/2 -top-10 mb-5 flex items-center justify-center text-white text-3xl">

                        <Image src={logo} alt='logo' />


                    </span>

                    <div className="space-y-3 px-3 aos-init aos-animate" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">

                        <Image src="/ai.png" alt="Web App Development" width={320} height={192} objectFit="cover" />



                        <h3 className="__className_28ff18 font-bold  text-black hover:text-white">Web App Development</h3>
                        <p className="undefined  text-black hover:text-white text-sm font-semibold text-justify"> Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. </p>

                        <hr className="w-full" />

                        <a href="#" className="inline-flex items-center py-2 text-black hover:text-white text-sm font-semibold">
                            View Details
                            <svg className="ml-2 h-3.5 w-3.5" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                            </svg>
                        </a>
                    </div>

                </div>


            </div>







        </section>
    );
}

export default About;
