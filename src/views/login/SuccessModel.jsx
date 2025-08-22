import React from 'react'
import { useNavigate } from 'react-router-dom'

function SuccessModel({ newPassword, onClose, stepIndex }) {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col h-full justify-between">
            {/* Message */}
            <p>
                {newPassword
                    ? "Your password has been changed."
                    : stepIndex === 4 ? "Your account has been created successfully. You are now one step closer to discovering inner peace, balance, and spiritual growth."
                    : "You have logged in successfully."}
            </p>

            {/* Button at end */}
            <div className={`w-full ${stepIndex === 4 ? "mt-80 md:mt-72" : "mt-6"} relative inline-block rounded-full p-[3px] bg-[linear-gradient(90deg,_rgba(255,121,0,1)_0%,_rgba(234,211,190,1)_50%,_rgba(255,121,0,1)_100%)]`}>
                <button
                    onClick={() => {
                        navigate("/")
                        onClose()
                    }}
                    className="inline-flex justify-center items-center space-x-1.5 py-1.5 bg-[#EA7913] text-[#F8F8F8] rounded-full font-medium shadow hover:bg-[#F39C2C] active:bg-[#EA7913] hover:cursor-pointer transition w-full h-full"
                >
                    <span>Go Back Home</span>
                </button>
            </div>
        </div>
    )
}

export default SuccessModel
