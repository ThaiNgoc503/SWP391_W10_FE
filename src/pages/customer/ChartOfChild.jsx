import React from "react";
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

const ChartOfChild = () => {
  const data = [
    {
      month: 24.5,
      P3: 10.32,
      P5: 10.57,
      P10: 10.98,
      P25: 11.71,
      P50: 12.59,
      P75: 13.55,
      P90: 14.49,
      P95: 15.09,
      P97: 15.5,
    },
    {
      month: 36,
      P3: 11.2,
      P5: 11.5,
      P10: 12.0,
      P25: 12.8,
      P50: 13.7,
      P75: 14.8,
      P90: 15.9,
      P95: 16.5,
      P97: 17.0,
    },
    {
      month: 48,
      P3: 12.0,
      P5: 12.3,
      P10: 12.9,
      P25: 13.8,
      P50: 14.9,
      P75: 16.0,
      P90: 17.1,
      P95: 17.8,
      P97: 18.3,
    },
    {
      month: 60,
      P3: 12.8,
      P5: 13.2,
      P10: 13.9,
      P25: 15.0,
      P50: 16.2,
      P75: 17.5,
      P90: 18.8,
      P95: 19.6,
      P97: 20.2,
    },
  ];

  const colors = [
    "#FF0000",
    "#FF4500",
    "#FFA500",
    "#32CD32",
    "#0000FF",
    "#4B0082",
    "#800080",
    "#A52A2A",
  ];

  return (
    <div className="bg-gray-200 py-6">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-4 shadow-md">
        {/* Thông tin User */}
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt="Avatar"
            className="h-12 w-12 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">Nguyễn Văn An</h2>
            <p className="text-sm text-gray-500">3 tuổi 2 tháng (Nam)</p>
          </div>
        </div>

        {/* Grid 2x2 */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          {/* Biểu đồ Chiều cao */}
          <div className="rounded-lg bg-gray-100 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Chiều cao</h3>
              <span className="rounded bg-orange-200 px-2 py-1 text-xs font-semibold text-orange-700">
                Thấp còi độ 1
              </span>
            </div>
            <div className="mt-2 flex h-[200px] justify-center rounded-md bg-white">
              <ResponsiveContainer width="100%" height={180}>
                <LineChart
                  data={data}
                  margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {[
                    "P3",
                    "P5",
                    "P10",
                    "P25",
                    "P50",
                    "P75",
                    "P90",
                    "P95",
                    "P97",
                  ].map((key, index) => (
                    <Line
                      key={key}
                      type="monotone"
                      dataKey={key}
                      stroke={colors[index]}
                      strokeWidth={2}
                      dot={false}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Biểu đồ Cân nặng */}
          <div className="rounded-lg bg-gray-100 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Cân nặng</h3>
              <span className="rounded bg-green-200 px-2 py-1 text-xs font-semibold text-green-700">
                Bình thường
              </span>
            </div>
            <div className="mt-2 flex h-[200px] justify-center rounded-md bg-white">
              <ResponsiveContainer width="100%" height={180}>
                <LineChart
                  data={data}
                  margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {[
                    "P3",
                    "P5",
                    "P10",
                    "P25",
                    "P50",
                    "P75",
                    "P90",
                    "P95",
                    "P97",
                  ].map((key, index) => (
                    <Line
                      key={key}
                      type="monotone"
                      dataKey={key}
                      stroke={colors[index]}
                      strokeWidth={2}
                      dot={false}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Biểu đồ Vòng đầu */}
          <div className="rounded-lg bg-gray-100 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Vòng đầu</h3>
              <span className="rounded bg-green-200 px-2 py-1 text-xs font-semibold text-green-700">
                Bình thường
              </span>
            </div>
            <div className="mt-2 flex h-[200px] justify-center rounded-md bg-white">
              <ResponsiveContainer width="100%" height={180}>
                <LineChart
                  data={data}
                  margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {[
                    "P3",
                    "P5",
                    "P10",
                    "P25",
                    "P50",
                    "P75",
                    "P90",
                    "P95",
                    "P97",
                  ].map((key, index) => (
                    <Line
                      key={key}
                      type="monotone"
                      dataKey={key}
                      stroke={colors[index]}
                      strokeWidth={2}
                      dot={false}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Biểu đồ BMI */}
          <div className="rounded-lg bg-gray-100 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Chỉ số BMI</h3>
              <span className="rounded bg-green-200 px-2 py-1 text-xs font-semibold text-green-700">
                Bình thường
              </span>
            </div>
            <div className="mt-2 flex h-[200px] justify-center rounded-md bg-white">
              <ResponsiveContainer width="100%" height={180}>
                <LineChart
                  data={data}
                  margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {[
                    "P3",
                    "P5",
                    "P10",
                    "P25",
                    "P50",
                    "P75",
                    "P90",
                    "P95",
                    "P97",
                  ].map((key, index) => (
                    <Line
                      key={key}
                      type="monotone"
                      dataKey={key}
                      stroke={colors[index]}
                      strokeWidth={2}
                      dot={false}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartOfChild;
