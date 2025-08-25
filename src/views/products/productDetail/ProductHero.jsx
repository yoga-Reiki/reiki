import React from 'react'
import productHero from "../../../assets/img/productHero.png"

function ProductDetailHero() {
    return (
        <div>
            <section className="relative rounded-3xl overflow-hidden mx-3.5 mt-2 min-h-[500px] sm:min-h-[600px] lg:min-h-[513px]">
                {/* Background Image */}
                <img
                    src={productHero}
                    alt="Reiki healing session"
                    className="absolute inset-0 w-full h-full object-cover bg-[#cfd8dc]/20 z-10"
                />

                {/* Content */}
                <div className="relative z-20 flex flex-col justify-between pt-4 sm:pt-8 lg:pt-16 pl-4 sm:pl-8 lg:pl-20 pr-2 sm:pr-3 lg:pr-5 pb-2 sm:pb-3 lg:pb-5 min-h-[500px] sm:min-h-[600px] lg:min-h-[513px]">

                    <div className="flex-1 max-w-4xl lg:max-w-5xl">
                        <h1 className="pb-4 md:pb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[104px] leading-tight lg:leading-[112px] font-delcy text-[#FFFFFF] font-light">
                            Reiki Full Courses 
                        </h1>
                        <p className="text-sm sm:text-base md:text-base text-[#F8F8F8] mt-4 sm:mt-6 mb-6 sm:mb-8 max-w-md leading-relaxed">
                            Start your spiritual journey with Reiki Level I. Learn how to heal your body, mind, and emotions through the power of universal energy.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetailHero