import { FaStar, FaRegStar } from "react-icons/fa";
import { MdOutlineTrackChanges } from "react-icons/md";

const defaultFocusData = {
  currentFocus: 88, // percentage ← يجي من الباكاند real-time
  currentLabel: "Excellent", // Excellent | Good | Poor
  lastUpdated: "Last 5 min", // ← يجي من الباكاند
  sessionAverage: 85,
  peakFocus: 95,
  engagementStars: 4, // من 5
};

const StarRating = ({ stars = 4, total = 5 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: total }).map((_, i) =>
      i < stars ? (
        <FaStar key={i} className="w-3.5 h-3.5 text-yellow-400" />
      ) : (
        <FaRegStar key={i} className="w-3.5 h-3.5 text-gray-300" />
      ),
    )}
  </div>
);

const FocusMonitor = ({ focusData = defaultFocusData }) => {
  const {
    currentFocus,
    currentLabel,
    lastUpdated,
    sessionAverage,
    peakFocus,
    engagementStars,
  } = focusData;

  // لون الـ progress bar حسب الـ focus level
  const barColor =
    currentFocus >= 80
      ? "bg-green-500"
      : currentFocus >= 60
        ? "bg-yellow-400"
        : "bg-red-400";

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center">
          <MdOutlineTrackChanges className="text-blue-600 w-4 h-4" />
        </div>
        <h2 className="text-sm font-bold text-gray-900">Focus Monitor</h2>
      </div>

      {/* Current Focus card */}
      <div className="bg-blue-50 rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-gray-700">
            Current Focus
          </span>
          <span className="text-xl font-bold text-green-600">
            {currentFocus}%
          </span>
        </div>
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div
            className={`h-2 rounded-full ${barColor} transition-all duration-700`}
            style={{ width: `${currentFocus}%` }}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{currentLabel}</span>
          <span className="text-xs text-gray-400">{lastUpdated}</span>
        </div>
      </div>

      {/* Stats rows */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Session Average</span>
          <span className="text-sm font-semibold text-gray-800">
            {sessionAverage}%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Peak Focus</span>
          <span className="text-sm font-semibold text-gray-800">
            {peakFocus}%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Engagement Level</span>
          <StarRating stars={engagementStars} />
        </div>
      </div>
    </div>
  );
};

export default FocusMonitor;
