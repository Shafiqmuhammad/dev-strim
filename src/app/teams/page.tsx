"use client"
import Image from "next/image";
import Link from "next/link";
import { packages } from "../data/teams";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, buttonVariant } from "../data/motion";
import Head from "next/head";

export default function Teams() {
    return (
        <>
            <Head>
                <title>DevSTRIM | TEAMS</title>
                <meta name="description" content="DevSTRIM offers professional website creation, mobile app development, branding, creative content, and digital marketing solutions. Get high-quality services tailored to your business needs at affordable prices. Enhance your online presence with our luxurious designs and innovative marketing strategies." />
                <meta name="keywords" content="DevSTRIM, website creation, mobile applications, branding, creative content, internet marketing, advertising, digital marketing, affordable web design, app development, business solutions, branding services, luxury quality, low prices, professional websites, online marketing" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.alhamidminerals.com/packages" />
            </Head>
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="py-[40px] relative z-10"
                id="packages"
            >
                <div className="max-w-[800px] mx-auto pt-[20px] pb-[30px]">
                    <motion.h1
                        variants={buttonVariant(0.6)}
                        className="text-center py-4 text-[#f38a0b] text-2xl sm:text-4xl font-bold mb-4 overflow-hidden"
                    >
                        Our Team Members
                    </motion.h1>
                </div>
                <div className="flex justify-center items-center flex-wrap">
                    {packages.map((item, index) => (
                        <motion.div
                            key={item.id}
                            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
                            className="mx-4 border-2 p-4 rounded-2xl mb-6 border-white w-[280px] lg:mx-6"
                        >
                            <Image
                                width={270}
                                height={280}
                                className="h-[270px] w-[280px] object-fill rounded-2xl"
                                src={item.url}
                                alt={item.alt}
                                loading="lazy"
                            />
                            <h1 className="text-2xl font-bold text-[#f38a0b] my-2 md:my-4">{item.heading}</h1>
                            <p className="text-white mb-6">{item.desc}</p>
                            <div className="flex justify-between items-center">
                                <h1 className="text-white font-bold text-2xl">{item.prices}</h1>
                                <Link href="#Contact">
                                    <button className="text-white bg-[#f38a0b] py-2 px-3 text-sm font-bold rounded-[60px] hover:opacity-70 hover:duration-700">Contact Us</button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <Image
                    width={500}
                    height={500}
                    className="z-[-1] w-[100%] h-[100%] absolute inset-0"
                    src="/assets/packages/chromite-al-hamid-minerals.jpeg"
                    alt="banner chromite Al Hamid Minerals"
                    loading="lazy"
                />
                <div className="z-[-1] w-[100%] h-[100%] absolute inset-0 bg-black" />
            </motion.div>
        </>
    );
}




