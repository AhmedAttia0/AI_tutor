import { HiDownload } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

const AnalyticsHeader = ({
  title = "Session Analytics Dashboard",
  subtitle = "Comprehensive insights into your learning performance and progress",
  selectedRange = "Last 7 days",
  dateOptions = ["Last 7 days", "Last 30 days", "Last 3 months"],
  onDateChange = () => {},
  onExport = () => {},
}) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-6">
      {/* Left — Title */}
      <div>
        <h1 className="text-2xl font-bold text-blue-900">{title}</h1>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      </div>

      {/* Right — Date filter + Export */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Date dropdown */}
        <div className="relative">
          <select
            value={selectedRange}
            onChange={(e) => onDateChange(e.target.value)}
            className="appearance-none border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer"
          >
            {dateOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4" />
        </div>

        {/* Export button */}
        <button
          onClick={onExport}
          className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 transition text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm"
        >
          <HiDownload className="w-4 h-4" />
          Export Report
        </button>
      </div>
    </div>
  );
};

export default AnalyticsHeader;
