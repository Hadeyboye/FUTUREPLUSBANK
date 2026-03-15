import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Food", value: 320 },
  { name: "Transport", value: 180 },
  { name: "Shopping", value: 450 },
  { name: "Bills", value: 210 },
  { name: "Others", value: 140 },
];

const COLORS = ["#22c55e", "#eab308", "#a78bfa", "#f87171", "#64748b"];

export default function SpendingChart() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-96">
      <h2 className="text-xl font-semibold mb-4">This Month Spending</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: "#1e293b", border: "none", borderRadius: "8px" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}