import React from "react";
import { FaFilter, FaPlus, FaTrash } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { SlNote } from "react-icons/sl";

const ChildRecords = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2>Chỉ số cơ thể</h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-2">
            <FaPlus />
            Nước
          </button>
          <button className="flex items-center gap-2">
            <FaFilter />
            Filter
          </button>
          <button className="flex items-center gap-2">
            <FaPlus />
            Thêm chỉ số
          </button>
          <button className="flex items-center gap-2">
            <IoStatsChart />
            Biểu đồ
          </button>
        </div>
      </div>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Date</th>
            <th>Weight (kg)</th>
            <th>Height (cm)</th>
            <th>BMI</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025-01-15</td>
            <td>75.5</td>
            <td>175</td>
            <td>24.7</td>
            <td>
              <button>
                <SlNote />
              </button>
              <button>
                <FaTrash />
              </button>
            </td>
          </tr>
          <tr>
            <td>2025-01-14</td>
            <td>76.0</td>
            <td>175</td>
            <td>24.9</td>
            <td>
              <button>
                <SlNote />
              </button>
              <button>
                <FaTrash />
              </button>
            </td>
          </tr>
          <tr>
            <td>2025-01-14</td>
            <td>76.0</td>
            <td>175</td>
            <td>24.9</td>
            <td>
              <button>
                <SlNote />
              </button>
              <button>
                <FaTrash />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChildRecords;
