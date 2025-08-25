import React, { useState, useEffect } from 'react'
import Course1 from "../../assets/img/course1.png"
import Course2 from "../../assets/img/course2.png"
import Course3 from "../../assets/img/course3.png"
import Left from "../../assets/svg-icon/left.svg"
import Right from "../../assets/svg-icon/right.svg"
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

function Courses() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [cardsToShow, setCardsToShow] = useState(3)

    const courses = [
        {
            id: 1,
            title: "Music therapy",
            points: [
                "Introduction to Reiki Level 1",
                "History and how Reiki works",
                "Principals of Reiki",
                "Bath with salt water",
                "Benefits of Reiki"
            ],
            image: Course1
        },
        {
            id: 2,
            title: "Yoga Course",
            points: [
                "Explain how to draw Reiki symbols",
                "How to charge room and office",
                "How to perform personal and distance Reiki",
                "7 chakras powerful method and meditation for chakra",
                "How can water be charge"
            ],
            image: Course2
        },
        {
            id: 3,
            title: "Reiki Healing",
            points: [
                "Reiki Level 3 master symbol",
                "Distance Reiki and aura operation",
                "Reiki Kavach Protection (Family, Home, Vehicles)",
            ],
            image: Course3
        },
        {
            id: 4,
            title: "Meditation",
            points: [
                "Introduction to Reiki Level 1",
                "History and how Reiki works",
                "Principals of Reiki",
                "Bath with salt water",
                "Benefits of Reiki"
            ],
            image: Course1
        },
        {
            id: 5,
            title: "Crystal Healing",
            points: [
                "Explain how to draw Reiki symbols",
                "How to charge room and office",
                "How to perform personal and distance Reiki",
                "7 chakras powerful method and meditation for chakra",
                "How can water be charge"
            ],
            image: Course2
        },
        {
            id: 6,
            title: "Aromatherapy",
            points: [
                "Reiki Level 3 master symbol",
                "Distance Reiki and aura operation",
                "Reiki Kavach Protection (Family, Home, Vehicles)",
            ],
            image: Course3
        }
    ]

    // Responsive cardsToShow
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 640) {
                setCardsToShow(1)
            } else if (window.innerWidth < 1024) {
                setCardsToShow(2)
            } else {
                setCardsToShow(3)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Clamp currentSlide if cardsToShow changes
    useEffect(() => {
        if (currentSlide > courses.length - cardsToShow) {
            setCurrentSlide(Math.max(0, courses.length - cardsToShow))
        }
    }, [cardsToShow, courses.length])

    const nextSlide = () => {
        setCurrentSlide(prev => Math.min(prev + 1, courses.length - cardsToShow))
    }

    const prevSlide = () => {
        setCurrentSlide(prev => Math.max(prev - 1, 0))
    }

    return (
        <section className="px-4 xl:px-0 py-9 sm:py-14 md:py-16">
            <div>
                {/* Header with Navigation Arrows */}
                <div className="flex flex-row items-center justify-between pb-12 gap-10">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#464646] mb-4">
                            Courses
                        </h2>
                        <p className="text-base text-[#000000]">
                            Explore healing courses for inner peace.
                        </p>
                    </div>
                    {/* Navigation Arrows */}
                    <div className="flex space-x-2.5">
                        <button
                            onClick={prevSlide}
                            disabled={currentSlide === 0}
                            className={`w-12 h-12 bg-[#FCEAC9] hover:bg-[#FEF8EC] rounded-full flex items-center justify-center transition-all duration-300
                                ${currentSlide === 0 ? 'bg-[#FEF8EC] cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                            <img src={Left} alt="Previous" className="w-3 h-2.5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={currentSlide >= courses.length - cardsToShow}
                            className={`w-12 h-12 bg-[#FCEAC9] hover:bg-[#FEF8EC] rounded-full flex items-center justify-center transition-all duration-300
                                ${currentSlide >= courses.length - cardsToShow ? 'bg-[#FEF8EC] cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                            <img src={Right} alt="Previous" className="w-3 h-2.5" />
                        </button>
                    </div>
                </div>

                {/* Course Cards Container */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            width: `${(courses.length * 100) / cardsToShow}%`,
                            transform: `translateX(-${currentSlide * (100 / courses.length)}%)`
                        }}
                    >
                        {courses.map((item, index) => (
                            <div
                                key={item.id}
                                className="px-1.5 md:px-4 py-4 transform hover:scale-105 transition-all duration-300"
                                style={{
                                    width: `calc(100% / ${courses.length})`,
                                    minWidth: 0
                                }}
                            >
                                <div className="bg-white rounded-2xl">
                                    {/* Course Image */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Play Button Overlay */}
                                        <div className="absolute top-4 right-4">
                                            <button className="w-12 h-12 bg-[#FCEAC9] hover:cursor-pointer hover:bg-[#FEF8EC] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg">
                                                <img src={Right} alt="Previous" className="w-3 h-2.5" />
                                            </button>
                                        </div>
                                        {/* Course Content */}
                                        <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-white bg-opacity-90 h-53 backdrop-blur-md p-4.5 rounded-3xl space-y-1">
                                            <h3 className="text-2xl font-bold text-[#292929]">
                                                {item.title}
                                            </h3>
                                            <ul className="list-disc pl-5 text-[#656565]">
                                                {item?.points?.map((point) => (
                                                    <li>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Explore More Button */}
                <div className="text-center mt-12">
                    <div className="relative inline-block rounded-full px-[5px] py-[3px] bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900] mt-2 hover:from-[#F39C2C] hover:via-[#F39C2C] hover:to-[#F39C2C] active:from-[#EA7913] active:via-[#EA7913] active:to-[#EA7913]">
                        <button className="inline-flex items-center space-x-1.5 px-5 sm:px-6 py-2 sm:py-3 bg-[#EA7913] text-[#F8F8F8] rounded-full font-medium hover:cursor-pointer hover:bg-[#F39C2C] active:bg-[#EA7913] transition text-base w-full h-full">
                            <span>Explore More</span>
                            <IoIosArrowRoundForward size={28} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Courses