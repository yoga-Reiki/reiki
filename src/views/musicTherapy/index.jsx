import React from 'react'
import HeroTherapy from './HeroTherapy'
import GetTherapy from './GetTherapy'
import TherapyDetails from './TherapyDetails'

function MusicTherapy() {
    return (
        <div>
            <HeroTherapy />
            <div className='overflow-hidden max-w-[1440px] mx-auto px-0 xl:px-[100px]'>
                <GetTherapy />
                <TherapyDetails />
            </div>
        </div>
    )
}

export default MusicTherapy