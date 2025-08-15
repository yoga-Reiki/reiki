// import React, { useEffect, useMemo, useRef, useState } from 'react'
// import Card1 from '../../assets/img/card1.png';
// import Card2 from '../../assets/img/card2.png';
// import Card3 from '../../assets/img/card3.png';

// function StackedCard({ image, title, description, isActive, zIndex }) {
//     return (
//         <div className="relative bg-cover bg-center bg-no-repeat p-2 rounded-3xl overflow-hidden my-6"
//             style={{
//                 backgroundImage: `url(${image})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat'
//             }}>
//             <div className='flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 h-[800px] md:h-full'>
//                 <div className='w-full md:w-[80%] lg:w-1/2'></div>
//                 <div className='w-full md:w-full lg:w-1/2'>
//                     <div className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-6 sm:px-15 sm:py-6 w-full max-w-xl">
//                         <h3 className="text-2xl sm:text-3xl font-bold pb-4.5">{title}</h3>
//                         <p className='pb-13'>{description}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// function ChooseCard() {
//     const items = useMemo(
//         () => [
//             {
//                 key: 'authentic',
//                 image: Card1,
//                 title: 'Authentic Healing with a Personal Touch',
//                 description:
//                     'Experience the essence of true Reiki with personalized guidance and energy healing that connects deeply with your spiritual and emotional self. At Shree Sai Reiki, each session is rooted in compassion, intuition, and genuine care — helping you find balance, peace, and clarity.',
//             },
//             {
//                 key: 'learn',
//                 image: Card2,
//                 title: 'Learn Reiki at Your Pace, Anytime',
//                 description:
//                     'Learn Reiki anytime, anywhere. Our courses are designed for modern learners — completely online, easy to follow, and tailored to your personal rhythm. Whether you’re a beginner or continuing your journey, our platform adapts to your growth without pressure.',
//             },
//             {
//                 key: 'music',
//                 image: Card3,
//                 title: '21-Day Free Music Therapy + Auto Certificate',
//                 description:
//                     'Relax your mind and uplift your energy with our unique 21-day music therapy program, featuring calming Reiki-infused audio and guided progress tracking. This journey offers healing through sound — and rewards you with a personalized certificate upon completion.',
//             },
//         ],
//         []
//     )

//     const [activeIndex, setActiveIndex] = useState(0)
//     const cardRefs = useRef([])

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             entries => {
//                 entries.forEach(entry => {
//                     const idxAttr = entry.target.getAttribute('data-index')
//                     const idx = idxAttr ? parseInt(idxAttr, 10) : 0
//                     if (entry.isIntersecting) {
//                         setActiveIndex(prev => (idx > prev ? idx : prev))
//                     }
//                 })
//             },
//             { root: null, threshold: 0.6 }
//         )

//         cardRefs.current.forEach((el) => el && observer.observe(el))
//         return () => observer.disconnect()
//     }, [])

//     return (
//         <section className="relative px-4 py-9 sm:py-14 md:py-16">
//             <div>
//                 <div className="lg:col-span-2">
//                     <h2 className="text-3xl md:text-5xl font-bold text-[#464646] pb-6">
//                         Why Choose Us ?
//                     </h2>
//                 </div>

//                 <div className="lg:col-span-3 relative">
//                     <div className="relative">
//                         {items.map((item, index) => (
//                             <div>
//                                 <StackedCard
//                                     image={item.image}
//                                     title={item.title}
//                                     description={item.description}
//                                     isActive={index <= activeIndex}
//                                     zIndex={20 + index}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ChooseCard



import React, { useMemo, useRef, useState, useLayoutEffect } from "react";
import Card1 from "../../assets/img/card1.png";
import Card2 from "../../assets/img/card2.png";
import Card3 from "../../assets/img/card3.png";

function StackedCard({ image, title, description, zIndex, translateY }) {
  return (
    <div
      className="absolute top-0 left-0 w-full transition-transform duration-200 ease-out"
      style={{
        transform: `translateY(${translateY}px)`,
        zIndex,
      }}
    >
      <div
        className="relative bg-cover bg-center bg-no-repeat p-2 rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "400px",
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 h-full">
          <div className="w-full md:w-[80%] lg:w-1/2"></div>
          <div className="w-full md:w-full lg:w-1/2">
            <div className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-6 sm:px-15 sm:py-6 w-full max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-bold pb-4.5">{title}</h3>
              <p className="pb-13">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ChooseCard() {
  const items = useMemo(
    () => [
      {
        image: Card1,
        title: "Authentic Healing with a Personal Touch",
        description:
          "Experience the essence of true Reiki with personalized guidance...",
      },
      {
        image: Card2,
        title: "Learn Reiki at Your Pace, Anytime",
        description:
          "Learn Reiki anytime, anywhere. Our courses are designed for modern learners...",
      },
      {
        image: Card3,
        title: "21-Day Free Music Therapy + Auto Certificate",
        description:
          "Relax your mind and uplift your energy with our unique 21-day music therapy program...",
      },
    ],
    []
  );

  const sectionRef = useRef(null);
  const cardHeight = 500; // each card's visible height
  const [scrollY, setScrollY] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);

  // Track scroll
  useLayoutEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track section position on resize or mount
  useLayoutEffect(() => {
    const updatePosition = () => {
      if (sectionRef.current) {
        setSectionTop(sectionRef.current.offsetTop);
      }
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-4 xl:px-0"
      style={{
        height: `${items.length * cardHeight}px`, // enough scroll space
      }}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-[#464646] pb-6">
        Why Choose Us ?
      </h2>

      <div className="sticky top-20 h-[500px]">
        {items.map((item, i) => {
          const cardStart = sectionTop + i * cardHeight;
          const nextCardStart = sectionTop + (i + 1) * cardHeight;

          // Progress for this card only
          let translateY = 0;
          if (scrollY > cardStart) {
            translateY = -(Math.min(scrollY - cardStart, cardHeight));
          }

          // Stop moving when next card reaches
          if (scrollY >= nextCardStart) {
            translateY = -cardHeight;
          }

          return (
            <StackedCard
              key={i}
              image={item.image}
              title={item.title}
              description={item.description}
              zIndex={items.length - i}
              translateY={translateY}
            />
          );
        })}
      </div>
    </section>
  );
}




