import firstC from "../../assets/circle1.png";
import secondC from "../../assets/circle2.png";
import analytics from "../../assets/analytics.png";
import { FaTrophy } from "react-icons/fa6";

const MasteryProgress = ({ questionsLength, correctCount }) => {
  const mastery = Math.round((correctCount / questionsLength) * 100);

  const currentThreshold = 70;
  const targetMastery = 90;

  const targetCorrect = Math.ceil((targetMastery / 100) * questionsLength);

  const remaining = Math.max(targetCorrect - correctCount, 0);
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm space-y-4  flex flex-col border-[#DBEAFE] border-[0.063rem]">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-lg font-bold text-[#1E3A8A]">Mastery Progress</h3>
        <img src={analytics} alt="ana" className="w-3 h-3" />
      </div>
      <div className="relative w-28 h-28 flex items-center justify-center self-center">
        <img src={secondC} alt="progress" className="absolute w-full h-full" />
        <img src={firstC} alt="bg" className="absolute w-full h-full" />


        <span className="relative text-xl font-bold text-[#1E3A8A]">
          {mastery}%
        </span>
      </div>

      <div className="text-sm space-y-1">
        <div className="flex justify-between text-[#4B5563]">
          <span className="text-sm font-normal">Current Threshold</span>
          <span className="font-semibold text-sm text-[#1E3A8A]">{currentThreshold}%</span>
        </div>

        <div className="flex justify-between text-[#4B5563]">
          <span className="text-sm font-normal">Target Mastery</span>
          <span className="font-semibold text-sm text-[#3B82F6]">{targetMastery}%</span>
        </div>

        <div className="flex justify-between text-[#4B5563]">
          <span className="text-sm font-normal">Questions Remaining</span>
          <span className="font-semibold text-sm text-[#1E3A8A]">{remaining}</span>
        </div>
      </div>

      <div className="bg-blue-50 text-blue-600 text-xs p-3 rounded-lg flex flex-col items-start gap-2">
        <div className="flex flex-row items-center gap-1">
          <FaTrophy className="text-[#60A5FA] text-sm" />
          <p className="font-semibold text-sm text-[#1E3A8A]">Almost There!</p>
        </div>
        <div className="text-xs text-[#4B5563] font-normal">
          {remaining > 0
            ? ` 
          Get ${remaining} more correct to reach mastery`
            : "You reached mastery threshold"}
        </div>
      </div>
    </div>
  );
};

export default MasteryProgress;
