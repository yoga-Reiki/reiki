import React from 'react'
import { useNavigate } from 'react-router-dom'
import blog1 from '../../assets/img/blog1.png'
import blog2 from '../../assets/img/blog2.png'
import blog3 from '../../assets/img/blog3.png'
import blog4 from '../../assets/img/blog4.png'
import blog5 from '../../assets/img/blog5.png'
import blog6 from '../../assets/img/blog6.png'
import blog7 from '../../assets/img/blog7.png'
import blog8 from '../../assets/img/blog8.png'
import ArrowRight from "../../assets/svg-icon/rightArrowWhite.svg"
import SearchIcon from "../../assets/svg-icon/SearchIcon.svg"

function Blogs() {
    const navigate = useNavigate()

    const blogData = [
        {
            id: 1,
            title: 'How to Learn Reiki at Home',
            description: 'Discover how you can start your Reiki journey from home. With the right resources and practice, learning this powerful healing art is easier than you think.',
            image: blog1,
        },
        {
            id: 2,
            title: 'Signs You Need Energy Healing',
            description: 'Feeling off lately? Emotional imbalances, physical pain, or lack of focus might be signs you need energy healing. It may be time to consider energy healing.',
            image: blog2,
        },
        {
            id: 3,
            title: 'The 5 Reiki Symbols Explained',
            description: 'Ever wondered what those sacred symbols in Reiki mean? Discover the power of these symbols to deepen healing and connect with universal life.',
            image: blog3,
        },
        {
            id: 4,
            title: 'Reiki for Children: Is It Safe?',
            description: 'Children are naturally open to energy, and Reiki can be a beautiful way to support their emotional and physical wellbeing. But is it really safe? Let\'s explore.',
            image: blog3,
        },
        {
            id: 5,
            title: 'Reiki During Pregnancy',
            description: 'Pregnancy is a time of great change – emotionally and physically. Reiki offers gentle support and balance for expecting mothers at every stage.',
            image: blog4,
        },
        {
            id: 6,
            title: 'Bedtime Music & Reiki Healing',
            description: 'Struggling to sleep? Combine the soothing power of music with Reiki energy to create a peaceful, healing sleep that naturally aids body.',
            image: blog5,
        },
        {
            id: 7,
            title: 'Hands-On vs Distant Reiki',
            description: 'Reiki can be shared in person or across the world – and both forms are effective! Learn how these methods work for different situations.',
            image: blog6,
        },
        {
            id: 8,
            title: 'Self-Reiki: Heal Yourself Daily',
            description: 'You don\'t need a practitioner or special session – you can learn to do it yourself! Bring balance into your daily practice.',
            image: blog7,
        },
        {
            id: 9,
            title: 'The Role of Music in Healing',
            description: 'Sound has been used as medicine for the soul. Discover how sound frequencies can enhance your healing transformation.',
            image: blog8,
        },
    ]

    return (
        <div className="py-9 sm:py-14 md:py-16 px-4 xl:px-0 text-[#464646]">
            <div className='flex justify-between items-center pb-8 md:pb-14'>
                <h2 className="text-3xl md:text-[56px] font-Raleway Raleway-bold">Blogs</h2>
                <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center text-[#EA7913]">
                        <img src={SearchIcon} alt="email" className="w-5 h-5" />
                    </span>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        // value={signUpForm.name}
                        // onChange={onChange}
                        placeholder="Search"
                        className="w-44 md:w-auto pl-10 pr-3.5 py-3.5 rounded-full bg-[#FEF8EC] text-[#3A3A3A] placeholder-[#3D3D3D] border-2 border-[#FEF8EC] focus:outline-none focus:ring-0 focus:border-[#F3E9D6]"
                        required
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-12">
                {blogData.map((blog) => (
                    <div onClick={() => navigate(`/blog/${blog.id}`)} key={blog.id} className="rounded-t-3xl cursor-pointer overflow-hidden transform transition duration-300 hover:scale-105">
                        {/* Image */}
                        <div className="relative h-48 md:h-56 overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full rounded-3xl object-cover "
                            />
                        </div>

                        {/* Content */}
                        <div className="pt-6">
                            <div className='flex justify-between items-start'>
                                <div className='w-72'>
                                    <h3 className="text-lg md:text-2xl font-bold mb-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-sm text-[#525252] pt-2 line-clamp-3">
                                        {blog.description}
                                    </p>
                                </div>
                                <div className="relative inline-block rounded-full p-[3px] bg-[linear-gradient(90deg,_rgba(255,121,0,1)_0%,_rgba(234,211,190,1)_50%,_rgba(255,121,0,1)_100%)]">
                                    <button className="inline-flex items-center space-x-1.5 px-3 py-3.5 bg-[#EA7913] text-[#F8F8F8] rounded-full font-medium shadow hover:bg-[#F39C2C] active:bg-[#EA7913] hover:cursor-pointer transition text-sm w-full h-full">
                                        <img src={ArrowRight} className="w-3 h-2.5 transition-all duration-300" alt="ArrowRight" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blogs