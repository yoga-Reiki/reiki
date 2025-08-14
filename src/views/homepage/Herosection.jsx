import React from 'react'
import Hero_background from '../../assets/video/bac.mp4'
import { IoIosArrowRoundForward } from "react-icons/io";
import Hero_avtar from '../../assets/img/hero avtar.png'
import icon1 from '../../assets/img/Reiki Symbols 1.png'
import icon2 from '../../assets/img/Reiki Symbols 2.png'
import icon3 from '../../assets/img/Reiki Symbols 3.png'
import icon4 from '../../assets/img/Reiki Symbols 4.png'
import icon5 from '../../assets/img/Reiki Symbols 5.png'

function Herosection() {
  return (
    <section className="relative rounded-3xl overflow-hidden mx-3.5 mt-2 min-h-[500px] sm:min-h-[600px] lg:min-h-[735px]">
      {/* Background Video */}
      <video
        src={Hero_background}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#cfd8dc]/20 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col lg:flex-row p-4 sm:p-8 lg:p-16 min-h-[500px] sm:min-h-[600px] lg:min-h-[735px]">
        {/* Left: Text */}
        <div className="flex-1 max-w-4xl">
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <span className="text-lg sm:text-2xl md:text-3xl lg:text-[36px] font-extralight text-[#F8F8F8] font-delcy">
              Experience the Power of
            </span>
            <div className="relative inline-block rounded-3xl p-[0.8px] animate-spin-slow bg-[conic-gradient(#EA7913_0deg,transparent_90deg,#EA7913_180deg,transparent_270deg,#EA7913_360deg)]">
              <img
                src={Hero_avtar}
                alt="avatar"
                className="rounded-3xl w-16 h-6 sm:w-16 sm:h-10 md:w-24 md:h-10 lg:w-32 lg:h-12 object-cover"
              />
            </div>
          </div>
          <h1 className="text-[56px] font-light sm:text-5xl md:text-7xl lg:text-[104px] leading-tight lg:leading-[112px] font-delcy text-[#EA7913]">
            Reiki <span className="text-[#F8F8F8]">Healing</span>
          </h1>
          <p className="text-xs sm:text-lg text-white/80 mt-2 mb-6 sm:mb-8 max-w-md">
            Balance your energy, reduce stress, and awaken inner healing with guided Reiki sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start w-full sm:w-auto">
            <div className="relative inline-block rounded-full px-[4px] py-[2px] hover:bg-none bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900] hover:cursor-pointer">
              <button className="px-5 sm:px-6 py-1.5 sm:py-3 bg-[#EA7913] text-[#F8F8F8] rounded-full font-medium shadow hover:cursor-pointer hover:bg-[#F39C2C] active:bg-[#EA7913] transition text-base">
                Get 21 days free music therapy
              </button>
            </div>
            <button className="px-5 sm:px-6 py-1.5 sm:py-3 bg-transparent text-[#F8F8F8] rounded-full text-sm border-2 border-white hover:bg-white hover:text-[#EA7913] hover:cursor-pointer transition">
              Free Consulting
            </button>
          </div>
        </div>
      </div>

      {/* Bottom icons */}
      <div className="absolute bottom-2 sm:bottom-4 right-1 sm:right-5 flex gap-2 sm:gap-4 md:gap-6 z-30">
        {[icon1, icon2, icon3, icon4, icon5].map((icon, idx) => (
          <div key={idx} className="flex justify-end">
            <img
              src={icon}
              alt={`icon${idx + 1}`}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Herosection