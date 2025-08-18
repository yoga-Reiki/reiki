import React from 'react'
import Heroabout from './Heroabout'
import Courses from '../homepage/Courses'
import Testimonials from '../homepage/Testimonial'
import ChooseCard, { ScrollStackItem } from './ChooseCard'
import Getreview from './Getreview'
import Experience from './Experience'
import card1 from "../../assets/img/card1.png"
import card2 from "../../assets/img/card2.png"
import card3 from "../../assets/img/card3.png"

function AboutUs() {

    const cards = [
        {
            image: card1,
            title: "Authentic Healing with a Personal Touch",
            description: "Experience the essence of true Reiki with personalized guidance and energy healing that connects deeply with your spiritual and emotional self. At Shree Sai Reiki, each session is rooted in compassion, intuition, and genuine care — helping you find balance, peace, and clarity."
        },
        {
            image: card2,
            title: "Healing that Nurtures Your Spirit",
            description: "Our approach goes beyond relaxation — each session is designed to help you release stress, restore inner harmony, and strengthen your energy field for long-lasting peace."
        },
        {
            image: card3,
            title: "Compassionate & Intuitive Care",
            description: "At Shree Sai Reiki, we believe in personalized attention. With intuition and compassion, every session is tailored to meet your unique needs on your healing journey."
        }
    ];

    return (
        <div>
            <Heroabout />
            <div className='overflow-hidden max-w-[1440px] mx-auto px-0 xl:px-[100px]'>
                {/* <ChooseCard /> */}
                <div className="px-4 xl:px-0 py-9 sm:py-14 md:py-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#464646]">
                        Why Choose Us ?
                    </h2>
                    <div className="relative w-full h-[30rem]">
                        <ChooseCard>
                            {cards.map((card) => (
                                <ScrollStackItem>
                                    <div
                                        className="relative bg-cover bg-center bg-no-repeat p-2 rounded-3xl overflow-hidden"
                                        style={{ backgroundImage: `url(${card.image})` }}
                                    >
                                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 h-[700px] md:h-full">
                                            <div className="w-full md:w-[80%] lg:w-1/2"></div>
                                            <div className="w-full md:w-full lg:w-1/2">
                                                <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:px-15 sm:py-6 w-full max-w-xl">
                                                    <h3 className="text-2xl sm:text-3xl font-bold pb-4.5">{card.title}</h3>
                                                    <p className="pb-13">{card.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollStackItem>
                            ))}
                        </ChooseCard>
                    </div>
                </div>
                <Courses />
                <Testimonials />
                <Getreview />
                <Experience />
            </div>
        </div >
    )
}

export default AboutUs