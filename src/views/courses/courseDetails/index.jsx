import React from 'react'
import CourseDetailHero from './CourseDetailHero'
import CourseDetails from './CourseDetails'

function CourseDetail() {
  return (
    <div>
        <CourseDetailHero />
        <div className='overflow-hidden max-w-[1440px] mx-auto px-0 xl:px-[100px]'>
            <CourseDetails />
        </div>
    </div>
  )
}

export default CourseDetail