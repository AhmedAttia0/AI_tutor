import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import AnalyticsHeader from "../../components/analyticsHeader/AnalyticsHeader";
import AnalyticsStats from "../../components/analyticsStats/AnalyticsStats";
import ComprehensionChart from "../../components/comprehensionChart/ComprehensionChart";
import AttentionTimeline from "../../components/attentionTimeline/AttentionTimeline";
import MasteryTimeline from "../../components/masteryTimeline/MasteryTimeline";
import SessionReplay from "../../components/sessionReplay/SessionReplay";
import SessionTranscripts from "../../components/sessionTranscripts/SessionTranscripts";
import AiInsights from "../../components/aiInsights/AiInsights";

const Analytics = () => {
  const [selectedRange, setSelectedRange] = useState("Last 7 days");
  const [selectedSession, setSelectedSession] = useState("today");

  const stats = [
    {
      icon: "brain",
      value: "94.2%",
      label: "Comprehension Rate",
      change: "+5.2%",
    },
    { icon: "eye", value: "87.5%", label: "Avg. Attention", change: "+2.8%" },
    { icon: "trophy", value: "78.3%", label: "Mastery Level", change: "+12%" },
    { icon: "clock", value: "24", label: "Sessions This Week", change: "+3" },
  ];

  const comprehensionData = [
    { day: "Mon", comprehension: 85, retention: 82 },
    { day: "Tue", comprehension: 88, retention: 84 },
    { day: "Wed", comprehension: 92, retention: 86 },
    { day: "Thu", comprehension: 90, retention: 83 },
    { day: "Fri", comprehension: 94, retention: 89 },
    { day: "Sat", comprehension: 91, retention: 88 },
    { day: "Sun", comprehension: 95, retention: 91 },
  ];

  const attentionData = {
    today: [
      { time: "0 min", attention: 78 },
      { time: "5 min", attention: 82 },
      { time: "10 min", attention: 88 },
      { time: "15 min", attention: 84 },
      { time: "20 min", attention: 90 },
      { time: "25 min", attention: 87 },
      { time: "30 min", attention: 92 },
    ],
    yesterday: [
      { time: "0 min", attention: 70 },
      { time: "5 min", attention: 74 },
      { time: "10 min", attention: 79 },
      { time: "15 min", attention: 81 },
      { time: "20 min", attention: 78 },
      { time: "25 min", attention: 82 },
      { time: "30 min", attention: 85 },
    ],
  };

  const masteryData = [
    { week: "Week 1", mathematics: 52, physics: 45, computerScience: 48 },
    { week: "Week 2", mathematics: 60, physics: 52, computerScience: 55 },
    { week: "Week 3", mathematics: 67, physics: 58, computerScience: 63 },
    { week: "Week 4", mathematics: 72, physics: 65, computerScience: 69 },
    { week: "Week 5", mathematics: 76, physics: 70, computerScience: 74 },
    { week: "Week 6", mathematics: 81, physics: 74, computerScience: 79 },
  ];

  const featuredSession = {
    id: 0,
    title: "Calculus Session",
    duration: "45:32",
    thumbnail: null,
    videoUrl: "",
  };

  const sessions = [
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

  const transcripts = [
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

  const insights = [
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

  const handleRangeChange = (value) => {
    setSelectedRange(value);
    console.log("Date range changed to", value);
  };

  const handleSessionChange = (value) => {
    setSelectedSession(value);
    console.log("Attention session changed to", value);
  };

  const handleExport = () => {
    console.log("Export report clicked");
  };

  const handlePlay = (sessionId) => {
    console.log("Play session id", sessionId);
  };

  const handleDownloadAll = () => {
    console.log("Download all transcripts");
  };

  const handleDownload = (transcript) => {
    console.log("Download transcript", transcript.id);
  };

  const handleView = (transcript) => {
    console.log("View transcript", transcript.id);
  };

  const handleViewDetails = () => {
    console.log("View mastery details");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-[1240px] px-4 py-6 sm:px-6 lg:px-8">
        <AnalyticsHeader
          title="Session Analytics Dashboard"
          subtitle="Comprehensive insights into your learning performance and progress"
          selectedRange={selectedRange}
          dateOptions={["Last 7 days", "Last 30 days", "Last 3 months"]}
          onDateChange={handleRangeChange}
          onExport={handleExport}
        />

        <AnalyticsStats stats={stats} />

        <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <ComprehensionChart data={comprehensionData} />
            <AttentionTimeline
              data={attentionData[selectedSession]}
              selectedSession={selectedSession}
              onSessionChange={handleSessionChange}
            />
            <MasteryTimeline
              data={masteryData}
              onViewDetails={handleViewDetails}
            />
          </div>

          <div className="space-y-6">
            <SessionReplay
              featured={featuredSession}
              sessions={sessions}
              onPlay={handlePlay}
            />
            <SessionTranscripts
              transcripts={transcripts}
              onDownloadAll={handleDownloadAll}
              onDownload={handleDownload}
              onView={handleView}
            />
            <AiInsights insights={insights} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
