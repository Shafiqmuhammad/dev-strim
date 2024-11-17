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
        <section id="About" className=" flex flex-col px-6 py-20 md:px-32 bg-black text-center ">
            <h1 className="text-6xl lg:text-8xl text-[#f38a0b] font-extrabold ">About</h1>
            <div className="flex items-center space-x-2 pt-4 md:pt-7 text-center">
                <hr className="w-6 border-t-4 border-[#f38a0b] md:w-14" />
                <h5 className="font-mono text-xl font-bold text-white text-center">DevStrim</h5>
                <hr className="w-6 border-t-4 border-[#f38a0b] md:w-14" />
            </div>

            <h2 className="font-sans text-4xl font-extrabold leading-10 mt-4 text-white">
                Empowering Developers Worldwide
            </h2>

            <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 px-3 lg:px-0 aos-init aos-animate" data-aos="fade-right"
                data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500">

                {/* .......................... card 1 */}
                <div className=" rounded-lg text-center space-y-11 border-2 p-4 relative bg-[#f38a0b] shadow-lg mt-5 md:mt-0  hover_transtion_effect ">

                    <span className=" bg-[#f38a0b] border-2 rounded-full w-20 h-20 p-3  absolute left-1/2 transform -translate-x-1/2 -top-10 mb-5 flex items-center justify-center text-white text-3xl">

                        <Image src={logo} alt='logo' />


                    </span>

                    <div className="space-y-3 px-3 aos-init aos-animate" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">




                        <h3 className="__className_28ff18 font-bold  text-black hover:text-white"></h3>
                        <p className="undefined  text-black hover:text-white text-2xl font-semibold text-justify"> At DevSTRIM, we empower imagination by bringing your ideas to life through exceptional digital solutions. As a versatile and innovative company, we specialize in delivering high-quality services tailored to your unique business needs. Whether you are a startup looking to establish your brand or an established enterprise seeking to expand your digital presence, we have got you covered </p>

                    </div>

                </div>

            </div>







        </section>
    );
}

export default About;
