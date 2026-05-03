import { HiDownload } from "react-icons/hi";
import { FaEye, FaFileAlt } from "react-icons/fa";

const defaultTranscripts = [
  {
    id: 1,
    title: "Today's Session",
    subtitle: "Calculus - Derivatives (45 min)",
    wordCount: 3247,
    fileSize: "PDF • 2.3MB",
    isFeatured: true,
    downloadUrl: "",
    viewUrl: "",
  },
  {
    id: 2,
    title: "Physics Session",
    timeAgo: "2 hours ago",
    downloadUrl: "",
    viewUrl: "",
  },
  {
    id: 3,
    title: "Chemistry Session",
    timeAgo: "Yesterday",
    downloadUrl: "",
    viewUrl: "",
  },
  {
    id: 4,
    title: "Python Session",
    timeAgo: "2 days ago",
    downloadUrl: "",
    viewUrl: "",
  },
];

const SessionTranscripts = ({
  transcripts = defaultTranscripts,
  onDownloadAll = () => {},
  onDownload = () => {},
  onView = () => {},
}) => {
  const featured = transcripts.find((t) => t.isFeatured);
  const rest = transcripts.filter((t) => !t.isFeatured);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-gray-900">
          Session Transcripts
        </h2>
        <FaFileAlt className="text-gray-400 w-4 h-4" />
      </div>

      {/* Featured transcript */}
      {featured && (
        <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-bold text-gray-900">
                {featured.title}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                {featured.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onDownload(featured)}
                className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition"
              >
                <HiDownload className="text-white w-4 h-4" />
              </button>
              <button
                onClick={() => onView(featured)}
                className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaEye className="text-white w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-xs text-gray-400">
              Word count: {featured.wordCount?.toLocaleString()}
            </p>
            <p className="text-xs text-blue-600 font-semibold">
              {featured.fileSize}
            </p>
          </div>
        </div>
      )}

      {/* Rest of transcripts */}
      <div className="flex flex-col divide-y divide-gray-100">
        {rest.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between py-3 gap-2"
          >
            <div>
              <p className="text-sm font-semibold text-gray-800">{t.title}</p>
              <p className="text-xs text-gray-400">{t.timeAgo}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onDownload(t)}
                className="text-blue-500 hover:text-blue-700 transition"
              >
                <HiDownload className="w-5 h-5" />
              </button>
              <button
                onClick={() => onView(t)}
                className="text-blue-500 hover:text-blue-700 transition"
              >
                <FaEye className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Download All button */}
      <button
        onClick={onDownloadAll}
        className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 transition text-white text-sm font-semibold py-3 rounded-xl"
      >
        <HiDownload className="w-4 h-4" />
        Download All Transcripts
      </button>
    </div>
  );
};

export default SessionTranscripts;
