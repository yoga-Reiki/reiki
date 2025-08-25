import React from 'react'
import SearchIcon from "../../assets/svg-icon/SearchIcon.svg"
import Course4 from "../../assets/img/Course4.png"
import Courses5 from "../../assets/img/Courses5.png"
import Courses6 from "../../assets/img/Courses6.png"
import Courses7 from "../../assets/img/Courses7.png"
import Courses8 from "../../assets/img/Courses8.png"
import { useNavigate } from 'react-router-dom'

function AllCourses() {
    const navigate = useNavigate()

    const courses = [
        {
            id: 1,
            title: "Reiki Course Level 1",
            points: [
                "Introduction to Reiki Level 1",
                "History and how Reiki works",
                "Principals of Reiki",
                "Bath with salt water",
                "Benefits of Reiki"
            ],
            price: "Free",
            oldPrice: "$120",
            img: Course4,
        },
        {
            id: 2,
            title: "Reiki Course Level 2",
            points: [
                "Explain how to draw Reiki symbols and use",
                "7 chakras powerful method and meditation for chakra opening and clearing making of Reiki box for manifestation of wish",
                "How to charge room and office",
                "How to perform personal and distance Reiki",
                "How can water be charge"
            ],
            price: "Free",
            oldPrice: "$120",
            img: Courses5,
        },
        {
            id: 3,
            title: "Reiki Course Level 3",
            points: [
                "Reiki Level 3 master symbol",
                "Distance Reiki and aura operation",
                "Reiki Kavach Protection (Family, Home, Vehicles)"
            ],
            price: "Free",
            oldPrice: "$120",
            img: Courses6,
        },
        {
            id: 4,
            title: "Crystal Reiki Course",
            points: [
                "How to Connect",
                "How to use crystal for distance Reiki",
                "How to use pendulum"
            ],
            price: "Free",
            oldPrice: "$120",
            img: Courses7,
        },
        {
            id: 5,
            title: "Reiki Healing Sessions",
            points: [
                "1 hours healing session",
                "Energy cleansing ",
                "Chakra balancing",
                "Stress relief"
            ],
            price: "Free",
            oldPrice: "$120",
            img: Courses8,
        },
    ];

    return (
        <div className="py-9 sm:py-14 md:py-16 px-4 xl:px-0 text-[#464646]">
            <div className='flex justify-between items-center pb-8 md:pb-14'>
                <h2 className="text-3xl md:text-[56px] font-Raleway Raleway-bold">Courses</h2>
                <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center text-[#EA7913]">
                        <img src={SearchIcon} alt="email" className="w-5 h-5" />
                    </span>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        // value={signUpForm.name}
                        // onChange={onChange}
                        placeholder="Search"
                        className="w-44 md:w-auto pl-10 pr-3.5 py-3.5 rounded-full bg-[#FEF8EC] text-[#3A3A3A] placeholder-[#3D3D3D] border-2 border-[#FEF8EC] focus:outline-none focus:ring-0 focus:border-[#F3E9D6]"
                        required
                    />
                </div>
            </div>

            <div className='space-y-6'>
                {courses.map((data, index) => (
                    <div
                        className="relative bg-cover bg-center bg-no-repeat p-2 rounded-3xl overflow-hidden"
                        style={{ backgroundImage: `url(${data?.img})` }}
                        // onClick={() => navigate(`/cources/${data.id}`)}
                    >
                        <div className={`flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 h-[700px] md:h-full 
                            ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                            <div className="w-full md:w-[80%] lg:w-1/2"></div>
                            <div className="w-full md:w-full lg:w-1/2">
                                <div className="flex flex-col justify-between bg-white rounded-3xl p-6 sm:px-6 sm:py-4.5 w-full h-[270px] md:h-[390px]">
                                    <div>
                                        <h3 className="text-2xl sm:text-3xl font-Raleway font-medium text-[#292929] pb-4.5">{data.title}</h3>
                                        <ul className="list-disc pl-5 text-[#656565]">
                                            {data.points.map((point) => (
                                                <li>{point}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className='flex flex-col items-start'>
                                        <div className="flex items-center gap-2 mb-3 md:mb-4">
                                            <span className="text-lg md:text-[32px] md:leading-[40px] font-Raleway text-[#292929]">{data.price}</span>
                                            <span className="text-sm text-red-400 line-through">{data?.oldPrice}</span>
                                        </div>
                                        <div className="relative inline-block rounded-full px-[4px] py-[2.5px] hover:bg-none bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900] hover:cursor-pointer">
                                            <button onClick={() => navigate(`/cources/${data.id}`)} className="px-5 sm:px-6 py-2 sm:py-3 bg-[#EA7913] text-[#F1F1F1] rounded-full font-medium shadow hover:cursor-pointer hover:bg-[#F39C2C] active:bg-[#EA7913] transition text-base">
                                                View Course Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {/* <div
                className="relative bg-cover bg-center bg-no-repeat p-2 rounded-3xl overflow-hidden"
                style={{ backgroundImage: `url(${Course4})` }}
            >
                <div className={`flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 h-[700px] md:h-full`}>
                    <div className="w-full md:w-[80%] lg:w-1/2"></div>
                    <div className="w-full md:w-full lg:w-1/2">
                        <div className="flex flex-col justify-between bg-white rounded-3xl p-6 sm:px-6 sm:py-4.5 w-full h-[270px] md:h-[390px]">
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-Raleway font-medium text-[#292929] pb-4.5">Reike Full Course</h3>
                                <p className='text-xl'>Start your spiritual journey with Reiki Level I. Learn how to heal your body, mind, and emotions through the power of universal energy.</p>
                                <div className='text-[#464646] space-x-2 pt-4'>
                                    <button className='px-3 py-1 bg-[#FEF8EC] border border-[#F9D38E] rounded-full'>6 Months Course</button>
                                    <button className='px-3 py-1 bg-[#FEF8EC] border border-[#F9D38E] rounded-full'>Certificate</button>
                                    <button className='px-3 py-1 bg-[#FEF8EC] border border-[#F9D38E] rounded-full'>Online</button>
                                </div>
                            </div>

                            <div className='flex flex-col items-start'>
                                <div className="mb-3 md:mb-4">
                                    <p>Day 1 Completed</p>
                                </div>
                                <div className="relative inline-block rounded-full px-[4px] py-[2.5px] hover:bg-none bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900] hover:cursor-pointer">
                                    <button onClick={() => navigate(`/cources/${data.id}`)} className="px-5 sm:px-6 py-2 sm:py-3 bg-[#EA7913] text-[#F1F1F1] rounded-full font-medium shadow hover:cursor-pointer hover:bg-[#F39C2C] active:bg-[#EA7913] transition text-base">
                                        Start Day 1
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default AllCourses