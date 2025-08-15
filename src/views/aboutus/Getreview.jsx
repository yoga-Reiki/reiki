import React from 'react'
import getReview from '../../assets/img/ReviewCard.png'

function Getreview() {
    return (
        <section className="px-4 xl:px-0 py-8 sm:py-16">
            <div
                className="relative rounded-3xl overflow-hidden"
            >
                {/* Background image */}
                <img
                    src={getReview}
                    alt="Share your experience"
                    className="absolute inset-0 w-full h-full object-cover"
                />


                {/* Content */}
                <div className="relative z-10 flex items-center justify-center text-center px-4 py-12 sm:py-16 md:py-20">
                    <div className="max-w-4xl">
                        <h2 className="text-[#FFFFFF] font-semibold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[56px]">
                            Your experience matters to us
                        </h2>
                        <p className="text-[#F1F1F1] text-xs sm:text-sm md:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto">
                            If Shree Sai Reiki has helped you feel better or more peaceful, please share your thoughts. Your kind words can guide others on their healing path.
                        </p>

                        <div className="mt-6 sm:mt-14 flex justify-center">
                            <div className="relative inline-block rounded-full px-[5px] py-[3px] bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900]">
                                <button className="px-6 sm:px-22.5 py-2 sm:py-3 bg-[#EA7913] text-white rounded-full font-medium hover:bg-[#F39C2C] active:bg-[#EA7913] hover:cursor-pointer transition">
                                    Give Review
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Getreview