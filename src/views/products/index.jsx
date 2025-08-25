import React from 'react'
import ProductHero from './ProductHero'
import AllProducts from './AllProducts'

function Products() {
  return (
    <div>
        <ProductHero />
        <div className='overflow-hidden max-w-[1440px] mx-auto px-0 xl:px-[100px]'>
            <AllProducts />
        </div>
    </div>
  )
}

export default Products