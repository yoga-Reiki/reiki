import React from "react";
import blog1 from "../../../assets/img/blog1.png"
import { Link, useParams } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

function Detail() {
    const { blogid } = useParams()

    return (
        <div className="py-9 sm:py-14 md:py-16 px-4 xl:px-0 text-[#464646]">
            {/* Top Section */}
            <div className="flex items-center space-x-2 text-gray-500 pb-8">
                <Link to="/blog" className='hover:text-[#EA7913]'>Blogs</Link>
                <MdArrowForwardIos size={12} />
                <Link className='text-[#EA7913] font-semibold'>{blogid}</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[690px_490px] gap-12 items-start pb-14">
                {/* Left Content */}
                <div>
                    <h1 className="text-3xl sm:text-4xl font-delcy text-[#292929]">
                        How to Learn Reiki at Home
                    </h1>
                    <p className="pt-9 text-[#525252] text-base">
                        Discover how you can start your Reiki journey right from your home.
                        With the right resources and mindset, learning this powerful healing
                        art is easier than you think.
                    </p>
                </div>

                {/* Right Image */}
                <div>
                    <img
                        src={blog1}
                        alt="Reiki therapy"
                        className="rounded-lg w-full h-64 object-fill"
                    />
                </div>
            </div>

            {/* Content Box */}
            <div className="bg-[#F8F8F8] rounded-lg p-4 sm:p-6">
                <h2 className="text-3xl font-Raleway Raleway-bold text-[#292929]">
                    How to Learn Reiki at Home
                </h2>
                <p className="py-6 text-gray-700 leading-relaxed">
                    Reiki is a holistic healing practice based on the concept of channeling universal life energy to promote physical and emotional balance. Practitioners use gentle hand placements over or near the body to clear blockages and support energy flow, especially around key chakras. This process is believed to help the body activate its own healing response, fostering a sense of calm and well-being.
                </p>

                <h2 className="text-3xl font-Raleway Raleway-bold text-[#292929]">
                    How to Learn Reiki at Home
                </h2>
                <p className="pt-6 text-gray-700 leading-relaxed">
                    While Reiki is rooted in ancient spiritual traditions, modern studies have begun to recognize its therapeutic effects. Research suggests it may reduce stress, improve relaxation, and aid in pain relief by activating the parasympathetic nervous system. Though it’s not a replacement for conventional medicine, Reiki is increasingly used as a complementary therapy in hospitals and wellness centers worldwide.
                </p>
            </div>
        </div>
    );
}

export default Detail;
