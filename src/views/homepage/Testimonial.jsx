import React, { useEffect, useState } from "react";
import Avtar1 from "../../assets/img/avtar1.png";
import Avtar2 from "../../assets/img/avtar2.png";
import Avtar3 from "../../assets/img/avtar3.png";
import Left from "../../assets/svg-icon/left.svg"
import Right from "../../assets/svg-icon/right.svg"

function Testimonials() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [cardsToShow, setCardsToShow] = useState(3)

    const testimonials = [
        {
            text: "The 21-day music therapy helped me sleep better and reduce anxiety. Thank you, Shree Sai, for this beautiful journey!",
            name: "Ryan Jones",
            role: "Co-Founder, Creation Metric",
            img: Avtar1,
        },
        {
            text: "After just a few Reiki sessions at Shree Sai, I felt lighter, calmer, and more connected with myself. Truly a healing experience!",
            name: "Robin Clark",
            role: "Founder & CEO, Pear Health",
            img: Avtar2,
        },
        {
            text: "Learning Reiki online from Shree Sai was life-changing. The guidance, energy, and support I received were exceptional.",
            name: "Ivy Rogers",
            role: "Health Coach, Ivy Dietetics",
            img: Avtar3,
        },
        {
            text: "The 21-day music therapy helped me sleep better and reduce anxiety. Thank you, Shree Sai, for this beautiful journey!",
            name: "Ryan Jones",
            role: "Co-Founder, Creation Metric",
            img: Avtar1,
        },
        {
            text: "After just a few Reiki sessions at Shree Sai, I felt lighter, calmer, and more connected with myself. Truly a healing experience!",
            name: "Robin Clark",
            role: "Founder & CEO, Pear Health",
            img: Avtar2,
        },
    ];

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

    useEffect(() => {
        if (currentSlide > testimonials.length - cardsToShow) {
            setCurrentSlide(Math.max(0, testimonials.length - cardsToShow))
        }
    }, [cardsToShow, testimonials.length])

    const nextSlide = () => {
        setCurrentSlide(prev => Math.min(prev + 1, testimonials.length - cardsToShow))
    }

    const prevSlide = () => {
        setCurrentSlide(prev => Math.max(prev - 1, 0))
    }

    return (
        <section className="px-4 xl:px-0 py-16 text-center text-[#464646]">
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-[28px] md:text-4xl font-Raleway"><span className="font-bold">Testimonials</span></h2>
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
                        disabled={currentSlide >= testimonials.length - cardsToShow}
                        className={`w-12 h-12 bg-[#FCEAC9] hover:bg-[#FEF8EC] rounded-full flex items-center justify-center transition-all duration-300
                                        ${currentSlide >= testimonials.length - cardsToShow ? 'bg-[#FEF8EC] cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        <img src={Right} alt="Previous" className="w-3 h-2.5" />
                    </button>
                </div>
            </div>

            {/* Testimonials */}
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        width: `${(testimonials.length * 100) / cardsToShow}%`,
                        transform: `translateX(-${currentSlide * (100 / testimonials.length)}%)`
                    }}
                >
                    {testimonials.map((t, idx) => {
                        const centerIndex = currentSlide + Math.floor(cardsToShow / 2);
                        const isCenter = idx === centerIndex;

                        return (
                            <div key={idx} className={`flex flex-col justify-between items-center gap-8 text-center mx-6 transition-all duration-500 ${isCenter ? "opacity-100 scale-100" : "opacity-[40%]"
                                }`}>
                                <div className="px-1 pt-1 md:px-6 md:pt-6">
                                    <p className="text-lg md:text-2xl font-Raleway leading-[24px] md:leading-[34px]">
                                        "{t.text}"
                                    </p>
                                </div>
                                <div className="px-1 pb-1 md:px-6 md:pb-6 flex flex-col items-center">
                                    <img
                                        src={t.img}
                                        alt={t.name}
                                        className="w-16 h-24.5 rounded-full object-cover mb-3"
                                    />
                                    <h4 className="font-semibold text-[#292929]">{t.name}</h4>
                                    <p className="text-xs md:text-sm text-[#656565]">{t.role}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
