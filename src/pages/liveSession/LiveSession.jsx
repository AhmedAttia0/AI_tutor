import Navbar from "../../components/Navbar/Navbar";
import TutorVideo from "../../components/tutorVideo/TutorVideo";
import InteractiveWhiteboard from "../../components/interactiveWhiteboard/InteractiveWhiteboard";
import SessionBottomBar from "../../components/sessionBottomBar/SessionBottomBar";
import QualityMetrics from "../../components/qualityMetrics/QualityMetrics";
import FocusMonitor from "../../components/focusMonitor/FocusMonitor";
import LiveTranscript from "../../components/liveTranscript/LiveTranscript";
import SessionControls from "../../components/sessionControls/SessionControls";

/*
  ╔══════════════════════════════════════════════════════════╗
  ║  LiveSession.jsx — الصفحة الرئيسية للجلسة المباشرة     ║
  ║                                                          ║
  ║  لما الباكاند يجهز:                                     ║
  ║  1. اعمل API calls هنا أو في custom hook                ║
  ║  2. بعت الـ data كـ props للكومبوننتس                   ║
  ║  3. WebSocket للـ real-time (focus + transcript)         ║
  ╚══════════════════════════════════════════════════════════╝
*/

const LiveSession = () => {
  // ══════════════════════════════════════════
  // TODO: استبدل الـ handlers دول بـ API calls
  // ══════════════════════════════════════════

  const handleEndCall = () => {
    // TODO: POST /api/sessions/{id}/end
    console.log("End call");
  };

  const handleSendMessage = (text) => {
    // TODO: POST /api/sessions/{id}/messages  OR  WebSocket.send()
    console.log("Send message:", text);
  };

  const handleExportTranscript = () => {
    // TODO: GET /api/sessions/{id}/transcript/export
    console.log("Export transcript");
  };

  const handlePause = () => {
    // TODO: POST /api/sessions/{id}/pause
    console.log("Pause session");
  };

  const handleResume = () => {
    // TODO: POST /api/sessions/{id}/resume
    console.log("Resume session");
  };

  const handleSave = () => {
    // TODO: POST /api/sessions/{id}/save
    console.log("Save session");
  };

  const handleBookmark = () => {
    // TODO: POST /api/sessions/{id}/bookmarks
    console.log("Bookmark");
  };

  const handleInterrupt = () => {
    // TODO: إرسال إشارة للـ AI إنه يوقف ويستنى
    console.log("Interrupt");
  };

  const handleExportReport = () => {
    // TODO: GET /api/sessions/{id}/report
    console.log("Export report");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-4 py-5">
        {/* Two-column layout */}
        <div className="flex gap-5 items-start">
          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 min-w-0">
            <TutorVideo onEndCall={handleEndCall} />
            <InteractiveWhiteboard />
            <SessionBottomBar
              onInterrupt={handleInterrupt}
              onBookmark={handleBookmark}
            />
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="w-[320px] shrink-0">
            <QualityMetrics />
            <FocusMonitor />
            <LiveTranscript
              onSendMessage={handleSendMessage}
              onExport={handleExportTranscript}
            />
            <SessionControls
              onPause={handlePause}
              onResume={handleResume}
              onBookmark={handleBookmark}
              onSave={handleSave}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSession;
