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



function HomePage() {


  return (
    <>
      <div className="fixed top-0">
        <Nav />

      </div>



      <div className="">
        <Banner />
      </div>

      <div className="">
        <About />
      </div>

      <div className="">
        <Services />

      </div>

      <div className="" >
        <Packages />
      </div>

      <div className="" >
        <Privacy />
      </div>

      <div className="" >
        <Disclaimer />
      </div>

    </>
  );
}

export default HomePage;


