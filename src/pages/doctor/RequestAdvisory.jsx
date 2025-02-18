import { useState } from "react";
import { Link } from "react-router";

const RequestAdvisory = () => {
  const [activeTab, setActiveTab] = useState("processing");

  const requests = [
    { name: "Nguyễn Văn A", date: "13-01-2025", status: "Đang xử lý" },
    { name: "Nguyễn Văn A", date: "13-01-2025", status: "Đã xử lý" },
  ];

  return (
    <div className="mx-auto min-h-screen max-w-full p-4">
      {/* Tabs */}
      <div className="mb-4 flex space-x-2">
        <button
          className={`rounded-md px-4 py-2 ${
            activeTab === "processing"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("processing")}
        >
          Đang xử lý
        </button>
        <button
          className={`rounded-md px-4 py-2 ${
            activeTab === "completed"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("completed")}
        >
          Đã xử lý
        </button>
        <button
          className={`rounded-md px-4 py-2 ${
            activeTab === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("all")}
        >
          Tất cả
        </button>
      </div>

      {/* Danh sách yêu cầu */}
      <div className="space-y-4">
        {requests.map((req, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg bg-white p-4 shadow"
          >
            <div>
              <p className="font-semibold">{req.name}</p>
              <p className="text-gray-600">Ngày yêu cầu: {req.date}</p>
            </div>
            {req.status === "Đã xử lý" ? (
              <Link to={"/doctor/result-advisory"}>
                <span className="rounded-md bg-yellow-200 px-5 py-1 text-sm font-semibold text-gray-700">
                  {req.status}
                </span>
              </Link>
            ) : (
              <Link to={"/doctor/request-form"}>
                <span className="rounded-md bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                  {req.status}
                </span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default RequestAdvisory;
