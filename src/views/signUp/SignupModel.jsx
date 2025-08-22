import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeOffOutline } from "react-icons/io5";
import Emailicon from "../../assets/svg-icon/Email.png";
import eyeIcon from "../../assets/svg-icon/eyeIcon.svg"
import userIcon from "../../assets/svg-icon/User.svg"
import ArrowLeft from "../../assets/svg-icon/left.svg"
import ArrowRight from "../../assets/svg-icon/rightArrowWhite.svg"
import callIcon from "../../assets/svg-icon/Call.png"
import mapIcon from "../../assets/svg-icon/mapIcon.svg"
import OtpModal from '../login/OtpModel';
import SuccessModel from '../login/SuccessModel';

function SignupModel({ setStep, step }) {
    const [stepIndex, setStepIndex] = useState(1);
    const [signUpForm, setSignUpForm] = useState({ name: "", email: "", Password: "", confirmPassword: "", mobile: "", aadhar: "", address: "", otp: "" })
    const [signUpErrors, setSignUpErrors] = useState({})
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onChange = (e) => {
        const { name, value } = e.target;
        setSignUpForm((prev) => ({ ...prev, [name]: value }));
        setSignUpErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            delete newErrors[name];
            return newErrors;
        });
    };

    const validateStep = () => {
        const errors = {};
        if (stepIndex === 1) {
            if (!signUpForm.name.trim()) errors.name = "Name is required.";
            if (!signUpForm.email.trim()) errors.email = "Email is required.";
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signUpForm.email)) errors.email = "Invalid email.";
            if (!signUpForm.Password) errors.Password = "Password is required.";
            else if (signUpForm.Password.length < 6) errors.Password = "Minimum 6 characters.";
            if (!signUpForm.confirmPassword) errors.confirmPassword = "Please confirm password.";
            else if (signUpForm.Password !== signUpForm.confirmPassword) errors.confirmPassword = "Passwords do not match.";
        } else if (stepIndex === 2) {
            if (!signUpForm.mobile) errors.mobile = "Mobile number is required.";
            if (!signUpForm.aadhar) errors.aadhar = "Aadhar number is required.";
            if (!signUpForm.address) errors.address = "Address is required.";
        }

        setSignUpErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleNext = () => {
        if (validateStep()) setStepIndex((prev) => prev + 1);
    };

    const handleBack = () => {
        if (stepIndex > 1) {
            setStepIndex((prev) => prev - 1);  // Go to previous step
        } else {
            setStep("login");  // Go back to login screen
        }
    };

    const handleSignup = (e) => {
        e?.preventDefault();
        if (validateStep()) {
            setStepIndex(3);
        }
    };

    return (
        <div>
            <form onSubmit={handleSignup} className="space-y-4">
                {stepIndex === 1 && (
                    <>
                        {/* Name */}
                        < div >
                            <label
                                htmlFor="name"
                                className="block text-sm md:text-lg text-[#111111] mb-2"
                            >
                                Name
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex items-center text-[#EA7913]">
                                    <img src={userIcon} alt="email" className="w-5 h-5" />
                                </span>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={signUpForm.name}
                                    onChange={onChange}
                                    placeholder="Enter Your name"
                                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#FFFFFF] text-[#3A3A3A] placeholder-gray-400 border-2 border-[#F8F8F8] focus:outline-none focus:ring-0 focus:border-[#EA7913]"
                                    required
                                />
                            </div>
                            {signUpErrors.name && <p className="text-red-500 text-sm mt-1">{signUpErrors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm md:text-lg text-[#111111] mb-2"
                            >
                                Email
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex items-center text-[#EA7913]">
                                    <img src={Emailicon} alt="email" className="w-5 h-5" />
                                </span>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={signUpForm.email}
                                    onChange={onChange}
                                    placeholder="Enter Your Email"
                                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#FFFFFF] text-[#3A3A3A] placeholder-gray-400 border-2 border-[#F8F8F8] focus:outline-none focus:ring-0 focus:border-[#EA7913]"
                                    required
                                />
                            </div>
                            {signUpErrors.email && <p className="text-red-500 text-sm mt-1">{signUpErrors.email}</p>}
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="Password"
                                className="block text-sm md:text-lg text-[#111111] mb-2"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex items-center text-[#EA7913]">
                                    <RiLockPasswordLine className="w-5 h-5" />
                                </span>
                                <input
                                    id="Password"
                                    name="Password"
                                    value={signUpForm.Password}
                                    onChange={onChange}
                                    className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#FFFFFF] text-[#3A3A3A] placeholder-gray-400 border-2 border-[#F8F8F8] focus:outline-none focus:ring-0 focus:border-[#EA7913]"
                                    placeholder="Enter Password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                />
                                {/* Eye icon */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer focus:outline-none"
                                >
                                    {showPassword ? (
                                        <img src={eyeIcon} className="w-5 h-5" alt="" />
                                    ) : (
                                        <IoEyeOffOutline className="w-5 h-5 text-[#EA7913]" />
                                    )}
                                </button>
                            </div>
                            {signUpErrors.Password && <p className="text-red-500 text-sm mt-1">{signUpErrors.Password}</p>}
                        </div>

                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm md:text-lg text-[#111111] mb-2"
                            >
                                Confirm Password
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex items-center text-[#EA7913]">
                                    <RiLockPasswordLine className="w-5 h-5" />
                                </span>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Confirm Your Password"
                                    value={signUpForm.confirmPassword}
                                    onChange={onChange}
                                    className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#FFFFFF] text-[#3A3A3A] placeholder-gray-400 border-2 border-[#F8F8F8] focus:outline-none focus:ring-0 focus:border-[#EA7913]"
                                    required
                                />
                                {/* Eye icon */}
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer focus:outline-none"
                                >
                                    {showConfirmPassword ? (
                                        <img src={eyeIcon} className="w-5 h-5" alt="" />
                                    ) : (
                                        <IoEyeOffOutline className="w-5 h-5 text-[#EA7913]" />
                                    )}
                                </button>
                            </div>
                            {signUpErrors.confirmPassword && <p className="text-red-500 text-sm">{signUpErrors.confirmPassword}</p>}
                        </div>
                    </>
                )}

                {stepIndex === 2 && (
                    <>
                        {/* Mobile Field */}
                        <div>
                            <label
                                htmlFor="mobile"
                                className="block text-sm md:text-lg text-[#111111] mb-2"
                            >
                                Mobile Number
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex items-center text-[#EA7913]">
                                    <img src={callIcon} alt="email" className="w-5 h-5" />
                                </span>
                                <input
                                    id="mobile"
                                    name="mobile"
                                    type="text"
                                    value={signUpForm.mobile}
                                    onChange={onChange}
                                    placeholder="Enter Your Mobile Number"
                                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#FFFFFF] text-[#3A3A3A] placeholder-gray-400 border-2 border-[#F8F8F8] focus:outline-none focus:ring-0 focus:border-[#EA7913]"
                                    required
                                />
                            </div>
                            {signUpErrors.mobile && <p className="text-red-500 text-sm">{signUpErrors.mobile}</p>}
                        </div>

                        {/* Aadhar Field */}
                        <div>
                            <label
                                htmlFor="aadhar"
                                className="block text-sm md:text-lg text-[#111111] mb-2"
                            >
                                Aadhar Card Number
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex items-center text-[#EA7913]">
                                    <img src={userIcon} alt="email" className="w-5 h-5" />
                                </span>
                                <input
                                    id="aadhar"
                                    name="aadhar"
                                    type="text"
                                    value={signUpForm.aadhar}
                                    onChange={onChange}
                                    placeholder="Enter Your Aadhar Card Number"
                                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#FFFFFF] text-[#3A3A3A] placeholder-gray-400 border-2 border-[#F8F8F8] focus:outline-none focus:ring-0 focus:border-[#EA7913]"
                                    required
                                />
                            </div>
                            {signUpErrors.aadhar && <p className="text-red-500 text-sm">{signUpErrors.aadhar}</p>}
                        </div>

                        {/* Address Field */}
                        <div>
                            <label
                                htmlFor="address"
                                className="block text-sm md:text-lg text-[#111111] mb-2"
                            >
                                Address
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex mt-4 text-[#EA7913]">
                                    <img src={mapIcon} alt="email" className="w-5 h-5" />
                                </span>
                                <textarea
                                    id="address"
                                    name="address"
                                    type="text"
                                    value={signUpForm.address}
                                    onChange={onChange}
                                    placeholder="Enter Your address"
                                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#FFFFFF] text-[#3A3A3A] placeholder-gray-400 border-2 border-[#F8F8F8] focus:outline-none focus:ring-0 focus:border-[#EA7913]"
                                    required
                                />
                            </div>
                            {signUpErrors.address && <p className="text-red-500 text-sm">{signUpErrors.address}</p>}
                        </div>
                    </>
                )}

                {stepIndex === 3 || stepIndex === 4 ? "" :
                    <div className="flex flex-col md:flex-row pt-5 md:pt-8 gap-4 md:gap-2 lg:gap-4">
                        <button type="button" onClick={handleBack} className="flex items-center justify-center w-full md:w-44 lg:w-1/2 gap-3 bg-[#FCEAC9] rounded-full px-0 lg:px-4 py-2 md:py-3 hover:bg-[#FEF8EC] cursor-pointer">
                            <img src={ArrowLeft} className="w-3 h-2.5 transition-all duration-300" alt="ArrowLeft" />
                            Back
                        </button>

                        {stepIndex === 2 ? (
                            <div className="w-full md:w-1/2 relative inline-block rounded-full p-[3px] hover:bg-none bg-[linear-gradient(90deg,_rgba(255,121,0,1)_0%,_rgba(234,211,190,1)_50%,_rgba(255,121,0,1)_100%)]">
                                <button onClick={() => handleSignup()} type="button" className="w-full flex items-center justify-center space-x-1.5 py-2 md:py-2.5 bg-[#EA7913] text-[#F8F8F8] rounded-full font-medium shadow hover:bg-[#F39C2C] active:bg-[#EA7913] cursor-pointer transition">
                                    <span>Create Account</span>
                                    {/* <img src={ArrowRight} className="w-3 h-2.5 transition-all duration-300" alt="ArrowRight" /> */}
                                </button>
                            </div>
                        ) : (
                            <div className="w-full md:w-1/2 relative inline-block rounded-full p-[3px] hover:bg-none bg-[linear-gradient(90deg,_rgba(255,121,0,1)_0%,_rgba(234,211,190,1)_50%,_rgba(255,121,0,1)_100%)]">
                                <button onClick={handleNext} type="button" className="w-full flex items-center justify-center space-x-1.5 py-2 md:py-2.5 bg-[#EA7913] text-[#F8F8F8] rounded-full font-medium shadow hover:bg-[#F39C2C] active:bg-[#EA7913] cursor-pointer transition">
                                    <span>Next</span>
                                    <img src={ArrowRight} className="w-3 h-2.5 transition-all duration-300" alt="ArrowRight" />
                                </button>
                            </div>
                        )}
                    </div>
                }
            </form >

            {stepIndex === 3 && (
                <OtpModal
                    verifyOtp3={(e) => {
                        e.preventDefault();
                        if (signUpForm.otp?.trim() === "123456") {
                            setStepIndex(4);
                        } else {
                            setSignUpErrors({ otp: "Invalid OTP" });
                        }
                    }}
                    signUpForm={signUpForm}
                    errors={signUpErrors}
                    onChange={onChange}
                />
            )}

            {stepIndex === 4 && (
                <SuccessModel stepIndex={stepIndex} />
            )}

            {/* <div className="flex items-center my-4 md:my-6">
                <div className="flex-grow border-t border-dashed border-gray-300"></div>
                <span className="mx-4 text-[#656565]">Or</span>
                <div className="flex-grow border-t border-dashed border-gray-300"></div>
            </div>

            <button onClick={() => setStep("signup")} type="button" className="w-full rounded-full py-2 md:py-3 bg-[#FCEAC9] hover:bg-[#FEF8EC] cursor-pointer">
                Create Account with Google
            </button> */}
        </div >
    )
}

export default SignupModel