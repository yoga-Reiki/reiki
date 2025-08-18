import React from 'react'
import therapy1 from "../../assets/img/therapy1.png"
import errorValidate from "../../assets/svg-icon/errorValidate.svg"
import { useNavigate } from 'react-router-dom'

function GetTherapy() {

    const navigate = useNavigate()

    return (
        <div className="py-9 sm:py-14 md:py-16 px-4 xl:px-0">
            <h2 className="text-3xl md:text-5xl font-bold text-[#464646] pb-12">
                Get Free Therapy Now
            </h2>
            <div className="top-0 left-0 w-full transition-all duration-500 ease-out" >
                <div
                    className="relative bg-cover bg-center bg-no-repeat p-2 rounded-3xl overflow-hidden h-[620px] md:h-[400px]"
                    style={{ backgroundImage: `url(${therapy1})` }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 h-full">
                        <div className="w-full md:w-[80%] lg:w-1/2 h-full"></div>
                        <div className="w-full md:w-full lg:w-2/5 bg-white rounded-3xl h-full">
                            <div className="flex flex-col justify-between p-4.5 h-[270px] md:h-[390px]">
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
                                    <div className="relative inline-block rounded-full px-[4px] py-[2.5px] hover:bg-none bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900] hover:cursor-pointer">
                                        <button onClick={() => navigate("/therapy-detail")} className="px-5 sm:px-6 py-2 sm:py-3 bg-[#EA7913] text-[#F1F1F1] rounded-full font-medium shadow hover:cursor-pointer hover:bg-[#F39C2C] active:bg-[#EA7913] transition text-base">
                                            Get 21 days free music therapy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success block */}
            {/* <div className="top-0 left-0 w-full transition-all duration-500 ease-out" >
                <div
                    className="relative bg-cover bg-center bg-no-repeat p-2 rounded-3xl overflow-hidden h-[620px] md:h-[400px]"
                    style={{ backgroundImage: `url(${therapy1})` }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 h-full">
                        <div className="w-full md:w-[80%] lg:w-1/2 h-full"></div>
                        <div className="w-full md:w-full lg:w-2/5 bg-white rounded-3xl h-full">
                            <div className="flex flex-col justify-between p-4.5 h-[270px] md:h-[390px]">
                                <div className='text-start'>
                                    <h3 className="text-xl md:text-[32px] md:leading-[40px] font-Raleway text-[#292929] mb-1 ">
                                        Success !
                                    </h3>
                                    <p className="text-[#525252] text-md md:text-xl mb-4">
                                        You’ve unlocked your path to healing. Let the power of music guide your peace.
                                    </p>
                                </div>
                                <div>
                                    <div className="relative inline-block rounded-full px-[4px] py-[2.5px] hover:bg-none bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900] hover:cursor-pointer">
                                        <button className="px-5 sm:px-6 py-2 sm:py-3 bg-[#EA7913] text-[#F1F1F1] rounded-full font-medium shadow hover:cursor-pointer hover:bg-[#F39C2C] active:bg-[#EA7913] transition text-base">
                                            Start Your First Session
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* error message block block */}
            {/* <div className="top-0 left-0 w-full transition-all duration-500 ease-out" >
                <div
                    className="relative bg-cover bg-center bg-no-repeat p-2 rounded-3xl overflow-hidden h-[620px] md:h-[400px]"
                    style={{ backgroundImage: `url(${therapy1})` }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 h-full">
                        <div className="w-full md:w-[80%] lg:w-1/2 h-full"></div>
                        <div className="w-full md:w-full lg:w-2/5 bg-white rounded-3xl h-full">
                            <div className="flex flex-col justify-between p-4.5 h-[270px] md:h-[390px]">
                                <div className='text-start'>
                                    <h3 className="text-xl md:text-[32px] md:leading-[40px] font-Raleway text-[#292929] mb-1 ">
                                        Get Free 21 days music therapy
                                    </h3>
                                    <p className="text-[#525252] text-md md:text-xl mb-4">
                                        Start now and see the benefits of music therapy
                                    </p>
                                    <div className="flex items-center border border-[#EF4444] bg-[#FEF2F2] text-[#656565] px-4 py-3 rounded-xl text-sm">
                                        <img src={errorValidate} alt="error icon" className="w-5 h-5 mr-2" />
                                        <span>Login is required to start music therapy</span>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                                        <span className="text-lg md:text-[32px] md:leading-[40px] font-Raleway text-[#292929]">Free</span>
                                        <span className="text-sm text-red-400 line-through">$120</span>
                                    </div>
                                    <div className="relative inline-block rounded-full px-[4px] py-[2.5px] hover:bg-none bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900] hover:cursor-pointer">
                                        <button className="px-5 sm:px-6 py-2 sm:py-3 bg-[#EA7913] text-[#F1F1F1] rounded-full font-medium shadow hover:cursor-pointer hover:bg-[#F39C2C] active:bg-[#EA7913] transition text-base">
                                            Get 21 days free music therapy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default GetTherapy