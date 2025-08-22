import React, { useState } from 'react'
import eyeIcon from "../../assets/svg-icon/eyeIcon.svg"
import { IoEyeOffOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";

function ChangePassModel({ form, errors, onChange, handleChangePassword }) {
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <form onSubmit={handleChangePassword} className="flex flex-col flex-1 justify-between min-h-[420px]">

            <div className='space-y-4.5'>
                <p className="mb-4 text-[#464646] text-base md:text-xl">
                    OTP has sent to your E-mail <strong>{form.email}</strong>.
                </p>
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
                            type={showNewPassword ? "text" : "password"}
                            name="newPassword"
                            placeholder="Enter Password"
                            value={form.newPassword}
                            onChange={onChange}
                            className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#FFFFFF] text-[#3A3A3A] placeholder-gray-400 border-2 border-[#F8F8F8] focus:outline-none focus:ring-0 focus:border-[#EA7913]"
                            required
                        />
                        {/* Eye icon */}
                        <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute inset-y-0 right-3 flex items-center cursor-pointer focus:outline-none"
                        >
                            {showNewPassword ? (
                                <img src={eyeIcon} className="w-5 h-5" alt="" />
                            ) : (
                                <IoEyeOffOutline className="w-5 h-5 text-[#EA7913]" />
                            )}
                        </button>
                    </div>
                    {errors.newPassword && (
                        <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
                    )}
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
                            value={form.confirmPassword}
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
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                    )}
                </div>
            </div>
            <div className="w-full relative inline-block rounded-full p-[3px] bg-[linear-gradient(90deg,_rgba(255,121,0,1)_0%,_rgba(234,211,190,1)_50%,_rgba(255,121,0,1)_100%)]">
                <button
                    type="submit"
                    className="inline-flex justify-center items-center space-x-1.5 py-1.5 bg-[#EA7913] text-[#F8F8F8] rounded-full font-medium shadow hover:bg-[#F39C2C] active:bg-[#EA7913] transition w-full h-full cursor-pointer"
                >
                    <span>Change Password</span>
                </button>
            </div>
        </form>
    );
}


export default ChangePassModel