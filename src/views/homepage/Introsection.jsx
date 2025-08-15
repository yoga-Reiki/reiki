import React from 'react'
import image1 from '../../assets/img/Img1.png'
import { IoIosArrowRoundForward } from "react-icons/io";

function Introsection() {
    return (
        <section className="relative w-full bg-white px-4 xl:px-0 py-9 sm:py-14 md:py-16">
            <div className="flex flex-col items-center text-center">
                {/* Heading */}
                <h1 className="font-delcy text-[#7C7C7C] text-4xl sm:text-4xl md:text-5xl lg:text-[64px] xl:text-[96px] leading-tight lg:leading-[80px] xl:leading-[104px] mb-4 sm:mb-6">
                    Shree Sai Yog & Reiki <br className="hidden sm:block" />
                    Healing Centre
                </h1>

                <div className="flex flex-col items-center max-w-2xl md:max-w-3xl xl:max-w-4xl -mt-8 md:-mt-11 lg:-mt-14">
                    {/* Image */}
                    <img
                        src={image1}
                        alt="Reiki Practitioner"
                        className="w-56 sm:w-64 md:w-80 lg:w-[400px] xl:w-[478px] object-cover mb-6 sm:mb-8"
                    />

                    {/* Description */}
                    <p className="my-4 sm:my-8 text-[#464646] text-sm sm:text-lg md:text-xl leading-relaxed">
                        Shree Sai Reiki is dedicated to healing, balance, and spiritual growth
                        through the ancient practice of Reiki. We help individuals reconnect
                        with their inner energy through guided treatments, courses, and
                        supportive practices. Whether you're seeking healing or want to become
                        a Reiki practitioner, we’re here to support your journey.
                    </p>

                    {/* Button */}
                    <div className="relative inline-block rounded-full px-[5px] py-[3px] hover:bg-none bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900] mt-2">
                        <button className="inline-flex items-center space-x-1.5 px-5 sm:px-6 py-2 sm:py-3 bg-[#EA7913] text-[#F8F8F8] rounded-full font-medium shadow hover:cursor-pointer hover:bg-[#F39C2C] active:bg-[#EA7913] transition text-base w-full h-full">
                            <span>Know More</span>
                            <IoIosArrowRoundForward size={28} />  
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introsection