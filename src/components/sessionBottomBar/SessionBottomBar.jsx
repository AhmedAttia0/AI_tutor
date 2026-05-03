import { FaHandPaper, FaMicrophone, FaBookmark } from "react-icons/fa";

const SessionBottomBar = ({
  onInterrupt = () => {},
  onBookmark = () => {},
}) => {
  return (
    <div className="flex items-center gap-3 mt-2">
      {/* Interrupt & Ask Question */}
      <button
        onClick={onInterrupt}
        className="flex-1 flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-800 transition text-white font-semibold py-4 rounded-2xl shadow-sm"
      >
        <FaHandPaper className="w-5 h-5" />
        <span>Interrupt & Ask Question</span>
        <FaMicrophone className="w-4 h-4 ml-1 opacity-80" />
      </button>

      {/* Bookmark */}
      <button
        onClick={onBookmark}
        className="flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 transition text-gray-700 font-semibold px-6 py-4 rounded-2xl shadow-sm"
      >
        <FaBookmark className="w-4 h-4" />
        <span>Bookmark</span>
      </button>
    </div>
  );
};

export default SessionBottomBar;
