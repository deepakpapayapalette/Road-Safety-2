import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";

export default function ViolationTrackerGraph() {
  const [period, setPeriod] = useState("Weekly");

  // Sample data sets
  const dataSets = {
    Weekly: [
      { day: "Mon", violations: 280 },
      { day: "Tue", violations: 320 },
      { day: "Wed", violations: 210 },
      { day: "Thur", violations: 460, high: true },
      { day: "Fri", violations: 400 },
      { day: "Sat", violations: 270 },
      { day: "Sun", violations: 120 },
    ],
    Daily: [
      { day: "8AM", violations: 50 },
      { day: "10AM", violations: 120 },
      { day: "12PM", violations: 90 },
      { day: "2PM", violations: 150 },
      { day: "4PM", violations: 70 },
      { day: "6PM", violations: 200 },
      { day: "8PM", violations: 80 },
    ],
    Monthly: [
      { day: "Week 1", violations: 600, high: true },
      { day: "Week 2", violations: 450 },
      { day: "Week 3", violations: 700, high: true },
      { day: "Week 4", violations: 500, high: true },
    ],
  };

  const data = dataSets[period];
  
  // Function to determine if violations are high (> 450)
  const isHighViolation = (violations) => violations > 450;
  
  return (
    <> 
    <div className="p-6  space">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-semibold">Violation Tracker graphs</h2>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 text-sm"
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
      <div className="flex justify-end mb-2">
         {/* Legend Note */}
      <div className="flex items-center gap-2 mt-2">
        <span className="w-3 h-3 rounded-full bg-red-600"></span>
        <span className="text-sm">High Violations</span>
      </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="violations"
            fill="#cbd5e1"  
            label={{ position: "top", fill: "#333" }}
            barSize={50}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={isHighViolation(entry.violations) ? "#e11616" : "#cbd5e1"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

     
    </div>
     </>
  );
}
