import React from 'react'
import getReview from '../../assets/img/ReviewCard.png'

function Experience() {
  return (
    <section className="px-4 xl:px-0 py-8 sm:py-12 lg:py-16">
      <div>
        {/* Mobile: Flex column with full width */}
        <div className="flex flex-col lg:hidden gap-6">
          {/* Left Section - Image */}
          <div className="w-full rounded-3xl overflow-hidden">
            <img
              src={getReview}
              alt="Reiki healing session"
              className="w-full h-full object-contaion min-h-[260px]"
            />
          </div>

          {/* Right Section - Text and Button */}
          <div className="bg-[#F8F8F8] rounded-3xl p-6 sm:p-8 w-full flex flex-col justify-center">
            <div className="max-w-lg">
              <h2 className="text-2xl md:text-3xl font-Raleway text-[#292929] mb-1.5">
                Your experience matters to us
              </h2>
              
              <p className="text-sm sm:text-base text-[#525252] leading-relaxed mb-8">
                If Shree Sai Reiki has helped you feel better or more peaceful, please share your thoughts. Your kind words can guide others on their healing path.
              </p>

              <div className="flex justify-start">
                <div className="relative inline-block rounded-full px-[5px] py-[3px] bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900]">
                  <button className="px-6 sm:px-8 py-2 sm:py-3 bg-[#EA7913] text-white rounded-full font-medium hover:bg-[#F39C2C] active:bg-[#EA7913] hover:cursor-pointer transition">
                    Give Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Fixed widths with 48px gap */}
        <div className="hidden lg:flex gap-12">
          {/* Left Section - Image (792px) */}
          <div className="lg:w-[600px] xl:w-[792px] rounded-2xl overflow-hidden">
            <img
              src={getReview}
              alt="Reiki healing session"
              className="w-full h-full object-contaion min-h-[400px]"
            />
          </div>

          {/* Right Section - Text and Button (400px) */}
          <div className="bg-[#F8F8F8] rounded-2xl px-6 py-4.5 w-[400px] flex flex-col justify-between">
            <div className="max-w-full">
              <h2 className="text-[32px] leading-[40px] font-Raleway text-[#292929] mb-1.5">
                Your experience matters to us
              </h2>
              
              <p className="text-xl text-[#525252] leading-relaxed mb-8">
                If Shree Sai Reiki has helped you feel better or more peaceful, please share your thoughts. Your kind words can guide others on their healing path.
              </p>
            </div>

            <div className="flex justify-start">
              <div className="relative inline-block rounded-full px-[5px] py-[3px] bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900]">
                <button className="px-10 py-3 bg-[#EA7913] text-white rounded-full font-medium hover:bg-[#F39C2C] active:bg-[#EA7913] hover:cursor-pointer transition">
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

export default Experience