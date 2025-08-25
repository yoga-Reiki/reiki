import React, { useRef, useState, useEffect } from 'react';
import yogaImag from '../../../assets/img/error yoga 2.png';
import playIcon from "../../../assets/svg-icon/play.svg";
import { IoIosPause } from "react-icons/io";
import Audio1 from "../../../assets/audio/audio.mp3";

function AudioBlock() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [dayCompleted, setDayCompleted] = useState(false);

    const AUDIO_PROGRESS_KEY = "audio_progress_day1";
    const DAY_COMPLETE_KEY = "day_01_completed";

    const handlePlayPause = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            setCurrentTime(audio.currentTime);
            setDuration(audio.duration || 0);
            setProgress((audio.currentTime / audio.duration) * 100 || 0);

            localStorage.setItem(AUDIO_PROGRESS_KEY, audio.currentTime.toString());
        };

        const savedTime = localStorage.getItem(AUDIO_PROGRESS_KEY);
        if (savedTime) {
            audio.currentTime = parseFloat(savedTime);
        }

        const isDayComplete = localStorage.getItem(DAY_COMPLETE_KEY);
        if (isDayComplete) {
            setDayCompleted(true);
        }

        audio.addEventListener("timeupdate", updateProgress);
        audio.addEventListener("loadedmetadata", updateProgress);
        audio.addEventListener("ended", () => {
            setIsPlaying(false);
            if (!dayCompleted) {
                setDayCompleted(true);
                localStorage.setItem(DAY_COMPLETE_KEY, "true");
            }
        });

        return () => {
            audio.removeEventListener("timeupdate", updateProgress);
            audio.removeEventListener("loadedmetadata", updateProgress);
        };
    }, []);

    return (
        <div className="text-[#464646]">
            {/* Therapy Progress */}
            {dayCompleted &&
                <div className="py-9 sm:py-14 md:py-16 px-4 xl:px-0">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-[40px] font-semibold font-Raleway">Therapy Progress</h2>
                        <span className="text-xl">
                            {dayCompleted ? "Day 1 Completed" : "Day 1 Pending"}
                        </span>
                    </div>

                    {/* 21-Day Visual Tracker */}
                    <div className="flex space-x-1">
                        {[...Array(21)].map((_, index) => (
                            <div
                                key={index}
                                className={`h-1.5 rounded-full flex-1 transition-all duration-300
                                ${index === 0 && dayCompleted
                                        ? "bg-gradient-to-r from-[#F57C00] to-[#FFB74D]"
                                        : "bg-[#E0E0E0]"
                                    }
                            `}
                            />
                        ))}
                    </div>

                    {dayCompleted && (
                        <p className="flex justify-end text-xs text-gray-500 pt-3.5">Day 1 Completed, Stay Continue.</p>
                    )}
                </div>
            }

            <div className="flex items-center gap-4 rounded-xl w-full py-9 sm:py-14 md:py-16 px-4 xl:px-0">
                <img
                    src={yogaImag}
                    alt="Meditation"
                    className="w-27 h-27 object-cover rounded-xl"
                />

                <div className="bg-[#F8F8F8] flex items-center w-full rounded-xl">
                    <div className="bg-[#EA7913] text-[#F8F8F8] rounded-2xl px-4.5 py-8 text-center">
                        <div className="text-2xl font-semibold">01</div>
                        <div className="text-xs leading-none">Day</div>
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col w-full px-4.5">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-800">21 Days Audio</h3>

                            <button
                                onClick={handlePlayPause}
                                className="p-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-105"
                            >
                                {isPlaying ? (
                                    <IoIosPause className="text-[#EA7913] w-7 h-7" />
                                ) : (
                                    <img src={playIcon} alt="play" className="w-7 h-7" />
                                )}
                            </button>

                            <audio ref={audioRef} src={Audio1} />
                        </div>

                        <p className="text-sm text-gray-500">
                            You have to listen this audio for 21 days continuously without leaving otherwise it will not become effective
                        </p>

                        {/* Progress Bar */}
                        <div className="mt-2 flex items-center justify-between">
                            <div className="relative w-full h-[6px] bg-[#E9E9E9] rounded-full overflow-hidden mr-3">
                                <div
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#F57C00] to-[#FFB74D] rounded-full"
                                    style={{ width: `${progress}%` }}
                                ></div>
                                <div
                                    className="absolute top-1/2 transform -translate-y-1/2 w-[10px] h-[10px] bg-white border-[3px] border-orange-400 rounded-full shadow-md"
                                    style={{ left: `${progress}%` }}
                                ></div>
                            </div>

                            <div className="text-xs text-gray-600 font-medium whitespace-nowrap">
                                {formatTime(currentTime)} / {formatTime(duration)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AudioBlock;











