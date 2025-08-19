import React from 'react'
import ContactHero from "../../assets/img/ContactHero.png"

function HeroContact() {
    return (
        <div>
            <section className="relative rounded-3xl overflow-hidden mx-3.5 mt-2 min-h-[500px] sm:min-h-[600px] lg:min-h-[513px]">
                {/* Background Image */}
                <img
                    src={ContactHero}
                    alt="Reiki healing session"
                    className="absolute inset-0 w-full h-full object-cover bg-[#cfd8dc]/20 z-10"
                />

                {/* Content */}
                <div className="relative z-20 flex flex-col justify-between pt-4 sm:pt-8 lg:pt-16 pl-4 sm:pl-8 lg:pl-20 pr-2 sm:pr-3 lg:pr-5 pb-2 sm:pb-3 lg:pb-5 min-h-[500px] sm:min-h-[600px] lg:min-h-[513px]">

                    <div className="flex-1 max-w-4xl lg:max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[104px] leading-tight lg:leading-[112px] font-delcy text-[#FFFFFF] font-light">
                            Contact Us
                        </h1>
                        <p className="text-sm sm:text-base md:text-base text-[#F8F8F8] mt-4 sm:mt-6 mb-6 sm:mb-8 max-w-lg leading-relaxed">
                            Whether you have questions about Reiki, need help choosing the right course, or want to schedule a healing session—just reach out.
                            Our team is ready to support your spiritual and wellness journey.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroContact