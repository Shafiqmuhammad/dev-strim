"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import logo from '../../../../public/Untitled-d26J7iAU3-transformed.png'

import AOS from 'aos';
import 'aos/dist/aos.css';



const Pkgweb = () => {
    useEffect(() => {
        AOS.init({
            // Global settings here
        });
    }, []);


    return (
        <section id="aisection" className=" flex flex-col px-6 py-20 md:px-32 bg-black ">
            <h1 className="text-4xl lg:text-6xl text-center text-[#f38a0b] font-extrabold">Create Package
                <span className="text-white">AI Website</span> </h1>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 px-3 lg:px-0 aos-init aos-animate" data-aos="fade-right"
                data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500">

                {/* .......................... card 1 */}
                <div className=" rounded-lg text-center space-y-11 border-2 p-4 relative bg-[#f38a0b] shadow-lg mt-5 md:mt-0  hover_transtion_effect ">

                    <span className=" bg-[#f38a0b] border-2 rounded-full w-20 h-20 p-3  absolute left-1/2 transform -translate-x-1/2 -top-10 mb-5 flex items-center justify-center text-white text-3xl">

                        <Image src={logo} alt='logo' />


                    </span>

                    <div className="space-y-3 px-3 aos-init aos-animate" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">

                        <div >
                            <div className="flex"><p className="text-3xl font-bold">Zero</p><p className="text-2xl font-bold">(Standar)</p></div>
                            <div className=" font-bold flex"><p className="mr-11 text-3xl">Rs.139K</p><p className="line-through text-2xl">Rs.240K</p>
                            </div>
                        </div>


                        <span className="flex justify-center mb-5 ">
                            <a href="https://wa.me/923066004786" target="blank">
                                <button className="h-12 font-bold rounded-lg flex items-center gap-3 duration-500 bg-black border-2 btn border-primary hover:bg-primary hover:border-transparent hover:text-white">
                                    <svg stroke="currentColor" fill="green" stroke-width="0" viewBox="0 0 448 512" className="text-2xl ml-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                                    </svg><span className="text-button-mobile text-[#f38a0b] mr-3 ">More Information</span></button></a></span>

                        <ul className="text-left list-disc font-bold">
                            <li>GOLD & PREMIUM Theme Design</li>
                            <li>Active Period 6 months</li>
                            <li>Max Revision. 5 points</li>
                            <li>Unlimited Share</li>
                            <li>Quotes / Verse Quotes</li>
                            <li>Directional Buttons</li>
                            {/* <p>✔️ </p> */}


                        </ul>

                    </div>
                </div>

                {/* .......................... card 2 */}

                <div className=" rounded-lg text-center space-y-11 border-2 p-4 relative bg-[#f38a0b] shadow-lg mt-5 md:mt-0  hover_transtion_effect ">

                    <span className=" bg-[#f38a0b] border-2 rounded-full w-20 h-20 p-3  absolute left-1/2 transform -translate-x-1/2 -top-10 mb-5 flex items-center justify-center text-white text-3xl">

                        <Image src={logo} alt='logo' />


                    </span>

                    <div className="space-y-3 px-3 aos-init aos-animate" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">

                        <div >
                            <div className="flex"><p className="text-3xl font-bold">Zero</p><p className="text-2xl font-bold">(Standar)</p></div>
                            <div className=" font-bold flex"><p className="mr-11 text-3xl">Rs.139K</p><p className="line-through text-2xl">Rs.240K</p>
                            </div>
                        </div>


                        <span className="flex justify-center mb-5 ">
                            <a href="https://wa.me/923066004786" target="blank">
                                <button className="h-12 font-bold rounded-lg flex items-center gap-3 duration-500 bg-black border-2 btn border-primary hover:bg-primary hover:border-transparent hover:text-white">
                                    <svg stroke="currentColor" fill="green" stroke-width="0" viewBox="0 0 448 512" className="text-2xl ml-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                                    </svg><span className="text-button-mobile text-[#f38a0b] mr-3 ">More Information</span></button></a></span>

                        <ul className="text-left list-disc font-bold">
                            <li>GOLD & PREMIUM Theme Design</li>
                            <li>Active Period 6 months</li>
                            <li>Max Revision. 5 points</li>
                            <li>Unlimited Share</li>
                            <li>Quotes / Verse Quotes</li>
                            <li>Directional Buttons</li>
                            {/* <p>✔️ </p> */}


                        </ul>

                    </div>
                </div>

                {/* .............. card 3 bg-[#f38a0b] */}
                <div className=" rounded-lg text-center space-y-11 border-2 p-4 relative bg-[#f38a0b] shadow-lg mt-5 md:mt-0  hover_transtion_effect ">

                    <span className=" bg-[#f38a0b] border-2 rounded-full w-20 h-20 p-3  absolute left-1/2 transform -translate-x-1/2 -top-10 mb-5 flex items-center justify-center text-white text-3xl">

                        <Image src={logo} alt='logo' />


                    </span>

                    <div className="space-y-3 px-3 aos-init aos-animate" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">

                        <div >
                            <div className="flex"><p className="text-3xl font-bold">Zero</p><p className="text-2xl font-bold">(Standar)</p></div>
                            <div className=" font-bold flex"><p className="mr-11 text-3xl">Rs.139K</p><p className="line-through text-2xl">Rs.240K</p>
                            </div>
                        </div>


                        <span className="flex justify-center mb-5 ">
                            <a href="https://wa.me/923066004786" target="blank">
                                <button className="h-12 font-bold rounded-lg flex items-center gap-3 duration-500 bg-black border-2 btn border-primary hover:bg-primary hover:border-transparent hover:text-white">
                                    <svg stroke="currentColor" fill="green" stroke-width="0" viewBox="0 0 448 512" className="text-2xl ml-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                                    </svg><span className="text-button-mobile text-[#f38a0b] mr-3 ">More Information</span></button></a></span>

                        <ul className="text-left list-disc font-bold">
                            <li>GOLD & PREMIUM Theme Design</li>
                            <li>Active Period 6 months</li>
                            <li>Max Revision. 5 points</li>
                            <li>Unlimited Share</li>
                            <li>Quotes / Verse Quotes</li>
                            <li>Directional Buttons</li>
                            {/* <p>✔️ </p> */}


                        </ul>

                    </div>
                </div>


                {/* card 4....... */}
                <div className=" rounded-lg text-center space-y-11 border-2 p-4 relative bg-[#f38a0b] shadow-lg mt-5 md:mt-0  hover_transtion_effect ">

                    <span className=" bg-[#f38a0b] border-2 rounded-full w-20 h-20 p-3  absolute left-1/2 transform -translate-x-1/2 -top-10 mb-5 flex items-center justify-center text-white text-3xl">

                        <Image src={logo} alt='logo' />


                    </span>

                    <div className="space-y-3 px-3 aos-init aos-animate" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">

                        <div >
                            <div className="flex"><p className="text-3xl font-bold">Zero</p><p className="text-2xl font-bold">(Standar)</p></div>
                            <div className=" font-bold flex"><p className="mr-11 text-3xl">Rs.139K</p><p className="line-through text-2xl">Rs.240K</p>
                            </div>
                        </div>


                        <span className="flex justify-center mb-5 ">
                            <a href="https://wa.me/923066004786" target="blank">
                                <button className="h-12 font-bold rounded-lg flex items-center gap-3 duration-500 bg-black border-2 btn border-primary hover:bg-primary hover:border-transparent hover:text-white">
                                    <svg stroke="currentColor" fill="green" stroke-width="0" viewBox="0 0 448 512" className="text-2xl ml-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                                    </svg><span className="text-button-mobile text-[#f38a0b] mr-3 ">More Information</span></button></a></span>

                        <ul className="text-left list-disc font-bold">
                            <li>GOLD & PREMIUM Theme Design</li>
                            <li>Active Period 6 months</li>
                            <li>Max Revision. 5 points</li>
                            <li>Unlimited Share</li>
                            <li>Quotes / Verse Quotes</li>
                            <li>Directional Buttons</li>
                            {/* <p>✔️ </p> */}


                        </ul>

                    </div>
                </div>


                {/* ....... */}
            </div>


        </section>
    );
}

export default Pkgweb;
