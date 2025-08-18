import React from 'react'
import lockIcon from "../../assets/svg-icon/lock.svg"
import validationIcon from "../../assets/svg-icon/validation.svg"
import playIcon from "../../assets/svg-icon/play.svg"

function TherapyDetails() {
    return (
        <section className="py-9 sm:py-14 md:py-16 px-4 xl:px-0 text-[#464646]">
            <div>
                {/* Therapy Details Container - Flexbox Layout */}
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-8 lg:gap-12">
                    {/* Left Side - Introduction Text */}
                    <div className="lg:w-1/2">
                        <div className="mb-12">
                            <h2 className="text-[28px] md:text-4xl font-Raleway"><span className="font-bold">Therapy Details</span></h2>
                            <p className="text-lg sm:text-xl text-[#000000] max-w-2xl mt-4">
                                Discover the healing sessions designed to relax your mind and restore your energy — all starting with a free consultation.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Therapy Details Items */}
                    <div className="lg:w-1/2">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between bg-[#F8F8F8] rounded-2xl pr-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#EA7913] text-[#F8F8F8] rounded-2xl px-4.5 py-8.5 text-center">
                                        <div className="text-2xl font-semibold">01</div>
                                        <div className="text-xs leading-none">Day</div>
                                    </div>
                                    <div className='py-4 pr-4'>
                                        <h3 className="text-lg md:text-2xl font-semibold text-[#525252]">Water Music Therapy</h3>
                                        <p className="text-xs md:text-sm pr-5">Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?</p>
                                    </div>
                                </div>
                                <img
                                    src={playIcon}
                                    alt="toggle icon"
                                    className="w-7 h-7 transition-transform duration-300"
                                />
                            </div>

                            <div className="flex items-center justify-between bg-[#F8F8F8] rounded-2xl pr-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#EA7913] text-[#F8F8F8] rounded-2xl px-4.5 py-8 text-center">
                                        <div className="text-2xl font-semibold">02</div>
                                        <div className="text-xs leading-none">Day</div>
                                    </div>
                                    <div className='py-4 pr-4'>
                                        <h3 className="text-lg md:text-2xl font-semibold text-[#525252]">Water Music Therapy</h3>
                                        <p className="text-xs md:text-sm pr-5">Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?</p>
                                    </div>
                                </div>
                                <img
                                    src={playIcon}
                                    alt="toggle icon"
                                    className="w-7 h-7 transition-transform duration-300"
                                />
                            </div>

                            <div className="flex items-center justify-between bg-[#F8F8F8] rounded-2xl pr-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#EA7913] text-[#F8F8F8] rounded-2xl px-4.5 py-8 text-center">
                                        <div className="text-2xl font-semibold">03</div>
                                        <div className="text-xs leading-none">Day</div>
                                    </div>
                                    <div className='py-4 pr-4'>
                                        <h3 className="text-lg md:text-2xl font-semibold text-[#525252]">Water Music Therapy</h3>
                                        <p className="text-xs md:text-sm pr-5 flex items-center gap-1">
                                            <img
                                                src={validationIcon}
                                                alt="toggle icon"
                                                className="w-3 h-3 transition-transform duration-300"
                                            />
                                            Login & Unlock all music therapy audios
                                        </p>
                                    </div>
                                </div>
                                <div className="text-gray-400 text-lg">
                                    <img
                                        src={lockIcon}
                                        alt="toggle icon"
                                        className="w-7 h-7 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TherapyDetails