import React, { useState } from 'react';
import Img1 from '../../assets/img/Img1.png';
import { PopupModal } from 'react-calendly';

function Consulting() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-9 sm:py-14 md:py-16 px-4 flex justify-center text-[#464646] overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12 items-center md:items-start">
                {/* Image */}
                <div className="w-full lg:w-[550px] xl:w-[720px] flex-shrink-0">
                    <img
                        src={Img1}
                        alt="Consulting"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

                {/* Content */}
                <div className="w-full lg:w-[394px] xl:w-[430px] flex flex-col justify-between h-full">
                    <div>
                        <h2 className="text-2xl md:text-[56px] font-semibold mb-4">Free Consulting</h2>
                        <p className="mb-6 text-sm md:text-lg">
                            Shree Sai Reiki is dedicated to healing, balance, and spiritual growth through the ancient practice of Reiki. We help individuals reconnect with their inner energy through guided treatments, courses, and supportive practices. Whether you're seeking healing or want to become a Reiki practitioner, we’re here to support your journey.
                        </p>
                    </div>

                    <div>
                        <p className="mb-6 text-sm md:text-lg">
                            Free Consulting. Get the Reiki consulting now
                        </p>
                        <div className="relative inline-block rounded-full px-[5px] py-[3px] bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900]">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="inline-flex items-center space-x-1.5 px-5 sm:px-6 py-2 sm:py-3 bg-[#EA7913] text-[#F8F8F8] rounded-full font-medium shadow hover:cursor-pointer hover:bg-[#F39C2C] active:bg-[#EA7913] transition text-base"
                            >
                                Book Free Consulting Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Calendly Popup */}
            <PopupModal
                url="https://calendly.com"
                onModalClose={() => setIsOpen(false)}
                open={isOpen}
                rootElement={document.getElementById("root")}
            />
        </section>
    );
}

export default Consulting;


