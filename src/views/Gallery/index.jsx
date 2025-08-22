import React from 'react'
import GalleryHero from './GalleryHero'
import GalleryPeace from './GalleryPeace'

function Gallery() {
    return (
        <div>
            <GalleryHero />
            <div className='overflow-hidden max-w-[1440px] mx-auto px-0 xl:px-[100px]'>
                <GalleryPeace />
            </div>
        </div>
    )
}

export default Gallery