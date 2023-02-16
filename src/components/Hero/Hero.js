import React from "react";
import logo from "../../images/logo.svg";
import lock from "../../images/componentProps/Hero/lock.png";
import HeroBg from "../../images/componentProps/Hero/heroBg.svg";

export default function Hero() {
  return (
    <>
      <section className="w-full h-[100vh]" id="heroSection">
        <img
          src={HeroBg}
          alt=""
          srcset=""
          className="absolute top-0 right-0 z-[-10]"
        />
        <div className="absolute left-[10%] top-[38px]" id="logo">
          <img src={logo} alt="" srcset="" className="w-[72px] h-[30px]" />
        </div>
        <div className="flex justify-center flex-col w-full h-full">
          <div className="w-[50vw] ">
            <h1 className="text-7xl font-HeadingFontFamily flex flex-col">
              <span>
                <span>Fast &</span>
                <span className="px-10"></span>
                <span>Secure </span>
              </span>
              <span>platform for market</span>
              <span>Neutral strategies</span>
            </h1>
          </div>
          <h4 className="font-LinkFontHeading text-[28px] tracking-wider font-thin opacity-50 pt-[25px] uppercase">
            Trade like a hedge fund!
          </h4>
          <div className="flex mt-[72px]">
            <button className="flex justify-center items-center w-[224px] h-[64px] border-[1px] rounded-[6px]  bg-SecondaryColor text-black">
              Get started
            </button>
            <button className="flex justify-center items-center w-[224px] h-[64px] border-[1px] rounded-[6px] ml-[30px]">
              Contact us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
