import React from 'react'
import therapyHero from "../../assets/img/therapyHero.png"

function HeroTherapy() {
    return (
        <div>
            <section className="relative rounded-3xl overflow-hidden mx-3.5 mt-2 min-h-[500px] sm:min-h-[600px] lg:min-h-[735px]">
                {/* Background Image */}
                <img
                    src={therapyHero}
                    alt="Reiki healing session"
                    className="absolute inset-0 w-full h-full object-cover bg-[#cfd8dc]/20 z-10"
                />

                {/* Content */}
                <div className="relative z-20 flex flex-col justify-between pt-4 sm:pt-8 lg:pt-16 pl-4 sm:pl-8 lg:pl-20 pr-2 sm:pr-3 lg:pr-5 pb-2 sm:pb-3 lg:pb-5 min-h-[500px] sm:min-h-[600px] lg:min-h-[735px]">

                    <div className="flex-1 max-w-4xl lg:max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[104px] leading-tight lg:leading-[112px] font-delcy text-[#F8F8F8] font-light">
                            Music Therapy
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-white/90 mt-4 sm:mt-6 mb-6 sm:mb-8 max-w-lg lg:max-w-[445px] leading-relaxed">
                            Shree Sai Reiki is dedicated to healing, balance, and spiritual growth through the ancient practice of Reiki. We help individuals reconnect with their inner energy through guided treatments, courses, and supportive practices. Whether you're seeking healing or want to become a Reiki practitioner, we’re here to support your journey.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroTherapy