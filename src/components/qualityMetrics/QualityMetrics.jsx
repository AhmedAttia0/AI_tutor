import { FaShieldAlt } from "react-icons/fa";

// لما الباكاند يجهز هتجيب الـ metrics من الـ API وتحطها هنا
const defaultMetrics = [
  {
    id: "ragas",
    label: "RAGAS Score",
    sublabel: "Retrieval Quality",
    value: 0.94,
    color: "bg-green-500", // ← لون الـ progress bar
    valueColor: "text-green-600",
  },
  {
    id: "fact",
    label: "FactScore",
    sublabel: "Factual Accuracy",
    value: 0.97,
    color: "bg-blue-500",
    valueColor: "text-blue-600",
  },
  {
    id: "comprehension",
    label: "Comprehension",
    sublabel: "Explanation Clarity",
    value: 0.91,
    color: "bg-purple-500",
    valueColor: "text-purple-600",
  },
];

const QualityMetrics = ({ metrics = defaultMetrics }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center">
          <FaShieldAlt className="text-blue-600 w-3.5 h-3.5" />
        </div>
        <h2 className="text-sm font-bold text-gray-900">Quality Metrics</h2>
      </div>

      {/* Metrics list */}
      <div className="flex flex-col divide-y divide-gray-100">
        {metrics.map((metric) => (
          <div key={metric.id} className="py-3 first:pt-0 last:pb-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-800">
                {metric.label}
              </span>
              <span className={`text-sm font-bold ${metric.valueColor}`}>
                {metric.value.toFixed(2)}
              </span>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
              <div
                className={`h-1.5 rounded-full ${metric.color} transition-all duration-500`}
                style={{ width: `${metric.value * 100}%` }}
              />
            </div>
            <span className="text-xs text-gray-400">{metric.sublabel}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualityMetrics;
