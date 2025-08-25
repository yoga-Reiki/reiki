import React from 'react'
import Logo from '../assets/img/logo.png'
import youtube from '../assets/svg-icon/youtube.svg'
import Linkdin from '../assets/svg-icon/Linkedin.svg'
import Twitter from '../assets/svg-icon/twitter.svg'
import instagram from '../assets/svg-icon/Instagram.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='overflow-hidden max-w-[1440px] mx-auto px-4 xl:px-[100px] pb-9 sm:pb-14 md:pb-16'>
      <footer className="bg-[#FEF8EC] rounded-3xl text-[#464646] p-6 sm:p-8 md:p-12 lg:p-15">

        <div>
          {/* Responsive Grid - Same Design, Better Responsiveness */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-14 xl:gap-16">

            <div className="space-y-4 flex flex-col justify-between w-full lg:w-[343px]">
              <div>
                <div className="flex space-x-3">
                  <img src={Logo} alt="Shree Sai Logo" className="w-32 sm:w-36 md:w-40 lg:w-40 object-contain mb-1 hover:cursor-pointer transition-transform transform" />
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg lg:text-lg text-[#464646] my-6">
                  Start your reiki journey now with Shree <br className="hidden sm:block" /> Sai Yog & Reiki Healing Centre
                </p>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  <Link to={"/$"}><img src={youtube} alt="youtube" className="w-6 h-6 sm:w-7 sm:h-7" /></Link>
                  <Link to={"/$"}><img src={Linkdin} alt="Linkdin" className="w-6 h-6 sm:w-7 sm:h-7" /></Link>
                  <Link to={"/$"}><img src={Twitter} alt="Twitter" className="w-6 h-6 sm:w-7 sm:h-7" /></Link>
                  <Link to={"/$"}><img src={instagram} alt="instagram" className="w-6 h-6 sm:w-7 sm:h-7" /></Link>
                </div>
              </div>

              {/* Copyright - Mobile */}
              <div className='mt-6 lg:mt-0'>
                <p className="text-xs sm:text-sm text-[#464646]">
                  @2025 All rights Reserved by Shree Sai Yog & Reiki Healing Centre.
                </p>
              </div>
            </div>

            {/* Right Column - Navigation & Buttons (Same Design) */}
            <div className="space-y-4 flex flex-col justify-end">
              <div className='grid grid-cols-2'>
                <div className="space-y-2 text-sm md:text-lg">
                  <Link to={"/"} className="block hover:text-[#EA7913] transition-colors">Home</Link>
                  <Link to={"/$"} className="block hover:text-[#EA7913] transition-colors">About Us</Link>
                  <Link to={"/$"} className="block hover:text-[#EA7913] transition-colors">Courses</Link>
                  <Link to={"/$"} className="block hover:text-[#EA7913] transition-colors">Products</Link>
                  <Link to={"/$"} className="block hover:text-[#EA7913] transition-colors">Gallery</Link>
                  <Link to={"/$"} className="block hover:text-[#EA7913] transition-colors">Blog</Link>
                  <Link to={"/$"} className="block hover:text-[#EA7913] transition-colors">Contact Us</Link>
                </div>
                {/* <div className="space-y-4">
                  <div className="space-y-2 text-sm md:text-lg">
                    <Link to={"/@"} className="block hover:text-[#EA7913] transition-colors">Courses</Link>
                    <Link to={"/@"} className="block hover:text-[#EA7913] transition-colors">Courses 1</Link>
                    <Link to={"/@"} className="block hover:text-[#EA7913] transition-colors">Courses 2</Link>
                    <Link to={"/@"} className="block hover:text-[#EA7913] transition-colors">Courses 3</Link>
                    <Link to={"/@"} className="block hover:text-[#EA7913] transition-colors">Courses 4</Link>
                    <Link to={"/@"} className="block hover:text-[#EA7913] transition-colors">Courses 5</Link>
                  </div>
                </div> */}
                <div className="space-y-2 text-sm md:text-lg w-full sm:w-auto flex flex-col">
                  <Link to={"/$"} className="font-medium text-[#464646]">Get Free consulting</Link>
                  <Link to={"/$"} className="font-medium text-[#464646]">Get in Touch</Link>
                </div>
              </div>

              {/* Action Buttons - Responsive Layout */}
              <div className="flex flex-row gap-4 justify-end mt-8 lg:mt-0">
                <button className="bg-[#FCEAC9] px-6 py-2 sm:py-3 rounded-full font-medium border-2 border-[#FCEAC9] hover:bg-[#FEF8EC] transition-colors hover:cursor-pointer">
                  Login
                </button>
                <div className="relative inline-block rounded-full px-[5px] py-[3px] hover:bg-gradient-[#EA7913] bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900] hover:from-[#F39C2C] hover:via-[#F39C2C] hover:to-[#F39C2C] active:from-[#EA7913] active:via-[#EA7913] active:to-[#EA7913]">
                  <button className="inline-flex items-center space-x-1.5 px-5 sm:px-6 py-2 sm:py-3 bg-[#EA7913] text-[#F8F8F8] rounded-full font-medium hover:cursor-pointer hover:bg-[#F39C2C] active:bg-[#EA7913] transition text-base">
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer