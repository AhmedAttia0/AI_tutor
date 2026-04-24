import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaClock } from "react-icons/fa6";
import { FaPause, FaPlay } from "react-icons/fa6";
const ExamHeader = ({ onTimeUp }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const toggleTimer = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      const newEndTime = Date.now() + timeLeft * 1000;
      setEndTime(newEndTime);
      localStorage.setItem("examEndTime", newEndTime);
      setIsRunning(true);
    }
  };
  const [timeLeft, setTimeLeft] = useState(15 * 60); 
  const [isRunning, setIsRunning] = useState(true);
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    const savedEndTime = localStorage.getItem("examEndTime");

    if (savedEndTime) {
      setEndTime(Number(savedEndTime));
    } else {
      const newEndTime = Date.now() + 15 * 60 * 1000; 
      localStorage.setItem("examEndTime", newEndTime);
      setEndTime(newEndTime);
    }
  }, []);
  useEffect(() => {
    if (!isRunning || !endTime) return;

    const timer = setInterval(() => {
      const remaining = Math.max(Math.floor((endTime - Date.now()) / 1000), 0);

      setTimeLeft(remaining);

      if (remaining === 0) {
        clearInterval(timer);
        setIsRunning(false);
        onTimeUp && onTimeUp();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, endTime]);
  return (
    <div className="mainHeader flex flex-row justify-between">
      <div className="leftside flex flex-col gap-1 items-start ">
        <div className="flex flex-row items-center gap-2">
          <div className="text-[#4B5563] w-[1.094rem] h-[0.938rem] cursor-pointer">
            <FaArrowLeft />
          </div>
          <h2 className="font-bold text-[#1E3A8A] text-3xl">
            Mathematics Quiz
          </h2>
        </div>
        <div>
          <p className="font-normal text-base text-[#4B5563] ps-6">
            Test your understanding of Calculus - Derivatives
          </p>
        </div>
      </div>
      <div className="rightSide flex flex-row items-center gap-4">
        <div className="flex flex-row items-center gap-1 bg-[#FFFFFF] px-4 py-1 rounded-xl border-[#DBEAFE] border-[1px]  ">
          <FaClock className="text-[#3B82F6] text-xs overflow-visible -translate-y-[-14%]" />
          <span className="text-base font-semibold text-[#1E3A8A]">
            {formatTime(timeLeft)}
          </span>
        </div>
        <button
          onClick={toggleTimer}
          className="text-[#1E3A8A] p-2 rounded-xl border-[#DBEAFE] border-[1px]"
        >
          {isRunning ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
};

export default ExamHeader;
