import { FaBrain, FaEye, FaTrophy, FaClock } from "react-icons/fa";

const iconMap = {
  brain: FaBrain,
  eye: FaEye,
  trophy: FaTrophy,
  clock: FaClock,
};

const defaultStats = [
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

const AnalyticsStats = ({ stats = defaultStats }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => {
        const Icon = iconMap[stat.icon] || FaBrain;
        return (
          <div
            key={index}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
          >
            {/* Top row: icon + change */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center">
                <Icon className="text-white w-5 h-5" />
              </div>
              <span className="text-green-500 text-sm font-semibold">
                {stat.change}
              </span>
            </div>

            {/* Value */}
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {stat.value}
            </p>

            {/* Label */}
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AnalyticsStats;
