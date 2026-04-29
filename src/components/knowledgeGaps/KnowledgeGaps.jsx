import React from "react";
import light from "../../assets/light.png";
const KnowledgeGaps = ({ gaps }) => {
  if (!gaps || gaps.length === 0) return null;

  const getGapStyles = (priorityLevel) => {
    if (priorityLevel === 'high') {
      return {
        container: "bg-red-50 border-red-100",
        title: "text-red-800",
        badge: "bg-red-100 text-red-700",
        button: "bg-[#ef4444] hover:bg-red-600"
      };
    }
    return {
      container: "bg-yellow-50 border-yellow-200",
      title: "text-yellow-800",
      badge: "bg-yellow-100 text-yellow-700",
      button: "bg-[#eab308] hover:bg-yellow-500"
    };
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex items-start gap-3">
        <div className="p-2 bg-gradient-to-b from-[#60A5FA] to-[#3B82F6] text-white rounded-lg self-center">
          <img src={light} className="w-3 h-4" />
        </div>
        <div>
          <h2 className="font-bold text-slate-800 text-lg">Knowledge Gaps</h2>
          <p className="text-sm text-slate-500">AI-identified learning needs</p>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-4">
        {gaps.map((gap) => {
          const styles = getGapStyles(gap.priorityLevel);
          return (
            <div key={gap.id} className={`border p-4 rounded-xl flex flex-col gap-3 ${styles.container}`}>
              <div className="flex justify-between items-center">
                <h3 className={`font-semibold text-sm ${styles.title}`}>{gap.title}</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${styles.badge}`}>{gap.priority}</span>
              </div>
              <p className="text-sm text-slate-700">
                {gap.description}
              </p>
              <button className={`w-full text-white font-semibold py-2 rounded-lg transition-colors text-sm shadow-sm ${styles.button}`}>
                {gap.actionText}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KnowledgeGaps;
