import LampIcon from "../../assets/HomePageIcons/Lamp.png";
import MicroscopeIcon from "../../assets/HomePageIcons/Microscope.png";
import CheckListIcon from "../../assets/HomePageIcons/CheckList.png";

const LearningModes = () => {
  const modes = [
    {
      icon: LampIcon,
      title: "Stuck Point",
      description:
        "Got a specific problem? Get instant help with detailed explanations and step-by-step guidance.",
      badge: "AI Ready",
      footerLabel: "Avg. Response Time",
      footerValue: "2 sec",
    },
    {
      icon: MicroscopeIcon,
      title: "Deep Explain",
      description:
        "Dive deep into concepts with comprehensive explanations, examples, and prerequisite knowledge.",
      badge: "AI Ready",
      footerLabel: "Depth Level",
      footerValue: "Advanced",
    },
    {
      icon: CheckListIcon,
      title: "Summarize",
      description:
        "Get concise summaries of complex topics, perfect for quick reviews and exam preparation.",
      badge: "AI Ready",
      footerLabel: "Format",
      footerValue: "Key Points",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Choose Your Learning Mode
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Select how you want to learn today. Our AI adapts to your chosen mode for optimal results.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {modes.map((mode, index) => (
            <div
              key={index}
              className="mx-auto w-full max-w-[389.328px] rounded-[16px] border-2 border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-400 hover:shadow-lg"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-50 shadow-sm">
                <img src={mode.icon} alt={`${mode.title} icon`} className="h-10 w-10" />
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                {mode.title}
              </h3>
              <p className="mb-8 text-sm leading-6 text-slate-500">
                {mode.description}
              </p>

              <div className="mb-6 flex items-center justify-between text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  {mode.badge}
                </div>
                <span className="text-blue-600">→</span>
              </div>

              <div className="border-t border-slate-200 pt-4 text-sm text-slate-500">
                <div className="flex items-center justify-between">
                  <span>{mode.footerLabel}</span>
                  <span className="font-semibold text-slate-900">{mode.footerValue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningModes;
