import React, { useState } from 'react'
import PersonImage from '../../assets/img/Getouch.png'
import Usericon from '../../assets/svg-icon/User.svg'
import Callicon from '../../assets/svg-icon/Call.png'
import Emailicon from '../../assets/svg-icon/Email.png'

function Getouch() {
    const [form, setForm] = useState({ name: '', mobile: '', email: '' })

    function onChange(e) {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    function onSubmit(e) {
        e.preventDefault()
        // submit logic here (API/integration)
        console.log('Get in touch form:', form)
    }

    const FormCard = (
        <div className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-6 sm:px-12 sm:py-8 w-full max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold pb-13">Get in touch</h3>

            <form onSubmit={onSubmit} className="space-y-5">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#111111] mb-2">Name</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-[#EA7913]">
                            <img
                                src={Usericon}
                                alt="Minus"
                                className="w-5 h-5 transition-all duration-300"
                            />
                        </span>
                        <input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={onChange}
                            placeholder="Enter Your Name"
                            className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#F8F8F8] text-[#3A3A3A] placeholder-gray-400 border-2 border-white focus:outline-none focus:ring-0 focus:border-2 focus:border-[#EA7913]"
                            type="text"
                            required
                        />
                    </div>
                </div>

                {/* Mobile */}
                <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-[#464646] mb-2">Mobile Number</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-[#EA7913]">
                            <img
                                src={Callicon}
                                alt="Minus"
                                className="w-5 h-5 transition-all duration-300"
                            />
                        </span>
                        <input
                            id="mobile"
                            name="mobile"
                            value={form.mobile}
                            onChange={onChange}
                            className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#F8F8F8] text-[#3A3A3A] placeholder-gray-400 border-2 border-white focus:outline-none focus:ring-0 focus:border-2 focus:border-[#EA7913]"
                            placeholder="Enter Your Mobile Number"
                            type="tel"
                            required
                        />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#464646] mb-2">Email</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-[#EA7913]">
                            <img
                                src={Emailicon}
                                alt="Minus"
                                className="w-5 h-5 transition-all duration-300"
                            />
                        </span>
                        <input
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={onChange}
                            className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#F8F8F8] text-[#3A3A3A] placeholder-gray-400 border-2 border-white focus:outline-none focus:ring-0 focus:border-2 focus:border-[#EA7913]"
                            placeholder="Enter Your Email"
                            type="email"
                            required
                        />
                    </div>
                </div>

                {/* Button with orange look */}
                <div className="pt-10 text-center">
                    <div className="relative inline-block rounded-full px-[5px] py-[3px] bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900] hover:from-[#F39C2C] hover:via-[#F39C2C] hover:to-[#F39C2C] active:from-[#EA7913] active:via-[#EA7913] active:to-[#EA7913]">
                        <button className="inline-flex items-center space-x-1.5 px-5 sm:px-22 py-2 sm:py-3 bg-[#EA7913] text-[#F8F8F8] rounded-full font-medium hover:cursor-pointer hover:bg-[#F39C2C] active:bg-[#EA7913] transition text-base">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )

    return (
        <section className="px-4 xl:px-0 py-9 sm:py-14 md:py-16 text-[#464646]">
            {/* Responsive background image container */}
            <div className="relative bg-cover bg-center bg-no-repeat p-2 rounded-3xl overflow-hidden"
                style={{ 
                    backgroundImage: `url(${PersonImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div className='flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 h-[800px] md:h-full'>
                    <div className='w-full md:w-[80%] lg:w-1/2'></div>
                    <div className='w-full md:w-full lg:w-1/2'>{FormCard}</div>
                </div>
            </div>
        </section >
    )
}

export default Getouch