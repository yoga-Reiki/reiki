import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeOffOutline } from "react-icons/io5";
import loginBG from "../../assets/img/loginBG.png";
import Emailicon from "../../assets/svg-icon/Email.png";
import ArrowLeft from "../../assets/svg-icon/left.svg";
import eyeIcon from "../../assets/svg-icon/eyeIcon.svg";
import { useNavigate } from "react-router-dom";
import OtpModal from "./OtpModel";
import ChangePassModel from "./ChangePassModel";
import SuccessModel from "./SuccessModel";
import SignupModel from "../signUp/SignupModel";

function LoginModal({ onClose }) {
    const [form, setForm] = useState({ email: "", Password: "", otp: "", newPassword: "", confirmPassword: "" });
    const [errors, setErrors] = useState({});
    const [step, setStep] = useState("login");
    const [showPassword, setShowPassword] = useState(false);

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            delete newErrors[name];
            return newErrors;
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Trim input to avoid whitespace errors
        const email = form.email.trim();

        // Email validations
        if (!email) {
            newErrors.email = "Email is required.";
        } else if (!email.includes("@")) {
            newErrors.email = "Email must include '@' symbol.";
        } else if (!email.includes(".")) {
            newErrors.email = "Email must include a dot ('.') after '@'.";
        } else {
            if (!emailPattern.test(email)) {
                newErrors.email = "Enter a valid email address.";
            }
        }

        // Password validations
        if (!form.Password) {
            newErrors.Password = "Password is required.";
        } else if (form.Password.length < 6) {
            newErrors.Password = "Password must be at least 6 characters.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setStep("success");
    };

    const onForgotPassword = () => {
        if (!form.email) {
            alert("Please enter your email to reset password.");
            return;
        }
        setStep("otp");
    };

    const verifyOtp = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (form.otp.trim() !== "123456") {
            newErrors.otp = "Invalid OTP";
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setStep("changePassword");
    };

    const handleChangePassword = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!form.newPassword) {
            newErrors.newPassword = "New password is required.";
        } else if (form.newPassword.length < 6) {
            newErrors.newPassword = "Password must be at least 6 characters.";
        }

        if (!form.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password.";
        } else if (form.newPassword !== form.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setStep("success");
    };


    return (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center p-4 text-[#464646]">
            <div
                className="relative w-full p-3 lg:max-w-4xl xl:max-w-6xl min-h-[560px] rounded-3xl overflow-hidden shadow-lg flex"
                style={{
                    backgroundImage: `url(${loginBG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="ml-auto w-full md:w-96 lg:w-1/2 bg-[#F8F8F8] rounded-xl p-6 md:px-8 md:py-6 lg:px-12 lg:py-8 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl md:text-[40px] font-bold">
                            {{
                                login: "Login",
                                signup: "Create Account",
                                otp: "OTP Verification",
                                changePassword: "Change Password",
                                success: "Success",
                            }[step]}
                        </h2>
                        <button onClick={onClose} className="cursor-pointer">
                            <IoIosClose size={40} />
                        </button>
                    </div>

                    {/* STEP: LOGIN */}
                    {step === "login" && (
                        <div>
                            <form onSubmit={onSubmit} className="space-y-4.5">
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
                                            value={form.email}
                                            onChange={onChange}
                                            placeholder="Enter Your Email"
                                            className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#FFFFFF] text-[#3A3A3A] placeholder-gray-400 border-2 border-[#F8F8F8] focus:outline-none focus:ring-0 focus:border-[#EA7913]"
                                            required
                                        />
                                    </div>
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                                            value={form.Password}
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
                                    {errors.Password && <p className="text-red-500 text-sm mt-1">{errors.Password}</p>}
                                    <div className="flex justify-end pt-1">
                                        <button type="button" onClick={onForgotPassword} className="text-sm text-[#111111]">Forgot Password ?</button>
                                    </div>
                                </div>

                                <div className="pt-5 md:pt-8">
                                    {/* <div className="flex flex-col md:flex-row pt-5 md:pt-8 gap-4 md:gap-2 lg:gap-4"> */}
                                    {/* <button className="flex items-center justify-center w-full md:w-44 lg:w-1/2 gap-3 bg-[#FCEAC9] rounded-full px-0 lg:px-4 py-2 md:py-3 hover:bg-[#FEF8EC] cursor-pointer">
                                        <img src={ArrowLeft} className="w-3 h-2.5 transition-all duration-300" alt="ArrowLeft" />
                                        Back
                                    </button> */}

                                    <div className="w-full relative inline-block rounded-full p-[3px] hover:bg-none bg-[linear-gradient(90deg,_rgba(255,121,0,1)_0%,_rgba(234,211,190,1)_50%,_rgba(255,121,0,1)_100%)]">
                                        <button onClick={onSubmit} type="submit" className="inline-flex justify-center items-center space-x-1.5 py-2 md:py-2.5 bg-[#EA7913] text-[#F8F8F8] rounded-full font-medium shadow hover:bg-[#F39C2C] active:bg-[#EA7913] hover:cursor-pointer transition w-full h-full">
                                            <span>Login</span>
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className="flex items-center my-4 md:my-6">
                                <div className="flex-grow border-t border-dashed border-gray-300"></div>
                                <span className="mx-4 text-[#656565]">Or</span>
                                <div className="flex-grow border-t border-dashed border-gray-300"></div>
                            </div>

                            <button onClick={() => setStep("signup")} type="button" className="w-full rounded-full py-2 md:py-3 bg-[#FCEAC9] hover:bg-[#FEF8EC] cursor-pointer">
                                Create Account with Google
                            </button>
                        </div>
                    )}
                    {step === "signup" && (
                        <SignupModel setStep={setStep} step={step} />
                    )}

                    {/* STEP: OTP */}
                    {step === "otp" && (
                        <OtpModal verifyOtp={verifyOtp} form={form} errors={errors} onChange={onChange} />
                    )}

                    {/* STEP: Change Password */}
                    {step === "changePassword" && (
                        <ChangePassModel form={form} errors={errors} onChange={onChange} handleChangePassword={handleChangePassword} />
                    )}

                    {/* STEP: Success */}
                    {step === "success" && (
                        <SuccessModel newPassword={form.newPassword} onClose={onClose} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default LoginModal;


