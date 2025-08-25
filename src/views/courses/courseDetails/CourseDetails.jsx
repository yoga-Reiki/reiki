import React, { useState } from 'react'
import courseDetail1 from "../../../assets/img/courseDetail1.png"
import RequestPopup from '../RequestPopup';
import { Link, useParams } from 'react-router-dom';
import { MdArrowForwardIos } from "react-icons/md";

function CourseDetails() {
    const [showModal, setShowModal] = useState(false);
    const { courcesid } = useParams()

    const handleOrderClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleConfirmOrder = () => {
        setShowModal(false);
        // Add your order request logic here (e.g. API call)
        alert("Order request sent!");
    };

    return (
        <div className='py-9 sm:py-14 md:py-16 px-4 xl:px-0 text-[#464646]'>
            <div className="flex items-center space-x-2 text-gray-500 pb-8">
                <Link to="/cources" className='hover:text-[#EA7913]'>Cources</Link>
                <MdArrowForwardIos size={12} />
                <Link className='text-[#EA7913] font-semibold'>{courcesid}</Link>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-7 xl:gap-12 items-start w-full">
                {/* Left Section */}
                <div className="w-full lg:w-1/2 mb-10 md:mb-0 flex flex-col justify-between">
                    <img
                        src={courseDetail1}
                        alt="Not Found"
                        className="w-full h-auto object-cover rounded-3xl md:max-h-[450px] lg:max-h-[744px] lg:min-h-[744px]"
                    />
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between h-full md:min-h-[450px] lg:min-h-[744px]">
                    <div>
                        {/* Course Details (same as before) */}
                        <h2 className="text-3xl md:text-[56px] font-Raleway Raleway-bold">Details</h2>
                        <p className='text-2xl font-Raleway Raleway-bold pt-4 pb-2'>What you’ll learn</p>
                        <ul className="list-disc pl-5 text-[#656565]">
                            <li>Basics of energy healing and chakra system</li>
                            <li>Reiki Level 1, 2, 3 and Grand Master level techniques</li>
                            <li>Attunement process for self and others</li>
                            <li>Using Reiki for physical, emotional, and spiritual wellness</li>
                            <li>How to heal others via hands-on and distance Reiki</li>
                            <li>Certification after course completion</li>
                        </ul>

                        <p className='text-2xl font-Raleway Raleway-bold pt-6 pb-2'>Course Format</p>
                        <div className='space-y-2'>
                            <div><span className='font-semibold'>Mode: </span><span className='text-[#656565]'>Live Zoom classes + Recorded Videos</span></div>
                            <div><span className='font-semibold'>Language: </span><span className='text-[#656565]'>Hindi + English</span></div>
                            <div><span className='font-semibold'>Duration: </span><span className='text-[#656565]'>4 Weeks (2 sessions/week)</span></div>
                            <div><span className='font-semibold'>Certificate: </span><span className='text-[#656565]'>Yes, digital certificate provided</span></div>
                            <div><span className='font-semibold'>Support: </span><span className='text-[#656565]'>Lifetime WhatsApp & email support</span></div>
                        </div>

                        <p className='text-2xl font-Raleway Raleway-bold pt-6 pb-2'>Free Shipping <span className='text-base text-[#656565] font-medium'>(T&c applied)</span></p>
                        <div className='flex space-x-4 items-center pt-6 pb-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M9 7H11V5H9M10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM9 15H11V9H9V15Z" fill="#989898" />
                            </svg>
                            <p className='text-[#989898]'>If you haven’t completed music therapy then do it first.</p>
                        </div>
                    </div>

                    {/* Button aligned at bottom */}
                    <div className='flex justify-between items-center pt-6'>
                        <div className="flex items-center gap-2">
                            <span className="text-lg md:text-[32px] md:leading-[40px] font-Raleway text-[#292929]">$240</span>
                            <span className="text-sm text-red-400 line-through">$520</span>
                        </div>
                        <div className="relative inline-block rounded-full px-[4px] py-[2.5px] hover:bg-none bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900] hover:cursor-pointer">
                            <button onClick={handleOrderClick} className="px-5 sm:px-6 py-2 sm:py-3 bg-[#EA7913] text-[#F1F1F1] rounded-full font-medium shadow hover:cursor-pointer hover:bg-[#F39C2C] active:bg-[#EA7913] transition text-base">
                                Request for Order
                            </button>
                        </div>
                    </div>

                    {showModal && (
                        <RequestPopup onClose={handleCloseModal} onConfirm={handleConfirmOrder} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default CourseDetails