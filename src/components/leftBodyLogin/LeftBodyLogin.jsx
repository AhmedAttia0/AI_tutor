import robot from "../../assets/image2.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import { GoDotFill } from "react-icons/go";

const LeftBodyLogin = () => {
  return (
    <div className="">
      <div className="relative rounded-3xl bg-[#3656B3] p-8 overflow-hidden">
        <div className="absolute -top-0 -left-0 h-[21.75rem] w-[21.75rem] rounded-full bg-[#60A5FA33]"></div>

        <div className="relative z-10 text-center flex flex-col items-center gap-1">
          <div className="mx-auto h-[12rem] w-[12rem] ">
            {" "}
            <img src={robot} alt="" />
          </div>

          <div className="mb-5">
            <h2 className="mt-6 text-3xl font-bold text-white">
              Meet Your AI Mentor
            </h2>
            <p className="mt-2 text-white/80">
              I'm CogniBot, your intelligent learning companion
            </p>
          </div>
          <div className="bg-[#FFFFFF0D] p-5 rounded-3xl flex flex-col gap-5">
            <div className="flex flex-row items-center justify-start gap-3">
              <div>
                <img src={icon1} className="w-10 h-10" alt="" />
              </div>
              <div className="flex flex-col items-start">
                <p className="text-base font-medium text-white">
                  Advanced Learning Intelligence
                </p>
                <p className="text-sm font-normal text-[#BFDBFE]">
                  I adapt to your learning style and pace in real-time
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <div>
                <img src={icon2} className="w-10 h-10" alt="" />
              </div>
              <div className="flex flex-col items-start">
                <p className="text-base font-medium text-white">
                  Natural Conversation
                </p>
                <p className="text-sm font-normal text-[#BFDBFE]">
                  Ask me anything, anytime - I understand context
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <div>
                <img src={icon3} className="w-10 h-10" alt="" />
              </div>
              <div className="flex flex-col items-start">
                <p className="text-base font-medium text-white">
                  Personalized Guidance
                </p>
                <p className="text-sm font-normal text-[#BFDBFE]">
                  I track your progress and fill knowledge gaps
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center mt-2">
            <GoDotFill className="text-[#22C55E]" />
            <p className="font-normal text-[#DBEAFE] text-sm ">
              Online & Ready to Help 24/7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBodyLogin;
