"use client";

import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#EA4228", "#F5CD19", "#5BE12C"];

export default function GaugeChart({ value }) {
  const data = [
    { value: 30 },
    { value: 50 },
    { value: 20 },
  ];

  const angle = 180 - (value * 180) / 100;
  const rad = (Math.PI / 180) * angle;

  const cx = 150;
  const cy = 150;
  const r = 90;

  const x = cx + r * Math.cos(rad);
  const y = cy - r * Math.sin(rad);

  return (
    <div className="relative w-75">
      <PieChart width={300} height={180}>
        <Pie
          data={data}
          cx={cx}
          cy={cy}
          startAngle={180}
          endAngle={0}
          innerRadius={70}
          outerRadius={100}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
      </PieChart>

      {/* Needle */}
      <svg className="absolute top-0 left-0" width="300" height="180">
        <line
          x1={cx}
          y1={cy}
          x2={x}
          y2={y}
          stroke="#fff"
          strokeWidth="3"
        />
        <circle cx={cx} cy={cy} r="6" fill="#fff" />
      </svg>

      {/* Center Text */}
      <div className="absolute left-1/2 top-27.5 -translate-x-1/2 text-center">
        <p className="text-xl font-bold text-white">{value}%</p>
        <p className="text-sm text-white/60">Trust Score</p>
      </div>
    </div>
  );
}
