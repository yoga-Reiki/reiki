import React from 'react'
import SearchIcon from "../../assets/svg-icon/SearchIcon.svg"
import products1 from "../../assets/img/products 1.png"
import { IoIosArrowRoundForward } from "react-icons/io";
import filterIcon from "../../assets/svg-icon/filterIcon.svg"
import { useNavigate } from 'react-router-dom';

function AllProducts() {

    const navigate = useNavigate()

    const products = [
        {
            id: 1,
            name: "Reiki Crystal Bracelet",
            description:
                "Handmade natural gemstone bracelet charged with Reiki energy. Ideal for daily healing, chakra balance, and positive vibration.",
            tags: ["Emotional Balance", "Stress Relief"],
            price: "$29.50",
            image: products1,
        },
        {
            id: 2,
            name: "Reiki Crystal Bracelet",
            description:
                "Handmade natural gemstone bracelet charged with Reiki energy. Ideal for daily healing, chakra balance, and positive vibration.",
            tags: ["Emotional Balance", "Stress Relief"],
            price: "$29.50",
            image: products1,
        },
        {
            id: 3,
            name: "Reiki Crystal Bracelet",
            description:
                "Handmade natural gemstone bracelet charged with Reiki energy. Ideal for daily healing, chakra balance, and positive vibration.",
            tags: ["Emotional Balance", "Stress Relief"],
            price: "$29.50",
            image: products1,
        },
        {
            id: 4,
            name: "Reiki Crystal Bracelet",
            description:
                "Handmade natural gemstone bracelet charged with Reiki energy. Ideal for daily healing, chakra balance, and positive vibration.",
            tags: ["Emotional Balance", "Stress Relief"],
            price: "$29.50",
            image: products1,
        },
        {
            id: 5,
            name: "Reiki Crystal Bracelet",
            description:
                "Handmade natural gemstone bracelet charged with Reiki energy. Ideal for daily healing, chakra balance, and positive vibration.",
            tags: ["Emotional Balance", "Stress Relief"],
            price: "$29.50",
            image: products1,
        }
    ];


    return (
        <div className="py-9 sm:py-14 md:py-16 px-4 xl:px-0 text-[#464646]">
            <div className='flex justify-between items-center pb-8 md:pb-14'>
                <h2 className="text-3xl md:text-[56px] font-Raleway Raleway-bold">Products</h2>
                <div className="flex items-center gap-3">
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
                    <button className="flex items-center gap-2 px-4 py-3.5 bg-[#FEF8EC] border-2 border-[#FEF8EC] rounded-full text-[#3D3D3D] text-sm font-medium">
                        <img src={filterIcon} className='w-4 h-4' />
                        <span>Filter</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.08 1.04l-4.25 4.66a.75.75 0 01-1.08 0l-4.25-4.66a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className='space-y-6'>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((item) => (
                        <div
                            key={item.id}
                        >
                            <div className="bg-white rounded-2xl transform hover:scale-102 transition-all duration-300">
                                {/* products Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* product Content */}
                                    <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-3xl">
                                        <h3 className="text-2xl font-bold text-[#292929]">
                                            {item.name}
                                        </h3>
                                        <p className="text-[#525252] text-lg pt-2 pb-3.5">
                                            {item.description}
                                        </p>
                                        <div className='space-x-1.5 pb-9'>
                                            <button className='py-1 px-6 border border-[#BDBDBD] rounded-full text-xs'>Emotional balance</button>
                                            <button className='py-1 px-6 border border-[#BDBDBD] rounded-full text-xs'>Stress relief</button>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className="flex items-end gap-2 mb-3 md:mb-4 text-[#464646]">
                                                <span className="text-lg md:text-[32px] md:leading-[40px] font-Raleway Raleway-bold">$29</span>
                                                <span className="text-sm line-through">$50</span>
                                            </div>
                                            <div className="relative inline-block rounded-full px-[5px] py-[3px] hover:bg-none bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900] mt-2">
                                                <button onClick={() => navigate(`/product/${item.id}`)} className="inline-flex items-center space-x-1.5 px-5 sm:px-3 py-2 bg-[#EA7913] text-xs text-[#F8F8F8] rounded-full font-medium shadow hover:cursor-pointer hover:bg-[#F39C2C] active:bg-[#EA7913] transition text-base w-full h-full">
                                                    <span>View Product Details</span>
                                                    <IoIosArrowRoundForward size={28} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllProducts