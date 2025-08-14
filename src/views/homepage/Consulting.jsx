import React from 'react';
import Img1 from '../../assets/img/Img1.png';

function Consulting() {
    return (
        <section className="py-9 sm:py-14 md:py-16 px-4 flex justify-center text-[#464646]">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 xl:gap-16 items-center md:items-start">
                {/* Image */}
                <div className="w-full lg:w-[550px] xl:w-[756px] flex-shrink-0">
                    <img
                        src={Img1}
                        alt="Consulting"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                {/* Content */}
                <div className="w-full lg:w-[394px] xl:w-[580px] flex flex-col justify-between h-full">
                    <div>
                        <h2 className="text-2xl md:text-[56px] font-semibold mb-4">Free Consulting</h2>
                        <p className="mb-6 text-sm md:text-lg">
                            Shree Sai Reiki is dedicated to healing, balance, and spiritual growth through the ancient practice of Reiki. We help individuals reconnect with their inner energy through guided treatments, courses, and supportive practices. Whether you're seeking healing or want to become a Reiki practitioner, we’re here to support your journey.
                        </p>
                    </div>
                    <div>
                        <p className="mb-6 text-sm md:text-lg">
                            Free Consulting. Get the Reike consulting now
                        </p>
                        <div className="relative inline-block rounded-full px-[5px] py-[3px] hover:bg-none bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900]">
                            <button className="inline-flex items-center space-x-1.5 px-5 sm:px-6 py-2 sm:py-3 bg-[#EA7913] text-[#F8F8F8] rounded-full font-medium shadow hover:cursor-pointer hover:bg-[#F39C2C] active:bg-[#EA7913] transition text-base">
                                Book Free Consulting Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Consulting;