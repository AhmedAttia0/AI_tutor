import {
  FaLightbulb,
  FaFire,
  FaTrophy,
  FaStar,
  FaEye,
  FaCheckCircle,
  FaComments,
  FaNetworkWired,
  FaRobot,
  FaGraduationCap,
  FaClock,
  FaAtom,
  FaFlask,
  FaCode,
} from "react-icons/fa";
import { IoIosCalculator } from "react-icons/io";

const DashboardGrid = () => {
  const iconBgColor = "rgba(59, 130, 246, 1)";
  const iconPadding = "p-3";

  const stats = [
    {
      icon: FaGraduationCap,
      value: "87%",
      label: "Overall Mastery",
      trend: "+12%",
      color: "bg-blue-50",
    },
    {
      icon: FaFire,
      value: "24",
      label: "Day Streak",
      trend: "+3",
      color: "bg-blue-50",
    },
    {
      icon: FaClock,
      value: "48h",
      label: "This Week",
      trend: "+2.5h",
      color: "bg-blue-50",
    },
    {
      icon: FaTrophy,
      value: "15",
      label: "Achievements",
      trend: "New",
      color: "bg-blue-50",
    },
  ];

  const subjects = [
    { name: "Mathematics", mastery: 92, icon: IoIosCalculator },
    { name: "Physics", mastery: 85, icon: FaAtom },
    { name: "Chemistry", mastery: 78, icon: FaFlask },
    { name: "Computer Science", mastery: 94, icon: FaCode },
  ];

  const features = [
    {
      icon: FaEye,
      title: "Attention Monitoring",
      description:
        "AI tracks your focus and engagement in real-time to optimize learning",
      status: "88%",
    },
    {
      icon: FaCheckCircle,
      title: "Quality Control",
      description:
        "Every explanation is validated for accuracy and comprehensiveness",
      status: "Validated",
    },
    {
      icon: FaComments,
      title: "Natural Interruptions",
      description:
        "Ask questions anytime - AI pauses and addresses your queries instantly",
      status: "Always Available",
    },
    {
      icon: FaNetworkWired,
      title: "Knowledge Gap Detection",
      description:
        "AI identifies missing prerequisites and teaches them automatically",
      status: "3 gaps today",
    },
  ];

  const recentSessions = [
    {
      subject: "Calculus - Derivatives",
      time: "3 hours ago",
      progress: 75,
      icon: IoIosCalculator,
    },
    {
      subject: "Physics - Momentum",
      time: "Yesterday",
      progress: 100,
      status: "Done",
      icon: FaFlask,
    },
    {
      subject: "Python - Data Structures",
      time: "2 days ago",
      progress: 100,
      status: "Done",
      icon: FaCode,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900">
            Your Progress Overview
          </h2>
          <p className="mt-2 text-lg text-slate-600">View All</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left & Center Column - Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Stats Cards */}
            <div className="grid gap-4 sm:grid-cols-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl ${stat.color} border border-slate-100 p-6 transition-all hover:shadow-md`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`rounded-lg ${iconPadding} flex items-center justify-center`}
                      style={{ backgroundColor: iconBgColor }}
                    >
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                      {stat.trend}
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-slate-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Subject Mastery Levels */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
              <h3 className="mb-6 text-xl font-bold text-slate-900">
                Subject Mastery Levels
              </h3>

              <div className="space-y-6">
                {subjects.map((subject, idx) => (
                  <div key={idx}>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl flex items-center justify-center">
                          <subject.icon className="h-6 w-6 text-blue-600" />
                        </span>
                        <span className="font-semibold text-slate-900">
                          {subject.name}
                        </span>
                      </div>
                      <span className="text-lg font-bold text-blue-600">
                        {subject.mastery}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200">
                      <div
                        className="h-2 rounded-full bg-blue-500 transition-all"
                        style={{ width: `${subject.mastery}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI-Powered Features */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-slate-900">
                AI-Powered Features
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 transition-all hover:shadow-md"
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div
                        className={`rounded-lg ${iconPadding} flex items-center justify-center`}
                        style={{ backgroundColor: iconBgColor }}
                      >
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                        {feature.status}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900">
                      {feature.title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sessions & Status */}
          <div className="space-y-6">
            {/* Recent Sessions */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">
                  Recent Sessions
                </h3>
                <a
                  href="#"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  View All →
                </a>
              </div>

              <div className="space-y-4">
                {recentSessions.map((session, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-slate-100 p-4 transition-all hover:bg-slate-50"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex items-center justify-center">
                        <session.icon className="h-6 w-6 text-blue-600" />
                      </span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900">
                          {session.subject}
                        </h4>
                        <p className="text-xs text-slate-500">{session.time}</p>
                        {session.status === "Done" ? (
                          <div className="mt-2 inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                            Done
                          </div>
                        ) : (
                          <div className="mt-2 h-1.5 rounded-full bg-slate-200">
                            <div
                              className="h-1.5 rounded-full bg-blue-500"
                              style={{ width: `${session.progress}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Tutor Status */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-lg">
              <div className="mb-4 flex items-center gap-2">
                <div
                  className={`rounded-lg ${iconPadding} flex items-center justify-center`}
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  <FaRobot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">AI Tutor Status</h4>
                  <p className="text-sm text-blue-100">● Online & Ready</p>
                </div>
              </div>
              <p className="mb-6 text-sm text-blue-50">
                Your personalized AI tutor is ready to help you learn anything,
                anytime. Start a session now!
              </p>
              <button className="w-full rounded-lg bg-white py-2 font-semibold text-blue-600 transition-all hover:bg-blue-50">
                Start Session Now
              </button>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
              <h3 className="mb-4 text-lg font-bold text-slate-900">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="flex w-full items-center justify-between rounded-lg bg-blue-50  transition-all hover:bg-blue-100">
                  <span className="font-medium text-slate-900">
                    Schedule Session
                  </span>
                  <span className="text-blue-600">📅</span>
                </button>
                <button className="flex w-full items-center justify-between rounded-lg bg-purple-50  transition-all hover:bg-purple-100">
                  <span className="font-medium text-slate-900">
                    Browse Resources
                  </span>
                  <span className="text-purple-600">📚</span>
                </button>
                <button className="flex w-full items-center justify-between rounded-lg bg-green-50  transition-all hover:bg-green-100">
                  <span className="font-medium text-slate-900">
                    View Analytics
                  </span>
                  <span className="text-green-600">📊</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardGrid;
