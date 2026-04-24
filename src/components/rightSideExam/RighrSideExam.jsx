import React from "react";
import MasteryProgress from "./../masteryProgress/MasteryProgress";
import QuestionNavigator from "../questionNavigator/QuestionNavigator";
import DifficultyLevel from "../difficultyLevel/DifficultyLevel";

const RighrSideExam = ({
  questionsLength,
  correctCount,
  questions,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  submittedQuestions,
  answers,
}) => {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <MasteryProgress
        correctCount={correctCount}
        questionsLength={questionsLength}
      />
      <QuestionNavigator
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        submittedQuestions={submittedQuestions}
        answers={answers}
      />
      <DifficultyLevel
        questions={questions}
        submittedQuestions={submittedQuestions}
        answers={answers}
      />
    </div>
  );
};

export default RighrSideExam;
