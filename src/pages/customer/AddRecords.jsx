import React from "react";
import { FaSave } from "react-icons/fa";
import { RiChatDeleteFill } from "react-icons/ri";

const AddRecords = () => {
  return (
    <div className="min-h-screen bg-gray-200 py-[2em]">
      <div class="mx-auto max-w-md rounded-lg border border-gray-100 bg-white p-6 shadow-md">
        <h2 class="text-lg font-semibold">Thêm chỉ số cơ thể</h2>
        <p class="text-sm text-gray-500">Nhập thông tin chỉ số cơ thể mới</p>

        <form class="mt-4 space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">
              Ngày đo
            </label>
            <div class="relative">
              <input
                type="date"
                class="w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Chiều cao (cm)
            </label>
            <div class="relative">
              <input
                type="text"
                placeholder="Nhập chiều cao"
                class="w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <span class="absolute inset-y-0 right-3 flex items-center text-gray-400">
                cm
              </span>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Cân nặng (kg)
            </label>
            <div class="relative">
              <input
                type="text"
                placeholder="Nhập cân nặng"
                class="w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <span class="absolute inset-y-0 right-3 flex items-center text-gray-400">
                kg
              </span>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Vòng đầu (cm)
            </label>
            <div class="relative">
              <input
                type="text"
                placeholder="Nhập vòng đầu"
                class="w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <span class="absolute inset-y-0 right-3 flex items-center text-gray-400">
                cm
              </span>
            </div>
          </div>

          <div class="flex space-x-3">
            <button
              type="submit"
              class="flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700"
            >
              <span>
                <FaSave />
              </span>
              <span>Lưu chỉ số</span>
            </button>
            <button
              type="button"
              class="w-full flex items-center justify-center space-x-2 rounded-lg bg-gray-200 py-2 font-medium text-gray-700 hover:bg-gray-300"
            >
              <span>
                <RiChatDeleteFill />
              </span>
              <span>Hủy</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecords;
