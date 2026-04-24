import React from "react";
import LeftSideExam from "../leftSideExam/LeftSideExam";
import RighrSideExam from "./../rightSideExam/RighrSideExam";

const ExamMain = ({
  progressPercent,
  correctCount,
  questions,
  currentQuestionIndex,
  wrongCount,
  currentQuestion,
  answers,
  setCurrentQuestionIndex,
  handleAnswer,
  handleSubmit,
  submittedQuestions,
  questionsLength,
  showResultModal,
  setShowResultModal,
}) => {
  return (
    <div className="flex flex-row items-start gap-4">
      <div className="w-[70%]">
        <LeftSideExam
          setShowResultModal={setShowResultModal}
          showResultModal={showResultModal}
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          wrongCount={wrongCount}
          correctCount={correctCount}
          progressPercent={progressPercent}
          currentQuestion={currentQuestion}
          answers={answers}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          handleAnswer={handleAnswer}
          handleSubmit={handleSubmit}
          submittedQuestions={submittedQuestions}
        />
      </div>
      <div className="w-[35%]">
        <RighrSideExam
          correctCount={correctCount}
          questionsLength={questionsLength}
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          submittedQuestions={submittedQuestions}
          answers={answers}
          setShowResultModal={setShowResultModal}
        />
      </div>
    </div>
  );
};

export default ExamMain;
