import React from 'react'
import HeroTherapy from '../HeroTherapy'
import Detail from './Detail'

function TherapyDetail() {
  return (
    <div>
        <HeroTherapy />
        <div className='overflow-hidden max-w-[1440px] mx-auto px-0 xl:px-[100px]'>
            <Detail />
        </div>
    </div>
  )
}

export default TherapyDetail