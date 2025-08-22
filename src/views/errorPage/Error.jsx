import React from "react";
import { Link } from "react-router-dom";
import leftImage from "../../assets/img/error yoga 1.png";
import RightImage from "../../assets/img/error yoga 2.png";

function Error() {
  return (
    <div className="overflow-hidden max-w-[1440px] mx-auto py-9 sm:py-14 md:pt-20 md:pb-28 px-4 xl:px-[100px]">
      <section className="flex flex-col lg:flex-row items-center gap-6">

        {/* Left Image */}
        <div className="w-full lg:w-1/4 flex justify-center">
          <img
            src={leftImage}
            alt="Yoga Left"
            className="rounded-2xl object-cover max-h-[300px] md:max-h-[400px] w-full md:w-auto"
          />
        </div>

        {/* Center Content */}
        <div className="bg-[#F8F8F8] rounded-2xl px-6 sm:px-10 py-10 sm:py-16 text-center w-full lg:w-2/3 h-auto md:h-[500px] lg:h-[600px] flex flex-col justify-center">
          <h1 className="text-[64px] sm:text-[84px] md:text-[104px] leading-tight font-delcy text-[#656565]">
            404
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-Raleway text-[#7C7C7C]">
            Oops! Page Not Found
          </p>
          <div className="flex justify-center pt-8 sm:pt-12">
            <div className="relative inline-block rounded-full p-[3px] bg-[linear-gradient(90deg,_rgba(255,121,0,1)_0%,_rgba(234,211,190,1)_50%,_rgba(255,121,0,1)_100%)]">
              <Link to="/">
                <button className="inline-flex items-center space-x-1.5 px-6 sm:px-6 py-3 sm:py-3 bg-[#EA7913] text-[#F8F8F8] rounded-full font-medium shadow hover:bg-[#F39C2C] active:bg-[#EA7913] hover:cursor-pointer transition text-sm sm:text-base w-full h-full">
                  <span>Go to Home</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/4 flex justify-center">
          <img
            src={RightImage}
            alt="Yoga Right"
            className="rounded-2xl object-cover max-h-[300px] md:max-h-[400px] w-full md:w-auto"
          />
        </div>
      </section>
    </div>
  );
}

export default Error;
