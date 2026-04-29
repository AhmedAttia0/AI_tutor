import React from "react";
import { LuStar, LuMap, LuClock } from "react-icons/lu";
import brain from "../../assets/brain.png";
const AiRecommendations = ({ recommendations }) => {
  if (!recommendations || recommendations.length === 0) return null;

  const renderIcon = (type) => {
    switch (type) {
      case "star":
        return <LuStar className="text-blue-500 w-4 h-4" />;
      case "path":
        return <LuMap className="text-blue-500 w-4 h-4" />;
      case "time":
        return <LuClock className="text-blue-500 w-4 h-4" />;
      default:
        return <LuStar className="text-blue-500 w-4 h-4" />;
    }
  };

  return (
    <div className="bg-[#eff6ff] rounded-xl border border-blue-100 overflow-hidden mb-8">
      <div className="p-5 flex items-start gap-3">
        <div className="p-2 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] self-center rounded-lg shadow-sm">
          <img src={brain} className="w-5 h-5" />
        </div>
        <div>
          <h2 className="font-bold text-slate-800 text-lg">AI Recommendations</h2>
          <p className="text-sm text-slate-500">Personalized learning path</p>
        </div>
      </div>
      
      <div className="p-5 pt-0 flex flex-col gap-3">
        {recommendations.map((rec) => (
          <div key={rec.id} className="bg-white p-4 rounded-lg shadow-sm border border-blue-50 flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              {renderIcon(rec.type)}
              <h3 className="font-semibold text-slate-800 text-sm">{rec.title}</h3>
            </div>
            <p className="text-sm text-slate-500 pl-6">
              {rec.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiRecommendations;
