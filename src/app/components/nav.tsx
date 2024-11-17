'use client'
import Link from "next/link";
import Image from "next/image";

import logoPic from '../../../public/Untitled-d26J7iAU3-transformed.png'


export default function Nav() {
  return (

    <nav className="flex bg-black p-3 sticky top-0">
      <div className="flex  items-center flex-shrink-0 text-white mr-6">
        <figure className="max-w-lg" >

          <Image
            src={logoPic}
            alt={"Panaverse Logo"}
            height={30}
            width={30}

            className="rounded-full" />

        </figure>
        <span className="font-semibold text-xl tracking-tight " style={{ paddingLeft: "10px" }} > Dev STRIM</span>
      </div>




      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">

        <div className="text-xl lg:flex-grow font-semibold tracking-tight" >

          <a href="#home" className="block mt-4 lg:inline-block lg:mt-0 text-[#f38a0b] hover:text-white mr-4">
            Home
          </a>
          <a href="#About" className="block mt-4 lg:inline-block lg:mt-0 text-[#f38a0b] hover:text-white mr-4">
            About
          </a>
          <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 text-[#f38a0b] hover:text-white mr-4">
            Services
          </a>
          <a href="#packages" className="block mt-4 lg:inline-block lg:mt-0 text-[#f38a0b] hover:text-white mr-4">
            Packages
          </a>

          <a href="#Contacts" className="block mt-4 lg:inline-block lg:mt-0 text-[#f38a0b] hover:text-white mr-4">
            Contact Us
          </a>
          <a href="#Privacy" className="block mt-4 lg:inline-block lg:mt-0 text-[#f38a0b] hover:text-white mr-4">
            Privacy
          </a>
          <a href="#Disclaimer" className="block mt-4 lg:inline-block lg:mt-0 text-[#f38a0b] hover:text-white mr-4">
            Dislcaimer
          </a>


        </div>
        <div>
          <a href="#" className="inline-block text-sm px-4  py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-700 hover:bg-white mt-4 lg:mt-0">Join us</a>
        </div>
      </div>
    </nav>

  )
}