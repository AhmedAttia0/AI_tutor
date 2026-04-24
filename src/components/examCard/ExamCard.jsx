import logo from "../../assets/lamp.png";
const ExamCard = ({
  currentQuestionIndex,
  currentQuestion,
  answers,
  setCurrentQuestionIndex,
  handleAnswer,
  handleSubmit,
  submittedQuestions,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm space-y-5 border-[#DBEAFE] border-[0.063rem] ">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] rounded-xl text-white text-xl font-bold">
            {currentQuestionIndex + 1}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-2">
             
              <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                {currentQuestion.difficulty}
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                {currentQuestion.type}
              </span>
            </div>

            <span className="text-xs text-gray-400">
              {currentQuestion.points} points
            </span>
          </div>
        </div>

        <button className="text-sm bg-[#DBEAFE] text-[#3B82F6] px-3 py-1 rounded-lg ">
          <div className="flex gap-2 items-center">
            <img src={logo} className="w-[0.5rem] h-[0.813rem]" alt="" /> Hint
          </div>
        </button>
      </div>

      <h2 className="text-2xl font-semibold text-[#1E3A8A]">
        {currentQuestion.question}
      </h2>

      <p className="text-base font-normal text-gray-500">
        Select the correct answer from the options below.
      </p>

      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => {
          const isSelected = answers[currentQuestionIndex] === index;
          const isCorrect = currentQuestion.correctAnswer === index;
          const isSubmitted = submittedQuestions[currentQuestionIndex];
          const hasAnswer = answers[currentQuestionIndex] !== undefined;
          let optionClass =
            "flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition ";

          if (!isSubmitted) {
            optionClass += isSelected
              ? "bg-blue-50 border-blue-500"
              : "bg-gray-50 border-gray-200 hover:bg-gray-100";
          }

    
          else {
            if (!hasAnswer) {
              optionClass += "bg-gray-50 border-gray-200";
            } else {
              
              if (isCorrect) {
                optionClass += "bg-green-100 border-green-500";
              } else if (isSelected && !isCorrect) {
                optionClass += "bg-red-100 border-red-500";
              } else {
                optionClass += "bg-gray-50 border-gray-200";
              }
            }
          }

          return (
            <div
              key={index}
              onClick={() => handleAnswer(index)}
              className={optionClass}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                  ${
                    isSubmitted && hasAnswer
                      ? isCorrect
                        ? "border-green-600"
                        : isSelected
                          ? "border-red-600"
                          : "border-gray-400"
                      : isSelected
                        ? "border-blue-600"
                        : "border-gray-400"
                  }`}
              >
                {isSelected && (
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isSubmitted && hasAnswer
                        ? isCorrect
                          ? "bg-green-600"
                          : "bg-red-600"
                        : "bg-blue-600"
                    }`}
                  ></div>
                )}
              </div>

              <span className="text-base font-normal text-[#1E3A8A]">
                {option}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center pt-4">
        <button
          disabled={currentQuestionIndex === 0}
          onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
          className="text-sm text-gray-500 disabled:opacity-50"
        >
          ← Previous
        </button>

        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] text-white px-5 py-2 rounded-lg text-sm"
        >
          Submit Answer →
        </button>
      </div>
    </div>
  );
};

export default ExamCard;
