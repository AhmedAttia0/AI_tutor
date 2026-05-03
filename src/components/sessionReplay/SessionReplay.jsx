import { FaPlay, FaFlask, FaCode } from "react-icons/fa";
import { MdScience } from "react-icons/md";

const subjectIconMap = {
  physics: MdScience,
  chemistry: FaFlask,
  code: FaCode,
};

const defaultFeatured = {
  id: 0,
  title: "Calculus Session",
  duration: "45:32",
  thumbnail: null,
  videoUrl: "",
};

const defaultSessions = [
  {
    id: 1,
    title: "Physics - Momentum",
    subject: "physics",
    timeAgo: "2 hours ago",
  },
  {
    id: 2,
    title: "Chemistry - Bonds",
    subject: "chemistry",
    timeAgo: "Yesterday",
  },
  {
    id: 3,
    title: "Python - Algorithms",
    subject: "code",
    timeAgo: "2 days ago",
  },
];

const SessionReplay = ({
  featured = defaultFeatured,
  sessions = defaultSessions,
  onPlay = () => {},
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-gray-900">Session Replay</h2>
        <button
          onClick={() => onPlay(featured)}
          className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition"
        >
          <FaPlay className="text-white w-3 h-3 ml-0.5" />
        </button>
      </div>

      {/* Featured video thumbnail */}
      <div className="relative rounded-xl overflow-hidden bg-blue-100 mb-2 aspect-video flex items-center justify-center">
        {featured.thumbnail ? (
          <img
            src={featured.thumbnail}
            alt={featured.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-blue-200/60 flex items-center justify-center">
            <button
              onClick={() => onPlay(featured.id)}
              className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition shadow-lg"
            >
              <FaPlay className="text-white w-5 h-5 ml-1" />
            </button>
          </div>
        )}
      </div>

      {/* Featured label + duration */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-600">{featured.title}</span>
        <span className="text-sm font-semibold text-gray-800">
          {featured.duration}
        </span>
      </div>

      {/* Sessions list */}
      <div className="flex flex-col gap-3">
        {sessions.map((session) => {
          const Icon = subjectIconMap[session.subject] || FaPlay;
          return (
            <div
              key={session.id}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Icon className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {session.title}
                  </p>
                  <p className="text-xs text-gray-400">{session.timeAgo}</p>
                </div>
              </div>
              <button
                onClick={() => onPlay(session.id)}
                className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition shrink-0"
              >
                <FaPlay className="text-white w-2.5 h-2.5 ml-0.5" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SessionReplay;
