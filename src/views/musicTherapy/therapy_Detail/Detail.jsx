import React, { useRef, useState } from 'react'
import playIcon from "../../../assets/svg-icon/play.svg"
import Left from "../../../assets/svg-icon/left.svg"
import Right from "../../../assets/svg-icon/right.svg"
import audio1 from "../../../assets/audio/audio.mp3"
import { IoIosPause } from "react-icons/io";

function Detail() {

  const [playingIndex, setPlayingIndex] = useState(null);
  const audioRefs = useRef([]);

  const handlePlayPause = (index) => {
    // If already playing → pause
    if (playingIndex === index) {
      audioRefs.current[index].pause();
      setPlayingIndex(null);
    } else {
      // Pause all others first
      audioRefs.current.forEach((audio, i) => {
        if (audio && i !== index) {
          audio.pause();
        }
      });
      // Play selected
      audioRefs.current[index].play();
      setPlayingIndex(index);
    }
  };

  const audioCard = [
    {
      day: "01",
      title: "Music Healing : Introduction",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    },
    {
      day: "02",
      title: "Therapy Onwards",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    },
    {
      day: "03",
      title: "Music Therapy 01",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    },
    {
      day: "04",
      title: "Music Therapy 02",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    },
    {
      day: "05",
      title: "Music Therapy 03",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    },
    {
      day: "06",
      title: "Music Therapy 04",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    }, {
      day: "07",
      title: "Music Therapy 05",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    }, {
      day: "08",
      title: "Music Therapy 06",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    }, {
      day: "09",
      title: "Music Therapy 07",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    }, {
      day: "10",
      title: "Music Therapy 08",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    }, {
      day: "11",
      title: "Music Therapy 09",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    }, {
      day: "12",
      title: "Music Therapy 10",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    }, {
      day: "13",
      title: "Music Therapy 11",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    }, {
      day: "14",
      title: "Music Therapy 12",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    }, {
      day: "15",
      title: "Music Therapy 13",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    }, {
      day: "16",
      title: "Music Therapy 14",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    }, {
      day: "17",
      title: "Music Therapy 15",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    }, {
      day: "18",
      title: "Music Therapy 16",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    }, {
      day: "19",
      title: "Music Therapy 17",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    }, {
      day: "20",
      title: "Music Therapy 18",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    }, {
      day: "21",
      title: "Music Therapy 19",
      description: "Shree Sai Reiki is dedicated to healing, balance, & spiritual growth through ?",
      audio: audio1
    }
  ]

  const itemsPerPage = 7
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(audioCard.length / itemsPerPage)
  const currentItems = audioCard.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <section className="py-9 sm:py-14 md:py-16 px-4 xl:px-0 text-[#464646]">
      <div>
        {/* Therapy Details Container - Flexbox Layout */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-8 lg:gap-12">
          {/* Left Side - Introduction Text */}
          <div className="lg:w-1/2">
            <div className="mb-12">
              <h2 className="text-[28px] md:text-4xl font-Raleway"><span className="font-bold">Therapy Details</span></h2>
              <p className="text-lg sm:text-xl text-[#000000] max-w-2xl mt-4">
                Discover the healing sessions designed to relax your mind and restore your energy — all starting with a free consultation.
              </p>
            </div>
          </div>

          {/* Right Side - Therapy Details Items */}
          <div className="lg:w-1/2">
            <div className="space-y-4">
              {currentItems.map((Data, index) => (
                <div className="flex items-center justify-between bg-[#F8F8F8] rounded-2xl pr-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#EA7913] text-[#F8F8F8] rounded-2xl px-4.5 py-8.5 text-center">
                      <div className="text-2xl font-semibold">{Data.day}</div>
                      <div className="text-xs leading-none">Day</div>
                    </div>
                    <div className='py-4 pr-4'>
                      <h3 className="text-lg md:text-2xl font-semibold text-[#525252]">{Data.title}</h3>
                      <p className="text-xs md:text-sm pr-5">{Data.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handlePlayPause(index)}
                    className="p-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-105"
                  >
                    {playingIndex === index ? (
                      <IoIosPause size={35} className="text-[#EA7913]" />
                    ) : (
                      <img src={playIcon} alt="play" className="w-7 h-7" />
                    )}
                  </button>

                  {/* Hidden audio element */}
                  <audio
                    ref={(el) => (audioRefs.current[index] = el)}
                    src={Data.audio}
                    onEnded={() => setPlayingIndex(null)}
                  />
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-end items-center gap-6 mt-7">
              {/* Prev Button */}
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className={`w-12 h-12 bg-[#FCEAC9] hover:bg-[#FEF8EC] rounded-full flex items-center justify-center transition-all duration-300
                  ${currentPage === 1 ? 'bg-[#FEF8EC] cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <img src={Left} alt="Previous" className="w-3 h-2.5" />
              </button>

              {/* Page Info */}
              <span className="text-sm md:text-base font-medium text-gray-700">
                {currentPage} of {totalPages}
              </span>

              {/* Next Button */}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className={`w-12 h-12 bg-[#FCEAC9] hover:bg-[#FEF8EC] rounded-full flex items-center justify-center transition-all duration-300
                  ${currentPage === totalPages ? 'bg-[#FEF8EC] cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <img src={Right} alt="Previous" className="w-3 h-2.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Detail  