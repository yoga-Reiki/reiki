import React, { useEffect, useState } from 'react'
import PlusIcon from '../../assets/svg-icon/plus.svg'
import MinusIcon from '../../assets/svg-icon/minus.svg'

function Faqs() {
    const [openIndex, setOpenIndex] = useState(0);  

    const faqs = [
        {
            id: 1,
            question: "What is Reiki?",
            answer: "Reiki is a natural energy healing technique that promotes balance and relaxation by channeling positive energy through the hands."
        },
        {
            id: 2,
            question: "Who can learn Reiki?",
            answer: "Anyone can learn Reiki! It's a gentle healing art that doesn't require any special abilities or background. Our courses are designed for beginners and advanced practitioners alike."
        },
        {
            id: 3,
            question: "Is Reiki safe?",
            answer: "Yes, Reiki is completely safe. It's a non-invasive, gentle healing technique that works with your body's natural energy. There are no side effects and it can be used alongside conventional medical treatments."
        },
        {
            id: 4,
            question: "How are online courses conducted?",
            answer: "Our online courses feature live interactive sessions, pre-recorded video lessons, downloadable materials, and one-on-one support. You'll have access to our learning platform 24/7 and can learn at your own pace."
        },
        {
            id: 5,
            question: "What is included in the 21-Day Music Therapy?",
            answer: "The 21-Day Music Therapy program includes daily guided meditation sessions, curated healing music playlists, breathing exercises, journaling prompts, and weekly group support sessions to help you experience deep relaxation and healing."
        }
    ]

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }

    return (
        <section className="py-9 sm:py-14 md:py-16 px-4 xl:px-0 text-[#464646]">
            <div>
                {/* FAQ Container - Flexbox Layout */}
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-8 lg:gap-12">
                    {/* Left Side - Introduction Text */}
                    <div className="lg:w-1/2">
                        <div className="mb-12">
                            <h2 className="text-[28px] md:text-4xl font-Raleway"><span className="font-bold">FAQs</span></h2>
                            <p className="text-lg sm:text-xl text-[#000000] max-w-2xl mt-4">
                                Some Common Question for clarification. <br /> Otherwise you can contact us
                            </p>
                        </div>
                    </div>

                    {/* Right Side - FAQ Items */}
                    <div className="lg:w-1/2">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={faq.id}
                                    className={`rounded-xl overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index
                                        ? 'bg-[#FEF8EC] border border-[#F9D38E]'
                                        : 'bg-white border border-gray-200'
                                        }`}
                                >
                                    {/* Question Header */}
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:cursor-pointer transition-colors duration-200"
                                    >
                                        <h3 className="text-base sm:text-xl font-semibold pr-4">
                                            {faq.question}
                                        </h3>

                                        {/* Plus/Minus Icon */}
                                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                            {openIndex === index ? (
                                                <img
                                                    src={MinusIcon}
                                                    alt="Minus"
                                                    className="w-5 h-5 transition-all duration-300"
                                                />
                                            ) : (
                                                <img
                                                    src={PlusIcon}
                                                    alt="Plus"
                                                    className="w-5 h-5 transition-all duration-300"
                                                />
                                            )}
                                        </div>
                                    </button>

                                    {/* Answer Content */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="pl-6 pr-12 md:pr-16 pb-5">
                                            <p className="text-sm sm:text-lg leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs