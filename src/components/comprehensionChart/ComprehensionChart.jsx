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
  { day: "Mon", comprehension: 85, retention: 82 },
  { day: "Tue", comprehension: 88, retention: 84 },
  { day: "Wed", comprehension: 92, retention: 86 },
  { day: "Thu", comprehension: 90, retention: 83 },
  { day: "Fri", comprehension: 94, retention: 89 },
  { day: "Sat", comprehension: 91, retention: 88 },
  { day: "Sun", comprehension: 95, retention: 91 },
];

const ComprehensionChart = ({ data = defaultData }) => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center justify-between gap-2 mb-4">
        <div>
          <h2 className="text-base font-bold text-gray-900">
            Comprehension Metrics Over Time
          </h2>
          <p className="text-sm text-gray-500">
            Compare comprehension and retention across the week.
          </p>
        </div>
      </div>

      <div className="h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
          >
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
            <XAxis dataKey="day" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Legend wrapperStyle={{ paddingTop: 8 }} />
            <Line
              type="monotone"
              dataKey="comprehension"
              stroke="#2563EB"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="retention"
              stroke="#14B8A6"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComprehensionChart;
