import React, { useState } from "react";
import Usericon from "../../assets/svg-icon/User.svg";
import Callicon from "../../assets/svg-icon/Call.png";
import Emailicon from "../../assets/svg-icon/Email.png";
import { FiMessageSquare } from "react-icons/fi";
import youtube from "../../assets/svg-icon/youtube.svg";
import Linkdin from "../../assets/svg-icon/Linkedin.svg";
import Twitter from "../../assets/svg-icon/twitter.svg";
import instagram from "../../assets/svg-icon/Instagram.svg";
import { Link } from "react-router-dom";
import validationIcon from "../../assets/svg-icon/validation.svg"

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    function onChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Validation function
    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.mobile.trim()) {
            newErrors.mobile = "Mobile number is required";
        } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
            newErrors.mobile = "Enter a valid 10-digit number";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitted(true); // ✅ show success box
            setFormData({ name: "", mobile: "", email: "", message: "" });
        }
    };

    return (
        <div className="flex flex-col lg:flex-row justify-between gap-7 xl:gap-12 items-start w-full py-9 sm:py-14 md:py-16 px-4 xl:px-0 text-[#464646]">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 mb-10 md:mb-0 flex flex-col justify-between h-full md:min-h-[450px] lg:min-h-[680px]">
                <div>
                    <h2 className="text-4xl md:text-[56px] font-semibold font-Raleway">Get in touch</h2>
                    <p className="text-base md:text-2xl mb-6 font-Raleway">
                        with Shree Sai Yog & Reiki Healing Centre
                    </p>
                </div>
                <div>
                    <div className="mb-9">
                        <p className="text-[#EA7913] text-base md:text-lg font-medium pb-3.5">Mobile number</p>
                        <p className="font-Raleway text-lg md:text-2xl text-[#656565]">+91 98001 56210</p>
                    </div>

                    <div className="mb-9">
                        <p className="text-[#EA7913] text-base md:text-lg font-medium pb-3.5">E-mail</p>
                        <p className="font-Raleway text-lg md:text-2xl text-[#656565]">Shreesai@gmail.com</p>
                    </div>

                    <div>
                        <p className="text-[#EA7913] text-base md:text-lg font-medium">Social Links</p>
                        <div className="flex space-x-4 pt-3">
                            <Link to={"/$"}><img src={youtube} alt="youtube" className="w-6 h-6 sm:w-7 sm:h-7" /></Link>
                            <Link to={"/$"}><img src={Linkdin} alt="Linkdin" className="w-6 h-6 sm:w-7 sm:h-7" /></Link>
                            <Link to={"/$"}><img src={Twitter} alt="Twitter" className="w-6 h-6 sm:w-7 sm:h-7" /></Link>
                            <Link to={"/$"}><img src={instagram} alt="instagram" className="w-6 h-6 sm:w-7 sm:h-7" /></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 bg-[#F8F8F8] p-6 md:px-12 md:py-8 rounded-2xl">
                {isSubmitted ? (
                    <div className="bg-[#F8F8F8] h-full flex flex-col justify-between min-h-[300px] lg:min-h-[640px]">
                        <div>
                            <h3 className="text-2xl md:text-[40px] font-bold pb-7.5">
                                Success !
                            </h3>
                            <p className="text-base md:text-3xl text-[#7C7C7C]">
                                Thank you for reaching out to
                                Shree Sai Reiki.
                            </p>
                            <p className="text-lg text-[#989898] mt-4">
                                Our team will connect with you within the next 24 hours.
                            </p>
                        </div>
                        <div className="flex items-center mt-6 text-xs text-[#656565] space-x-2">
                            <img
                                src={validationIcon}
                                alt="toggle icon"
                                className="w-4.5 h-4.5 transition-transform duration-300"
                            />
                            <span>You can also contact us on provided Contacts.</span>
                        </div>
                    </div>
                ) : (
                    <>
                        <h3 className="text-4xl md:text-[40px] font-semibold mb-8">
                            Send us message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4.5">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm md:text-lg font-medium text-[#111111] mb-2">Name</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-3 flex items-center text-[#EA7913]">
                                        <img src={Usericon} alt="user" className="w-5 h-5" />
                                    </span>
                                    <input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={onChange}
                                        placeholder="Enter Your Name"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFFFFF] text-[#656565] placeholder-gray-400 border-2 border-[#F8F8F8] focus:border-[#EA7913] focus:outline-none"
                                        type="text"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Mobile */}
                            <div>
                                <label htmlFor="mobile" className="block text-sm md:text-lg font-medium text-[#111111] mb-2">Mobile Number</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-3 flex items-center text-[#EA7913]">
                                        <img src={Callicon} alt="call" className="w-5 h-5" />
                                    </span>
                                    <input
                                        id="mobile"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={onChange}
                                        placeholder="Enter Your Mobile Number"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFFFFF] text-[#656565] border-2 border-[#F8F8F8] focus:border-[#EA7913] focus:outline-none"
                                        type="tel"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm md:text-lg font-medium text-[#111111] mb-2">Email</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-3 flex items-center text-[#EA7913]">
                                        <img src={Emailicon} alt="email" className="w-5 h-5" />
                                    </span>
                                    <input
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={onChange}
                                        placeholder="Enter Your Email"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFFFFF] text-[#656565] border-2 border-[#F8F8F8] focus:border-[#EA7913] focus:outline-none"
                                        type="email"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm md:text-lg font-medium text-[#111111] mb-2">Message</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-3 top-4 flex items-start text-[#EA7913]">
                                        <FiMessageSquare size={18} />
                                    </span>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={onChange}
                                        placeholder="Enter your message or any query here..."
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFFFFF] text-[#656565] border-2 border-[#F8F8F8] focus:border-[#EA7913] focus:outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Button */}
                            <div className="pt-10 text-center">
                                <div className="relative inline-block rounded-full px-[5px] py-[3.5px] bg-gradient-to-r from-[#FF7900] via-[#EAD3BE] to-[#FF7900]">
                                    <button className="inline-flex items-center px-6 py-3 bg-[#EA7913] text-white rounded-full font-medium hover:bg-[#F39C2C] transition">
                                        Get in Touch
                                    </button>
                                </div>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default ContactForm;
