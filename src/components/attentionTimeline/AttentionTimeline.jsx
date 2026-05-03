import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const defaultSessionOptions = [
  { id: "today", label: "Today's Session" },
  { id: "yesterday", label: "Yesterday's Session" },
];

const defaultData = [
  { time: "0 min", attention: 78 },
  { time: "5 min", attention: 82 },
  { time: "10 min", attention: 88 },
  { time: "15 min", attention: 84 },
  { time: "20 min", attention: 90 },
  { time: "25 min", attention: 87 },
  { time: "30 min", attention: 92 },
];

const AttentionTimeline = ({
  data = defaultData,
  sessionOptions = defaultSessionOptions,
  selectedSession = "today",
  onSessionChange = () => {},
}) => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h2 className="text-base font-bold text-gray-900">
            Attention Level Timeline
          </h2>
          <p className="text-sm text-gray-500">
            See how attention shifts during the session.
          </p>
        </div>
        <div className="max-w-xs">
          <select
            value={selectedSession}
            onChange={(e) => onSessionChange(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {sessionOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id="attentionGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#2563EB" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#2563EB" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
            <XAxis dataKey="time" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="attention"
              stroke="#2563EB"
              fill="url(#attentionGradient)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttentionTimeline;
