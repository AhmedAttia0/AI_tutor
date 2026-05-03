import { FaPause, FaBookmark, FaSave } from "react-icons/fa";
import { MdSliders } from "react-icons/md";
import { IoRefresh } from "react-icons/io5";
import { HiDownload } from "react-icons/hi";

const defaultSessionInfo = {
  duration: "42:18", // ← هيجي من الباكاند real-time timer
  topicsCovered: 3, // ← هيجي من الباكاند
};

const SessionControls = ({
  sessionInfo = defaultSessionInfo,
  onPause = () => {},
  onResume = () => {},
  onBookmark = () => {},
  onSave = () => {},
}) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center">
          <MdSliders className="text-blue-600 w-4 h-4" />
        </div>
        <h2 className="text-sm font-bold text-gray-900">Session Controls</h2>
      </div>

      {/* Control buttons grid */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {/* Pause */}
        <button
          onClick={onPause}
          className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 transition text-white text-sm font-semibold py-2.5 rounded-xl"
        >
          <FaPause className="w-3.5 h-3.5" />
          Pause
        </button>

        {/* Resume */}
        <button
          onClick={onResume}
          className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 transition text-white text-sm font-semibold py-2.5 rounded-xl"
        >
          <IoRefresh className="w-4 h-4" />
          Resume
        </button>

        {/* Bookmark */}
        <button
          onClick={onBookmark}
          className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 transition text-white text-sm font-semibold py-2.5 rounded-xl"
        >
          <FaBookmark className="w-3.5 h-3.5" />
          Bookmark
        </button>

        {/* Save */}
        <button
          onClick={onSave}
          className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 transition text-white text-sm font-semibold py-2.5 rounded-xl"
        >
          <HiDownload className="w-4 h-4" />
          Save
        </button>
      </div>

      {/* Session info */}
      <div className="flex flex-col gap-2 border-t border-gray-100 pt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Session Duration</span>
          <span className="text-sm font-bold text-gray-900">
            {sessionInfo.duration}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Topics Covered</span>
          <span className="text-sm font-bold text-gray-900">
            {sessionInfo.topicsCovered}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SessionControls;
