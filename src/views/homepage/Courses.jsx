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
            subtitle: "Heal Through Sound",
            image: Course1
        },
        {
            id: 2,
            title: "Yoga Course",
            subtitle: "Breathe, Flow, Heal.",
            image: Course2
        },
        {
            id: 3,
            title: "Reiki Healing",
            subtitle: "Energy for Wellness",
            image: Course3
        },
        {
            id: 4,
            title: "Meditation",
            subtitle: "Mindful Living",
            image: Course1
        },
        {
            id: 5,
            title: "Crystal Healing",
            subtitle: "Natural Energy",
            image: Course2
        },
        {
            id: 6,
            title: "Aromatherapy",
            subtitle: "Scent for Healing",
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
                        {courses.map((course, index) => (
                            <div
                                key={course.id}
                                className="pr-3 md:pr-8"
                                style={{
                                    width: `calc(100% / ${courses.length})`,
                                    minWidth: 0
                                }}
                            >
                                <div className="bg-white rounded-2xl transform hover:scale-105 transition-all duration-300">
                                    {/* Course Image */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Play Button Overlay */}
                                        <div className="absolute top-4 right-4">
                                            <button className="w-12 h-12 bg-[#FCEAC9] hover:cursor-pointer hover:bg-[#FEF8EC] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg">
                                                <img src={Right} alt="Previous" className="w-3 h-2.5" />
                                            </button>
                                        </div>
                                        {/* Course Content */}
                                        <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-white bg-opacity-90 backdrop-blur-md py-4 rounded-3xl text-center">
                                            <h3 className="text-2xl font-bold text-[#292929]">
                                                {course.title}
                                            </h3>
                                            <p className="text-[#525252] text-lg">
                                                {course.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Explore More Button */}
                <div className="text-center mt-12">
                    <div className="relative inline-block rounded-full px-[5px] py-[3px] hover:bg-none bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900] mt-2">
                        <button className="inline-flex items-center space-x-1.5 px-5 sm:px-6 py-2 sm:py-3 bg-[#EA7913] text-[#F8F8F8] rounded-full font-medium shadow hover:cursor-pointer hover:bg-[#F39C2C] active:bg-[#EA7913] transition text-base w-full h-full">
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