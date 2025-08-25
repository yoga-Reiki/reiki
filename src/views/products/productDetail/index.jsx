import React from 'react'
import ProductHero from '../ProductHero'
import ProductDetailHero from './ProductHero'
import ProdDetail from './ProdDetail'

function ProductDetail() {
    return (
        <div>
            <ProductDetailHero />
            <div className='overflow-hidden max-w-[1440px] mx-auto px-0 xl:px-[100px]'>
                <ProdDetail />
            </div>
        </div>
    )
}

export default ProductDetail