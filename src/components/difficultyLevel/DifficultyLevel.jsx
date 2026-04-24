import timer from "../../assets/timer.png";
const DifficultyLevel = ({ questions, submittedQuestions, answers }) => {
  const difficulties = ["Easy", "Medium", "Hard"];

  const getStats = (level) => {
    const filtered = questions
      .map((q, index) => ({ ...q, index }))
      .filter((q) => q.difficulty === level);

    const total = filtered.length;

    const answered = filtered.filter(
      (q) => submittedQuestions[q.index] && answers[q.index] !== undefined,
    ).length;

    const percent = total === 0 ? 0 : (answered / total) * 100;

    return { total, answered, percent };
  };

  const config = {
    Easy: {
      bar: "bg-[#22C55E]",
      text: "text-[#16A34A]",
    },
    Medium: {
      bar: "bg-[#60A5FA]",
      text: "text-[#60A5FA]",
    },
    Hard: {
      bar: "bg-gray-500",
      text: "text-[#9CA3AF]",
    },
  };

  return (
    <div className="bg-gradient-to-br from-[#DBEAFE] to-[#FFFFFF] p-5 rounded-2xl shadow-sm space-y-5 border-[#DBEAFE] border-[0.063rem]">
      <div className="flex flex-row items-center gap-3">
        <img src={timer} alt="" className="w-10 h-10 translate-y-[9%]" />
        <div>
          <h2 className="text-base font-bold text-[#1E3A8A]">
            Difficulty Level
          </h2>
          <p className="text-xs text-[#4B5563] font-normal">
            Adaptive to your performance
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {difficulties.map((level) => {
          const stats = getStats(level);

          return (
            <div key={level} className="space-y-1">
              <div className="flex justify-between">
                <span className="text-[#4B5563] font-normal">{level}</span>
                <span className={`font-semibold text-sm ${config[level].text}`}>
                  {stats.answered}/{stats.total}
                </span>
              </div>

              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${config[level].bar}`}
                  style={{ width: `${stats.percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-[#4B5563] text-center font-normal pt-4">
        AI adjusts difficulty based on your answers
      </p>
    </div>
  );
};

export default DifficultyLevel;
