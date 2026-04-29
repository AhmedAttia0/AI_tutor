import React, { useState } from "react";
import NavbarLogin from "./../../components/navbarLogin/NavbarLogin";
import ExamHeader from "../../components/examHeader/ExamHeader";
import ExamMain from "../../components/examMain/ExamMain";

const Exam = () => {
  const mockQuestions = [
    {
      id: 1,
      question: "What is the derivative of f(x) = 3x² + 2x - 5?",
      type: "Multiple Choice",
      difficulty: "Medium",
      points: 4,
      options: [
        "f'(x) = 6x + 2",
        "f'(x) = 3x + 2",
        "f'(x) = 6x - 5",
        "f'(x) = 3x² + 2",
      ],
      correctAnswer: 0,
    },
    {
      id: 2,
      question: "What is the derivative of f(x) = x³?",
      type: "Multiple Choice",
      difficulty: "Easy",
      points: 3,
      options: ["3x²", "x²", "x³", "2x"],
      correctAnswer: 0,
    },
    {
      id: 3,
      question: "What is the derivative of sin(x)?",
      type: "Multiple Choice",
      difficulty: "Easy",
      points: 3,
      options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
      correctAnswer: 0,
    },
    {
      id: 4,
      question: "What is the derivative of e^x?",
      type: "Multiple Choice",
      difficulty: "Easy",
      points: 3,
      options: ["e^x", "x·e^x", "ln(x)", "1/x"],
      correctAnswer: 0,
    },
    {
      id: 5,
      question: "What is the derivative of ln(x)?",
      type: "Multiple Choice",
      difficulty: "Medium",
      points: 4,
      options: ["1/x", "ln(x)", "x", "e^x"],
      correctAnswer: 0,
    },
    {
      id: 6,
      question: "What is the derivative of x² + x?",
      type: "Multiple Choice",
      difficulty: "Easy",
      points: 3,
      options: ["2x + 1", "x + 1", "2x", "x²"],
      correctAnswer: 0,
    },
    {
      id: 7,
      question: "What is the derivative of 5x?",
      type: "Multiple Choice",
      difficulty: "Easy",
      points: 2,
      options: ["5", "x", "0", "1"],
      correctAnswer: 0,
    },
    {
      id: 8,
      question: "What is the derivative of x⁴?",
      type: "Multiple Choice",
      difficulty: "Medium",
      points: 4,
      options: ["4x³", "x³", "4x", "x⁴"],
      correctAnswer: 0,
    },
    {
      id: 9,
      question: "What is the derivative of cos(x)?",
      type: "Multiple Choice",
      difficulty: "Medium",
      points: 4,
      options: ["-sin(x)", "sin(x)", "cos(x)", "-cos(x)"],
      correctAnswer: 0,
    },
    {
      id: 10,
      question: "What is the derivative of x⁵?",
      type: "Multiple Choice",
      difficulty: "Hard",
      points: 5,
      options: ["5x⁴", "x⁴", "5x", "x⁵"],
      correctAnswer: 0,
    },
  ];
  const [questions, setQuestions] = useState(mockQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const currentQuestion = questions[currentQuestionIndex];
  const [submittedQuestions, setSubmittedQuestions] = useState({});
  const [showResultModal, setShowResultModal] = useState(false);
  const handleFinishExam = () => {
    setShowResultModal(true);

    localStorage.removeItem("examEndTime");
  };
  const handleSubmit = () => {
    const hasAnswer = answers[currentQuestionIndex] !== undefined;

    setSubmittedQuestions((prev) => ({
      ...prev,
      [currentQuestionIndex]: true,
    }));

    const allAnswered = questions.every((_, index) => {
      if (index === currentQuestionIndex) {
        return hasAnswer;
      }
      return submittedQuestions[index] && answers[index] !== undefined;
    });

    if (allAnswered) {
      handleFinishExam();
      return;
    }

    setCurrentQuestionIndex((prev) =>
      prev < questions.length - 1 ? prev + 1 : prev,
    );
  };
  const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
  const answeredSubmitted = Object.keys(submittedQuestions).filter(
    (qIndex) => answers[qIndex] !== undefined,
  );

  const correctCount = answeredSubmitted.filter(
    (qIndex) => answers[qIndex] === questions[qIndex].correctAnswer,
  ).length;

  const wrongCount = answeredSubmitted.length - correctCount;

  const handleAnswer = (optionIndex) => {
    if (submittedQuestions[currentQuestionIndex]) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  return (
    <div className=" bg-gradient-to-b from-[#FFFFFF] to-[#DBEAFE4D] min-h-[100vh]">
      <NavbarLogin />
      <div className="container mx-auto">
        <ExamHeader onTimeUp={handleFinishExam} />
        <ExamMain
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
          questionsLength={questions.length}
          setShowResultModal={setShowResultModal}
        />
      </div>
    </div>
  );
};

export default Exam;
