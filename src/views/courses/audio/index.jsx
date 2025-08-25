import React from 'react'
import AudioHero from './AudioHero'
import AudioBlock from './AudioBlock'

function AudioPage() {
    return (
        <div>
            <AudioHero />
            <div className='overflow-hidden max-w-[1440px] mx-auto px-0 xl:px-[100px]'>
                <AudioBlock />
            </div>
        </div>
    )
}

export default AudioPage