import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router";

const AdvisoryHistory = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-15 py-5">
      <div className="pb-5">
        <p className="text-lg font-bold">Lịch sử tư vấn của bác sĩ</p>
      </div>
      <div className="flex items-center bg-white p-2">
        <div className="relative flex-grow">
          <input
            type="text"
            value=""
            placeholder="Tìm kiếm theo tên bác sĩ"
            className="w-full rounded-sm border-1 border-gray-300 p-1.5 pl-7"
          />
          <CiSearch className="absolute top-2.5 left-1 transform text-xl font-bold text-gray-500" />
        </div>
        <select className="ml-5 rounded-sm border border-gray-300 p-1.5">
          <option value="Tất cả trạng thái">Tất cả trạng thái</option>
          <option value="Tất cả trạng thái">Đã phản hồi</option>
          <option value="Tất cả trạng thái">Đang phản hồi</option>
        </select>
      </div>
      <div className="space-y-3 pt-5">
        {/* Thẻ 1 */}
        <div className="flex justify-between rounded-sm bg-white p-2">
          <div className="flex items-center gap-5">
            <img
              src="https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <p className="font-semibold">Bs. Nguyễn Thị A</p>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <p>Ngày phản hồi</p>
              <p className="font-semibold">15/3/2025</p>
            </div>
            <Link to={"/customer/result-advisory"}>
              <button className="flex w-[145px] items-center gap-2 rounded-full bg-green-300 px-2 py-1">
                <FaClock />
                Đã phản hồi
              </button>
            </Link>
          </div>
        </div>

        {/* Thẻ 2 */}
        <div className="flex justify-between rounded-sm bg-white p-2">
          <div className="flex items-center gap-5">
            <img
              src="https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <p className="font-semibold">Bs. Nguyễn Thị A</p>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <p>Ngày phản hồi</p>
              <p className="font-semibold">15/3/2025</p>
            </div>
            <button className="flex w-[145px] items-center gap-2 rounded-full bg-yellow-200 px-2 py-1">
              <FaClock />
              Đang phản hồi
            </button>
          </div>
        </div>

        {/* Thẻ 3 */}
        <div className="flex justify-between rounded-sm bg-white p-2">
          <div className="flex items-center gap-5">
            <img
              src="https://images.unsplash.com/photo-1739382122846-74e722a6eea4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <p className="font-semibold">Bs. Nguyễn Thị A</p>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <p>Ngày phản hồi</p>
              <p className="font-semibold">15/3/2025</p>
            </div>
            <Link to={"/customer/result-advisory"}>
              <button className="flex w-[145px] items-center gap-2 rounded-full bg-green-300 px-2 py-1">
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
