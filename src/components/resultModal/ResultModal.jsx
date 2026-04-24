import React from "react";

const ResultModal = ({ show, onClose, score, total }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-80 text-center space-y-4">
        <h2 className="text-xl font-bold text-[#1E3A8A]">Exam Finished 🎉</h2>

        <p className="text-gray-600">Your Score:</p>

        <div className="text-3xl font-bold text-green-600">
          {score} / {total}
        </div>

        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ResultModal;
