import React from 'react'
import CoursesHero from './CourceHero'
import AllCourses from './AllCourses'

function Courses() {
    return (
        <div>
            <CoursesHero />
            <div className='overflow-hidden max-w-[1440px] mx-auto px-0 xl:px-[100px]'>
                <AllCourses />
            </div>
        </div>
    )
}

export default Courses