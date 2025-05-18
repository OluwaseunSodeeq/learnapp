
"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Page A", amt: 70, label: "Jan" },
  { name: "Page B", amt: 25, label: "Feb" },
  { name: "Page C", amt: 30, label: "Mar" },
  { name: "Page D", amt: 20, label: "Apr" },
  { name: "Page E", amt: 60, label: "May" },
  { name: "Page F", amt: 10, label: "Jun" },
  { name: "Page G", amt: 70, label: "Jul" },
  { name: "Page H", amt: 40, label: "Aug" },
  { name: "Page I", amt: 0, label: "Sep" },
  { name: "Page J", amt: 90, label: "Oct" },
  { name: "Page K", amt: 80, label: "Nov" },
  { name: "Page L", amt: 50, label: "Dec" },
];

export default function CustomBarChart() {
  const barWidth = 60;
  const chartWidth = data.length * barWidth + 100;

  return (
    <div className="lg:w-[60%] shadow-xl ">
      <div className="relative w-full overflow-hidden bg-base100 h-full bg-base-100 rounded-md pt-2">
        <div className="flex">
          {/* Fixed Y Axis */}
          <div className="w-[60px] h-[300px] sticky left-0 bg-base-100 z-10">
            <BarChart
              width={60}
              height={300}
              data={data}
              layout="horizontal"
              margin={{ top: 20, right: 0, left: 0, bottom: 50 }}
            >

              <YAxis

                tickFormatter={(v) => `${v}h`}
                ticks={[0, 20, 40, 60, 80, 100]}
                domain={[0, 100]}
                axisLine={false}
                tickLine={false}
              />
            </BarChart>
          </div>

{/* 
          <div className="overflow-x-auto"> */}
          <div className="overflow-x-auto scrollbar-hide">
            <div style={{ width: `${chartWidth}px` }} className="min-w-[600px]">
              <BarChart
                width={chartWidth}
                height={300}
                data={data}
                layout="horizontal"
                margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
                barCategoryGap={20}
              >
                <XAxis dataKey="label" />
                {/* Dynamic Y axis */}
                <YAxis
                  hide
                  domain={[0, 100]}
                  ticks={[0, 20, 40, 60, 80, 100]}
                  margin={{ top: 0, right: 20, left: 0, bottom: 40 }}
                />
               
                <Tooltip
                  formatter={(value) => `${value}h`}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal
                  vertical={false}
                  stroke="#e2e8f0" 
                />
                <Bar dataKey="amt" fill="#FC4C1E" activeBar={false} />
              </BarChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
