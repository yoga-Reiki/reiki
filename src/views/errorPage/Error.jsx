import React from "react";
import { Link } from "react-router-dom";
import leftImage from "../../assets/img/error yoga 1.png";
import RightImage from "../../assets/img/error yoga 2.png";

function Error() {
  return (
    <div className="overflow-hidden max-w-[1440px] mx-auto px-0 xl:px-[100px]">
      <section className="flex items-center min-h-screen gap-6">

        {/* Left Image */}
        <div className="h-auto md:h-[400px] flex justify-center">
          <img
            src={leftImage}
            alt="Yoga Left"
            className="rounded-2xl object-cover max-h-[400px] w-full md:w-auto"
          />
        </div>

        {/* Center Content */}
        <div className="bg-[#F8F8F8] rounded-2xl px-10 py-16 text-center w-full max-w-[660px] h-auto md:h-[600px] flex flex-col justify-center">
          <h1 className="text-[104px] leading-[114px] font-bold font-delcy text-[#656565]">404</h1>
          <p className="text-lg font-Raleway text-[#7C7C7C]">Oops! Page Not Found</p>
          <div className="flex justify-center">
            <div className="relative inline-block rounded-full p-[3px] bg-[linear-gradient(90deg,_rgba(255,121,0,1)_0%,_rgba(234,211,190,1)_50%,_rgba(255,121,0,1)_100%)]">
              <button className="inline-flex items-center space-x-1.5 px-6 py-1.5 bg-[#EA7913] text-[#F8F8F8] rounded-full font-medium shadow hover:bg-[#F39C2C] active:bg-[#EA7913] hover:cursor-pointer transition text-sm w-full h-full">
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="h-auto md:h-[400px] flex justify-center">
          <img
            src={RightImage}
            alt="Yoga Right"
            className="rounded-2xl object-cover max-h-[400px] w-full md:w-auto"
          />
        </div>
      </section>
    </div>
  );
}

export default Error;
