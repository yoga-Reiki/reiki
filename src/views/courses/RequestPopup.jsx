import React from 'react'
import PersonImage from "../../assets/img/Getouch.png"

function RequestPopup({ onClose, onConfirm }) {
    return (
        <div>
            <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center p-4 text-[#464646]">
                <div
                    className="relative w-full p-3 lg:max-w-4xl xl:max-w-6xl min-h-[560px] rounded-3xl overflow-hidden shadow-lg flex"
                    style={{
                        backgroundImage: `url(${PersonImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="ml-auto w-full md:w-96 lg:w-1/2 bg-[#F8F8F8] rounded-xl p-6 md:px-8 md:py-6 lg:px-12 lg:py-8 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl md:text-[40px] font-Raleway Raleway-bold mb-2">Order Request</h2>
                            <p className="mb-2 text-xl">You are requesting for this Course</p>
                            <p className="text-lg text-[#989898]">
                                After requesting for the order. We'll contact you within 24 hours. Thank you
                            </p>
                        </div>
                        <div className="flex flex-col xl:flex-row gap-3">
                            <button
                                className="bg-[#FBEEDC] w-full text-[#464646] py-3 xl:py-2 rounded-full font-medium cursor-pointer hover:bg-"
                                onClick={onClose}
                            >
                                No, I don’t want
                            </button>
                            <div className="w-full relative inline-block rounded-full px-[4px] py-[2.5px] hover:bg-none bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900] hover:cursor-pointer">
                                <button className="w-full py-2 sm:py-3 bg-[#EA7913] text-[#F1F1F1] rounded-full font-medium shadow cursor-pointer hover:bg-[#F39C2C] active:bg-[#EA7913] transition text-base">
                                    Yes, Request for order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RequestPopup