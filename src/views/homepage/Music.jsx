import React from 'react';
import musicTherapy from '../../assets/img/musicTherapy.png';
import musicCard from "../../assets/img/muiscCard.png"
import { useNavigate } from 'react-router-dom';

function Music() {

    const navigate = useNavigate()

    return (
        <section className="w-full py-9 sm:py-14 md:py-16 px-4 xl:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Title & Description */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div className="bg-[#F8F8F8] rounded-4xl p-6 md:p-9 h-[345px] flex flex-col justify-between">
                        <h2 className="text-3xl md:text-[56px] font-bold text-[#464646]">Music Therapy</h2>
                        <p className="text-[#464646] text-base md:text-lg">
                            Shree Sai Reiki is dedicated to healing, balance, and spiritual growth through the ancient practice of Reiki. We help individuals reconnect with their inner energy through guided treatments, courses, and supportive practices. Whether you're seeking healing or want to become a Reiki practitioner, we’re here to support your journey.
                        </p>
                    </div>
                    <img
                        src={musicTherapy}
                        alt="Music Therapy"
                        className="object-cover h-[319px] rounded-4xl"
                    />
                </div>
                {/* Right Column: Offer Card */}
                <div className="flex max-w-[496px] mx-auto lg:mx-0">
                    <div className="relative overflow-hidden">
                        <img
                            src={musicCard}
                            alt="Therapy Session"
                            className="w-full h-[617px] md:h-full object-cover rounded-4xl"
                        />
                        <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-white bg-opacity-90 backdrop-blur-md rounded-3xl text-center">
                            <div className="flex-1 flex flex-col justify-between p-4.5 h-[270px] md:h-[390px]">
                                <div className='text-start'>
                                    <h3 className="text-xl md:text-[32px] md:leading-[40px] font-Raleway text-[#292929] mb-1 ">
                                        Get Free 21 days music therapy
                                    </h3>
                                    <p className="text-[#525252] text-md md:text-xl mb-4">
                                        Start now and see the benefits of music therapy
                                    </p>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                                        <span className="text-lg md:text-[32px] md:leading-[40px] font-Raleway text-[#292929]">Free</span>
                                        <span className="text-sm text-red-400 line-through">$120</span>
                                    </div>
                                    <div className="relative inline-block rounded-full px-[4px] py-[2.5px] bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900] hover:cursor-pointer hover:from-[#F39C2C] hover:via-[#F39C2C] hover:to-[#F39C2C] active:from-[#EA7913] active:via-[#EA7913] active:to-[#EA7913]">
                                        <button onClick={() => navigate('/music-therapy')} className="px-5 sm:px-6 py-2 sm:py-3 bg-[#EA7913] text-[#F1F1F1] rounded-full font-medium hover:cursor-pointer hover:bg-[#F39C2C] active:bg-[#EA7913] transition text-base">
                                            Get 21 days free music therapy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Music;