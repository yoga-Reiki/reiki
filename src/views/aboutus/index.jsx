import React from 'react'
import Heroabout from './Heroabout'
import Courses from '../homepage/Courses'
import Testimonials from '../homepage/Testimonial'
import ChooseCard from './ChooseCard'
import Getreview from './Getreview'
import Experience from './Experience'

function AboutUs() {
    return (
        <div>
            <Heroabout />
            <div className='overflow-hidden max-w-[1440px] mx-auto px-0 xl:px-[100px]'>
                <ChooseCard />
                <Courses />
                <Testimonials />
                <Getreview />
                <Experience />
            </div>
        </div>
    )
}

export default AboutUs