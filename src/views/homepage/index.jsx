import React from 'react'
import Herosection from './Herosection'
import Introsection from './Introsection'
import Courses from './Courses'
import Music from './Music'
import Products from './Products'
import Consulting from './Consulting'

function Homepage() {
  return (
    <div>
      <Herosection />
      <div className='overflow-hidden max-w-[1440px] mx-auto'>
        <Introsection />
        <Courses />
        <Music />
        <Products />
        <Consulting />
      </div>
    </div>
  )
}

export default Homepage