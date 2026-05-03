import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const defaultData = [
  { week: "Week 1", mathematics: 52, physics: 45, computerScience: 48 },
  { week: "Week 2", mathematics: 60, physics: 52, computerScience: 55 },
  { week: "Week 3", mathematics: 67, physics: 58, computerScience: 63 },
  { week: "Week 4", mathematics: 72, physics: 65, computerScience: 69 },
  { week: "Week 5", mathematics: 76, physics: 70, computerScience: 74 },
  { week: "Week 6", mathematics: 81, physics: 74, computerScience: 79 },
];

const MasteryTimeline = ({ data = defaultData, onViewDetails = () => {} }) => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <h2 className="text-base font-bold text-gray-900">
            Learning History & Mastery Timeline
          </h2>
          <p className="text-sm text-gray-500">
            Track progress across subjects week by week.
          </p>
        </div>
        <button
          type="button"
          onClick={onViewDetails}
          className="text-sm font-semibold text-blue-700 hover:text-blue-900"
        >
          View Details
        </button>
      </div>

      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
          >
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
            <XAxis dataKey="week" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Legend wrapperStyle={{ paddingTop: 8 }} />
            <Line
              type="monotone"
              dataKey="mathematics"
              stroke="#2563EB"
              strokeWidth={3}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="physics"
              stroke="#9333EA"
              strokeWidth={3}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="computerScience"
              stroke="#0EA5E9"
              strokeWidth={3}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MasteryTimeline;
