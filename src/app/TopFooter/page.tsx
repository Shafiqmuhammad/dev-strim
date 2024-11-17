import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterContact from '@/app/FooterContact/page';


const socialMediaIcons = [
    { href: 'https://www.facebook.com/', src: '/images/icons/facebook.png', alt: 'Facebook' },
    { href: 'https://www.instagram.com/devstrim/', src: '/images/icons/insta.png', alt: 'Instagram' },
    { href: 'https://www.youtube.com/@devstrim/', src: '/images/icons/youtube.png', alt: 'YouTube' },
    { href: 'https://www.linkedin.com/in/dev-strim-b3246b339/', src: '/images/icons/linkedin.png', alt: 'LinkedIn' },

    { href: 'https://x.com/', src: '/images/icons/twitter.png', alt: 'Twitter' },
    { href: 'https://www.pinterest.com/devstrim/', src: '/images/icons/Pinterest-logo.png', alt: 'Pinterest' },

];


const Footer: React.FC = () => {
    return (
        <footer className="bg-[#f38a0b] py-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="mb-8  inline-block">
                            <Image
                                src="/images/logo/logo-qurantutoring-lightbg.png"
                                alt="logo"
                                className=" dark:hidden "
                                width={150}
                                height={40}
                            />
                            <Image
                                src="/images/logo/logo-qurantutoring.png"
                                alt="logo"
                                className="hidden  dark:block"
                                width={150}
                                height={40}
                            />
                        </Link>
                        <ul className="space-y-2">
                            <li className="text-gray-800">Email: admin@quranonlinetutoring.com</li>
                            <li className="text-gray-800">Phone: +1 (914) 455-0557</li>
                        </ul>




                        <div className="flex justify-center space-x-4 mb-4">
                            {socialMediaIcons.map((icon) => (
                                <Link href={icon.href} key={icon.alt}>
                                    <Image src={icon.src} alt={icon.alt} width={30} height={30} className="hover:opacity-75 transition-opacity duration-300" />
                                </Link>
                            ))}
                        </div>



                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-blue-500 text-lg font-semibold">About us</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#home" className="text-gray-700 hover:text-blue-500">Home</Link>
                            </li>
                            <li>
                                <Link href="#About" className="text-gray-700 hover:text-blue-500">About Us</Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-gray-700 hover:text-blue-500">Services</Link>
                            </li>
                            <li>
                                <Link href="#packages" className="text-gray-700 hover:text-blue-500">Packages</Link>
                            </li>

                            <li>
                                <Link href="#Contacts" className="text-gray-700 hover:text-blue-500">Register Now</Link>
                            </li>
                            <li>
                                <Link href="/quran-learning-fee" className="text-gray-700 hover:text-blue-500">Fee and Schedule Plan</Link>
                            </li>
                            <li>
                                <Link href="/refund-policy" className="text-gray-700 hover:text-blue-500">Refund Policy</Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-gray-700 hover:text-blue-500">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/" className="text-gray-700 hover:text-blue-500">Blog</Link>
                            </li>
                        </ul>
                    </div>



                    <div className="flex flex-col space-y-4">
                        <h2 className="text-blue-500 text-lg font-semibold">Services</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/courses" className="text-gray-700 hover:text-blue-500">Regular Courses</Link>
                            </li>
                            <li>
                                <Link href="/learn-noorani-qaida-online" className="text-gray-700 hover:text-blue-500">Learn Noorani Qaida Online</Link>
                            </li>
                            <li>
                                <Link href="/memorize-quran-online" className="text-gray-700 hover:text-blue-500">Memorize Quran Online</Link>
                            </li>
                            <li>
                                <Link href="/quran-reading-with-tajweed" className="text-gray-700 hover:text-blue-500">Quran Reading with Tajweed</Link>
                            </li>
                            <li>
                                <Link href="/learn-tafsir-online" className="text-gray-700 hover:text-blue-500">Learn Tafsir Online</Link>
                            </li>

                            <li>
                                <Link href="/learn-arabic-language-online" className="text-gray-700 hover:text-blue-500">Learn Arabic Online</Link>
                            </li>
                            <li>
                                <Link href="/learn-islamic-studies-online" className="text-gray-700 hover:text-blue-500">Learn Islamic Study Online</Link>
                            </li>

                            <li>
                                <Link href="/male-quran-teacher" className="text-gray-700 hover:text-blue-500">Male Quran Teacher</Link>
                            </li>
                            <li>
                                <Link href="/female-quran-teacher" className="text-gray-700 hover:text-blue-500">Female Quran Teacher</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col  space-y-4 ">
                        {/* <h2 className="text-blue-500 text-lg font-semibold">Quick Contact</h2> */}
                        <FooterContact />

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
