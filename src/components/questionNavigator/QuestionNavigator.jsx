import React from "react";

const QuestionNavigator = ({
  questions,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  submittedQuestions,
  answers,
}) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm space-y-4 border-[#DBEAFE] border-[0.063rem]">
      <h3 className="text-lg font-bold text-[#1E3A8A]">Question Navigator</h3>

      <div className="grid grid-cols-5 gap-2">
        {questions.map((q, index) => {
          const isCurrent = index === currentQuestionIndex;
          const isAnswered =
            submittedQuestions[index] && answers[index] !== undefined;

          let bgColor = "bg-[#DBEAFE] text-[#1E3A8A]";

          if (isCurrent) {
            bgColor =
              "bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A] text-white";
          } else if (isAnswered) {
            bgColor = "bg-[#22C55E] text-white";
          }

          return (
            <button
              key={index}
              onClick={() => setCurrentQuestionIndex(index)}
              className={`w-10 h-10 rounded-lg text-base font-semibold transition ${bgColor}`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <div className="flex flex-col gap-2 pt-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-[#22C55E]"></span>
          <span className="text-[#4B5563] font-normal text-xs">
            Answered Correctly
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A]"></span>
          <span className="text-[#4B5563] font-normal text-xs">
            Current Question
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-[#DBEAFE]"></span>
          <span className="text-[#4B5563] font-normal text-xs">
            Not Attempted
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuestionNavigator;
