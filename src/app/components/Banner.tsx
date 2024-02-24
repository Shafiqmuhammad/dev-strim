import Image from 'next/image';
import React from 'react';
import { LuShoppingCart } from "react-icons/lu";
import bannerImg from "../../../public/banner-msn-production.8e716164a6fa01f89e4471859fd814c8.svg"
import imgHero from "/public/logo.png"

import Link from 'next/link';
import { Londrina_Outline } from 'next/font/google'

const londrina = Londrina_Outline({ subsets: ['latin'], weight: '400' })
// const inter = Inter({ subsets: ['latin'] })

const Banner = () => {
    return (
        <section id="home" className='flex flex-col gap-y-10 lg:flex-row md:flex-row py-8 bg-black text-[#f38a0b] '>
            {/* LEFT DIV */}
            <div className='flex-1'>

                {/* <h1 className='text-[#f38a0b] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl mt-6 text-white font-san'> */}
                <p className='text-[#f38a0b] mt-4 font-extrabold text-5xl font-londrina-outline '>Dev STRIM</p>

                <div className="flex items-center space-x-2 pt-4 md:pt-7">
                    <hr className="w-6 border-t-4 border-[#f38a0b] md:w-14" />
                    <h5 className="font-mono text-xl font-bold text-white">Empower Imagination</h5>
                    <hr className="w-6 border-t-4 border-[#f38a0b] md:w-14" />
                </div>

                <p className='leading-10 [&:not(:first-child)]:mt-6 text-justify pr-32 text-3xl font-bold font-sans'>
                    DevSTRIM is a company that provides Website creation services, Mobile Applications, Branding & Creative Content, as well as Internet Marketing & Advertising according to your business needs at low prices and luxurious quality.
                </p>
                {/* <StartShopping /> */}

                <Link href={"/StartShopping"} >

                    <button className='flex items-center justify-center rounded-2xl text-black font-bold bg-[#f38a0b] py-3 px-4 mt-4 shadow '

                        type="button" >
                        <LuShoppingCart className='mx-2 text-blue-800 font-bold' />
                        Get Stated Now
                    </button>
                </Link>
                <div className='flex gap-10 pl-5 py-5 justify-start'>
                    {/* <Image src={featured1} width={100} height={35} alt='img' />
                    <Image src={featured2} width={100} height={35} alt='img' />
                    <Image src={featured3} width={100} height={35} alt='img' />
                    <Image src={featured4} width={100} height={35} alt='img' /> */}
                </div>
            </div>

            {/* RIGHT DIV */}
            <div className="  w-[600px] h-[600px] md:w-[450px] md:h-[450px]   rounded-full  ">
                {/* <Image src={imgHero} className='lg:w-[500px] lg:h-[500px] mt-[-20px]' width={650} height={650} alt={'Home Page Image'} /> */}

                {/* <Image width="211" height="217" src="https://agentieco.themetags.com/wp-content/uploads/2023/05/circle-text.png" alt="" id="IMG_6" className='animate-spin' style={{animationDuration:'10s'}} /> */}

                <div id="DIV_4" >
                    <Image width="1200" height="1200" src={bannerImg} alt="" id="IMG_6" className='animate-bounce mr-20' style={{ animationDuration: '30s' }} />
                </div>
            </div>
        </section>

    )
}

export default Banner