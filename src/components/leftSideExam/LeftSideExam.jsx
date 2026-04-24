import React from "react";
import { ProgressBar } from "../progressBar/ProgressBar";
import ExamCard from "../examCard/ExamCard";
import ChatExamModal from "../chatExamModal/ChatExamModal";
import ResultModal from "./../resultModal/ResultModal";
import { useNavigate } from "react-router-dom";

const LeftSideExam = ({
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
  showResultModal,
  setShowResultModal
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-6">
      <ProgressBar
        correctCount={correctCount}
        progressPercent={progressPercent}
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        wrongCount={wrongCount}
      />
      <ExamCard
        currentQuestion={currentQuestion}
        currentQuestionIndex={currentQuestionIndex}
        answers={answers}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        handleAnswer={handleAnswer}
        handleSubmit={handleSubmit}
        submittedQuestions={submittedQuestions}
      />
      <ChatExamModal />
      <ResultModal
        score={correctCount}
        total={questions.length}
        onClose={() => {
          setShowResultModal(false);
          navigate("/"); 
        }}
        show={showResultModal}
      />
    </div>
  );
};

export default LeftSideExam;
