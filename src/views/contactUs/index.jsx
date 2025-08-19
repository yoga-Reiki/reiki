import React from 'react'
import HeroContact from './HeroContact'
import ContactForm from './ContactForm'
import Location from './Location'

function Contactus() {
    return (
        <div>
            <HeroContact />
            <div className='overflow-hidden max-w-[1440px] mx-auto px-0 xl:px-[100px]'>
                <ContactForm />
                <Location />
            </div>
        </div>
    )
}

export default Contactus