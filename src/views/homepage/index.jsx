import React from 'react'
import Herosection from './Herosection'
import Introsection from './Introsection'
import Courses from './Courses'
import Music from './Music'
import Products from './Products'
import Consulting from './Consulting'
import Testimonial from './Testimonial'
import Faqs from './Faqs'
import Getouch from './Getouch'

function Homepage() {
  return (
    <div>
      <Herosection />
      <div className='overflow-hidden max-w-[1440px] mx-auto px-0 xl:px-[100px]'>
        <Introsection />
        <Courses />
        <Music />
        <Products />
        <Consulting />
        <Testimonial />
        <Faqs />
        <Getouch />
      </div>
    </div>
  )
}

export default Homepage