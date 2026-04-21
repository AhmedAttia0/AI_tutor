import { FaBrain, FaChartBar, FaUsers, FaShieldAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: FaBrain,
      title: "Adaptive Learning",
      description:
        "Our AI analyzes your learning patterns and adjusts explanations to match your understanding level.",
    },
    {
      icon: FaChartBar,
      title: "Progress Analytics",
      description:
        "Detailed insights into your learning journey with personalized recommendations for improvement.",
    },
    {
      icon: FaUsers,
      title: "Collaborative Learning",
      description:
        "Connect with peers and share knowledge in our community-driven learning environment.",
    },
    {
      icon: FaShieldAlt,
      title: "Secure & Private",
      description:
        "Your learning data is encrypted and secure. We prioritize your privacy and data protection.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            AI-Powered Features
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Advanced technology that makes learning more effective and engaging
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-slate-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
