import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom"; // Đổi thành "react-router-dom" cho đúng

const AdvisoryHistory = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-5">
      <div className="pb-5">
        <p className="text-lg font-bold">Lịch sử tư vấn của bác sĩ</p>
      </div>
      <div className="flex items-center rounded bg-white p-2 shadow">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Tìm kiếm theo tên bác sĩ"
            className="w-full rounded border border-gray-300 p-2 pl-8"
          />
          <CiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
        </div>
        <select className="ml-4 rounded border border-gray-300 p-2">
          <option value="Tất cả trạng thái">Tất cả trạng thái</option>
          <option value="Đã phản hồi">Đã phản hồi</option>
          <option value="Đang phản hồi">Đang phản hồi</option>
        </select>
      </div>
      <div className="space-y-3 pt-5">
        {/* Thẻ 1 */}
        <div className="flex justify-between rounded bg-white p-3 shadow">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=600&auto=format&fit=crop&q=60"
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <p className="font-semibold">Bs. Nguyễn Thị A</p>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <p className="text-sm text-gray-600">Ngày phản hồi</p>
              <p className="font-semibold">15/3/2025</p>
            </div>
            <Link to="/customer/result-advisory">
              <button className="flex w-40 items-center gap-2 rounded-full bg-green-300 px-3 py-1">
                <FaClock />
                Đã phản hồi
              </button>
            </Link>
          </div>
        </div>

        {/* Thẻ 2 */}
        <div className="flex justify-between rounded bg-white p-3 shadow">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=600&auto=format&fit=crop&q=60"
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <p className="font-semibold">Bs. Nguyễn Thị A</p>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <p className="text-sm text-gray-600">Ngày phản hồi</p>
              <p className="font-semibold">15/3/2025</p>
            </div>
            <button className="flex w-40 items-center gap-2 rounded-full bg-yellow-200 px-3 py-1">
              <FaClock />
              Đang phản hồi
            </button>
          </div>
        </div>

        {/* Thẻ 3 */}
        <div className="flex justify-between rounded bg-white p-3 shadow">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=600&auto=format&fit=crop&q=60"
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <p className="font-semibold">Bs. Nguyễn Thị A</p>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <p className="text-sm text-gray-600">Ngày phản hồi</p>
              <p className="font-semibold">15/3/2025</p>
            </div>
            <Link to="/customer/result-advisory">
              <button className="flex w-40 items-center gap-2 rounded-full bg-green-300 px-3 py-1">
                <FaClock />
                Đã phản hồi
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryHistory;
