import { Route, Routes, useLocation, Navigate, } from "react-router-dom";
import React, { Suspense } from "react";
import Link from "next/link";
import Services from "./components/Services";
import Nav from "./components/nav";
import Banner from "./components/Banner";
import Packages from "./components/packages/packages";
import Privacy from "./components/privacy";
import Disclaimer from "./components/Disclaimer";
import About from "./components/About";
import Teams from "./teams/page";
import Contact from "./Contacts/page";
import Newsletter from "./components/Newsletter";
import Footer from "./TopFooter/page";



function HomePage() {


  return (
    <>
      <div className="fixed top-0">
        <Nav />
      </div>

      <div className=" bg-black">
        <Banner />
      </div>

      <div className="bg-black" >
        <Packages />
      </div>

      <div className="bg-black">
        <About />
      </div>

      <div className="bg-black">
        <Teams />

      </div>
      <div className="bg-black">
        <Services />
      </div>
      <div className="bg-black">
        <Contact />
      </div>
      <div className="bg-black">
        <Newsletter />
      </div>
      <div className="bg-black">
        <Footer />
      </div>


      {/* <div className="" >
        <Privacy />
      </div>

      <div className="" >
        <Disclaimer />
      </div> */}

    </>
  );
}

export default HomePage;


