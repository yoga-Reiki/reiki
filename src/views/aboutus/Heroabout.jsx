import React, { useState, useEffect } from 'react';
import aboutHero from "../../assets/img/aboutHero.png";
import MissionCard from "../../assets/img/mission.png";
import PlusIcon from '../../assets/svg-icon/plus.svg';
import MinusIcon from '../../assets/svg-icon/minus.svg';

function ExpandableCard({ title, image, description, isOpen, onToggle }) {
    return (
        <div
            className="bg-white rounded-3xl border-t-[8px] border-[#EA7913] cursor-pointer transition-transform overflow-hidden"
            onClick={onToggle}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {title}
                </h3>
                <img
                    src={isOpen ? MinusIcon : PlusIcon}
                    alt="toggle icon"
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            {/* Content */}
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <p className='px-4 sm:px-6'>{description}</p>
                <div className="p-4 sm:p-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                    <img src={image} alt={title} className="w-full object-cover rounded-2xl mt-3" />
                </div>
            </div>
        </div>
    );
}

function Heroabout() {
    const [openStates, setOpenStates] = useState([false, false]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const applyResponsiveOpenState = () => {
            const isMobile = window.innerWidth < 1024;
            setOpenStates(prev => {
                if (isMobile) return [false, false];
                if (!prev.includes(true)) return [false, true];
                return prev;
            });
        };

        applyResponsiveOpenState();
        window.addEventListener('resize', applyResponsiveOpenState);
        return () => window.removeEventListener('resize', applyResponsiveOpenState);
    }, []);

    const toggleCard = (index) => {
        setOpenStates(prev => {
            const newStates = [...prev];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    return (
        <section className="relative rounded-3xl overflow-hidden mx-3.5 mt-2 min-h-[500px] sm:min-h-[600px] lg:min-h-[735px]">
            {/* Background Image */}
            <img
                src={aboutHero}
                alt="Reiki healing session"
                className="absolute inset-0 w-full h-full object-cover bg-[#cfd8dc]/20 z-10"
            />

            {/* Content */}
            <div className="relative z-20 flex flex-col justify-between pt-4 sm:pt-8 lg:pt-16 pl-4 sm:pl-8 lg:pl-20 pr-2 sm:pr-3 lg:pr-5 pb-2 sm:pb-3 lg:pb-5 min-h-[500px] sm:min-h-[600px] lg:min-h-[735px]">

                <div className="flex-1 max-w-4xl lg:max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[104px] leading-tight lg:leading-[112px] font-delcy text-[#F8F8F8] font-light">
                        About Us
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-white/90 mt-4 sm:mt-6 mb-6 sm:mb-8 max-w-lg lg:max-w-[445px] leading-relaxed">
                        At Shree Sai Reiki, we believe true healing begins from within. Our mission is to guide you on a journey of inner balance, peace, and energy alignment through the transformative power of Reiki. Whether you're seeking relief, growth, or spiritual connection, we're here to support every step of your healing path.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-end justify-end mt-0 md:-mt-40 space-y-4 lg:space-y-0 lg:space-x-6">
                    <div className="w-full max-w-sm lg:max-w-md">
                        <ExpandableCard
                            title="Vision"
                            image={MissionCard}
                            description="To create a world where everyone has access to the transformative power of Reiki healing, fostering a global community of wellness, balance, and spiritual growth."
                            isOpen={openStates[0]}
                            onToggle={() => toggleCard(0)}
                        />
                    </div>
                    <div className="w-full max-w-sm lg:max-w-md">
                        <ExpandableCard
                            title="Mission"
                            image={MissionCard}
                            description="To offer genuine Reiki healing, learning, and supportive tools that empower people to nurture wellness and awaken their inner energy."
                            isOpen={openStates[1]}
                            onToggle={() => toggleCard(1)}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Heroabout;
