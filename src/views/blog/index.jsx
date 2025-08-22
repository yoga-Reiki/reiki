import React from 'react'
import BlogHero from './BlogHero'
import LatestBlog from './LatestBlog'
import Blogs from './Blogs'

function BlogPage() {
  return (
    <div>
        <BlogHero />
        <div className='overflow-hidden max-w-[1440px] mx-auto px-0 xl:px-[100px]'>
            <LatestBlog />
            <Blogs />
        </div>
    </div>
  )
}

export default BlogPage