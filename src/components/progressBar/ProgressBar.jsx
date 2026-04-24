import React from "react";
import { Progress } from "flowbite-react";

export const ProgressBar = ({
  progressPercent,
  correctCount,
  questions,
  currentQuestionIndex,
  wrongCount,
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm space-y-3 border-[#DBEAFE] border-[0.063rem]">
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium text-gray-600">
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>

        <div className="flex gap-3 text-xs">
          <span className="text-green-600 font-medium">
            ● {correctCount} Correct
          </span>
          <span className="text-red-500 font-medium">● {wrongCount} Wrong</span>
        </div>
      </div>

      <Progress
        progress={progressPercent}
        size="lg"
        className="rounded-full [&>div]:bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"
      />
    </div>
  );
};
