import {
  FaMicrophone,
  FaVideo,
  FaPhoneSlash,
  FaDesktop,
  FaEllipsisH,
} from "react-icons/fa";
import { HiSignal } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa";

const defaultTutor = {
  name: "Dr. AI Tutor",
  specialty: "Mathematics Specialist",
  avatarUrl: null, // ← لما الباكاند يبعت صورة حطها هنا
  signalQuality: "Excellent", // Excellent | Good | Poor
};

const defaultControls = {
  isMicOn: true,
  isCameraOn: true,
  isScreenSharing: false,
};

const TutorVideo = ({
  tutor = defaultTutor,
  controls = defaultControls,
  onMicToggle = () => {},
  onCameraToggle = () => {},
  onEndCall = () => {},
  onScreenShare = () => {},
  onMore = () => {},
}) => {
  return (
    <div className="bg-gray-100 rounded-2xl p-6 mb-4 relative">
      {/* Top row: LIVE badge + signal quality */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 bg-gray-700/80 rounded-full px-3 py-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-white text-xs font-semibold tracking-wide">
            LIVE
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-green-600 text-sm font-medium">
          <HiSignal className="w-4 h-4" />
          <span>{tutor.signalQuality}</span>
        </div>
      </div>

      {/* Avatar */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-blue-700 flex items-center justify-center mb-4 shadow-lg">
          {tutor.avatarUrl ? (
            <img
              src={tutor.avatarUrl}
              alt={tutor.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <FaUserTie className="text-white w-10 h-10" />
          )}
        </div>
        <h2 className="text-blue-900 text-lg font-bold">{tutor.name}</h2>
        <p className="text-gray-500 text-sm">{tutor.specialty}</p>
      </div>

      {/* Control buttons */}
      <div className="flex items-center justify-center gap-4">
        {/* Mic */}
        <button
          onClick={onMicToggle}
          className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition"
        >
          <FaMicrophone
            className={`w-4 h-4 ${controls.isMicOn ? "text-gray-700" : "text-red-500"}`}
          />
        </button>

        {/* Camera */}
        <button
          onClick={onCameraToggle}
          className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition"
        >
          <FaVideo
            className={`w-4 h-4 ${controls.isCameraOn ? "text-gray-700" : "text-red-500"}`}
          />
        </button>

        {/* End call — red */}
        <button
          onClick={onEndCall}
          className="w-11 h-11 rounded-full bg-red-500 shadow flex items-center justify-center hover:bg-red-600 transition"
        >
          <FaPhoneSlash className="text-white w-4 h-4" />
        </button>

        {/* Screen share */}
        <button
          onClick={onScreenShare}
          className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition"
        >
          <FaDesktop
            className={`w-4 h-4 ${controls.isScreenSharing ? "text-blue-600" : "text-gray-700"}`}
          />
        </button>

        {/* More */}
        <button
          onClick={onMore}
          className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition"
        >
          <FaEllipsisH className="text-gray-700 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TutorVideo;
