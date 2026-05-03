import { FaLightbulb, FaExclamationTriangle } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";

const typeConfig = {
  improvement: {
    bg: "bg-green-50",
    border: "border-green-100",
    iconBg: "bg-green-100",
    icon: FaLightbulb,
    iconColor: "text-green-500",
    titleColor: "text-green-800",
    textColor: "text-green-600",
  },
  recommendation: {
    bg: "bg-gray-50",
    border: "border-gray-100",
    iconBg: "bg-blue-100",
    icon: HiInformationCircle,
    iconColor: "text-blue-500",
    titleColor: "text-gray-800",
    textColor: "text-gray-500",
  },
  warning: {
    bg: "bg-yellow-50",
    border: "border-yellow-100",
    iconBg: "bg-yellow-100",
    icon: FaExclamationTriangle,
    iconColor: "text-yellow-500",
    titleColor: "text-yellow-800",
    textColor: "text-yellow-600",
  },
};

const defaultInsights = [
  {
    id: 1,
    type: "improvement",
    title: "Improvement Detected",
    message: "Your attention span increased by 15% this week",
  },
  {
    id: 2,
    type: "recommendation",
    title: "Focus Recommendation",
    message: "Best learning time: 2-4 PM based on your data",
  },
  {
    id: 3,
    type: "warning",
    title: "Knowledge Gap",
    message: "Review linear algebra before advanced calculus",
  },
];

const AiInsights = ({ insights = defaultInsights }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <h2 className="text-base font-bold text-gray-900 mb-4">AI Insights</h2>

      <div className="flex flex-col gap-3">
        {insights.map((insight) => {
          const config = typeConfig[insight.type] || typeConfig.recommendation;
          const Icon = config.icon;
          return (
            <div
              key={insight.id}
              className={`flex items-start gap-3 rounded-xl p-3 border ${config.bg} ${config.border}`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${config.iconBg}`}
              >
                <Icon className={`w-3.5 h-3.5 ${config.iconColor}`} />
              </div>
              <div>
                <p className={`text-sm font-bold ${config.titleColor}`}>
                  {insight.title}
                </p>
                <p className={`text-xs mt-0.5 ${config.textColor}`}>
                  {insight.message}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AiInsights;
