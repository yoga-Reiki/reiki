import React, { useState } from "react";
import eyeIcon from "../../assets/svg-icon/eyeIcon.svg";
import { IoEyeOffOutline } from "react-icons/io5";

function OtpModal({ verifyOtp, form, errors, onChange, verifyOtp3, signUpForm }) {
    const [showOtp, setShowOtp] = useState(false);

    return (
        <form
            onSubmit={verifyOtp ? verifyOtp : verifyOtp3}
            className="flex flex-col flex-1 justify-between min-h-[420px]"
        >
            <div>
                <p className="mb-4 text-[#464646] text-base md:text-xl">
                    OTP has been sent to your email <strong>{form ? form?.email : signUpForm?.email}</strong>.
                </p>
                <div>
                    <label
                        htmlFor="otp"
                        className="block text-sm md:text-lg text-[#111111] mb-2"
                    >
                        OTP
                    </label>
                    <div className="relative">
                        <input
                            id="otp"
                            name="otp"
                            value={form?.otp || signUpForm?.otp}
                            onChange={onChange}
                            placeholder="Enter OTP"
                            className="w-full px-3 py-3 rounded-xl bg-[#FFFFFF] text-[#3A3A3A] placeholder-gray-400 border-2 border-[#F8F8F8] focus:outline-none focus:ring-0 focus:border-[#EA7913]"
                            type={showOtp ? "text" : "password"}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowOtp(!showOtp)}
                            className="absolute inset-y-0 right-3 flex items-center cursor-pointer focus:outline-none"
                        >
                            {showOtp ? (
                                <IoEyeOffOutline className="w-5 h-5 text-[#EA7913]" />
                            ) : (
                                <img src={eyeIcon} className="w-5 h-5" alt="eye" />
                            )}
                        </button>
                    </div>
                    {errors.otp && <p className="text-red-500 text-sm mt-1">{errors.otp}</p>}
                </div>
            </div>

            <div className="w-full relative inline-block rounded-full p-[3px] bg-[linear-gradient(90deg,_rgba(255,121,0,1)_0%,_rgba(234,211,190,1)_50%,_rgba(255,121,0,1)_100%)]">
                <button
                    type="submit"
                    className="inline-flex justify-center items-center cursor-pointer space-x-1.5 py-1.5 bg-[#EA7913] text-[#F1F1F1] rounded-full font-medium shadow hover:bg-[#F39C2C] active:bg-[#EA7913] transition w-full h-full"
                >
                    <span>Next</span>
                </button>
            </div>
        </form>
    );
}


export default OtpModal;
