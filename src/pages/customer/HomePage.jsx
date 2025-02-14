import React from "react";
import hinh2 from "../../assets/hinh2.png";
import hinh4 from "../../assets/hinh4.png";
import {
  FaArrowRight,
  FaChartBar,
  FaChartLine,
  FaEye,
  FaPlus,
  FaShareAlt,
} from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { PiBellSimpleZFill } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import { SlNote } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { GrUpdate } from "react-icons/gr";
const HomePage = () => {
  return (
    <div className="mt-2">
      <div className="bg-sky-100 px-15 py-5">
        <ul className="grid grid-cols-2 items-center text-gray-600">
          <li className="space-y-10 text-lg">
            <p className="text-3xl font-bold">
              Chào mừng bạn đã đến với GrowthTrack, chúng tôi cung cấp các công
              cụ tốt nhất để theo dõi sự phát triển của trẻ
            </p>
            <p className="">
              Chúng tôi cung cấp công cụ dễ dàng để bạn ghi nhận, phân tích và
              chia sẻ sự phát triển của trẻ từ sơ sinh đến trưởng thành.
            </p>
          </li>
          <li>
            <figure>
              <img src={hinh4} alt="" className="h-[495px] w-[420px]" />
            </figure>
          </li>
        </ul>
      </div>

      <div className="px-15 py-25">
        <div className="flex justify-between">
          <p className="text-2xl font-bold">Danh sách trẻ</p>
          <div className="flex items-center">
            <div className="relative w-56">
              <input
                type="text"
                value=""
                placeholder="tìm kiếm..."
                className="rounded-sm border-1 border-gray-300 p-1.5 pl-7"
              />
              <CiSearch className="absolute top-2.5 left-1 transform text-xl font-bold text-gray-500" />
            </div>
            <button className="flex items-center gap-2 rounded-xl bg-blue-500 p-2 text-white">
              <FaPlus />
              Thêm mới
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 pt-10">
          {/* Thẻ 1 */}
          <div className="w-[23em] border border-gray-300/25 p-3 shadow-sm">
            <ul className="flex gap-5">
              <li>
                <figure>
                  <img
                    className="h-15 w-15 rounded-full"
                    src="https://images.unsplash.com/photo-1738071545459-e19435ae37e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </figure>
              </li>
              <li>
                <p className="font-bold">Nguyễn Thị A</p>
                <p>9 tháng tuổi</p>
              </li>
            </ul>
            <div className="flex justify-between">
              <button className="flex items-center gap-2 text-blue-500">
                <FaEye />
                Xem chi tiết
              </button>
              <button className="flex items-center gap-2">
                <SlNote />
                Chỉnh sữa
              </button>
            </div>
          </div>

          {/* Thẻ 2 */}
          <div className="w-[23em] border border-gray-300/25 p-3 shadow-sm">
            <ul className="flex gap-5">
              <li>
                <figure>
                  <img
                    className="h-15 w-15 rounded-full"
                    src="https://images.unsplash.com/photo-1738071545459-e19435ae37e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </figure>
              </li>
              <li>
                <p className="font-bold">Nguyễn Thị A</p>
                <p>9 tháng tuổi</p>
              </li>
            </ul>
            <div className="flex justify-between">
              <button className="flex items-center gap-2 text-blue-500">
                <FaEye />
                Xem chi tiết
              </button>
              <button className="flex items-center gap-2">
                <SlNote />
                Chỉnh sữa
              </button>
            </div>
          </div>

          {/* Thẻ 3 */}
          <div className="w-[23em] border border-gray-300/25 p-3 shadow-sm">
            <ul className="flex gap-5">
              <li>
                <figure>
                  <img
                    className="h-15 w-15 rounded-full"
                    src="https://images.unsplash.com/photo-1738071545459-e19435ae37e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </figure>
              </li>
              <li>
                <p className="font-bold">Nguyễn Thị A</p>
                <p>9 tháng tuổi</p>
              </li>
            </ul>
            <div className="flex justify-between">
              <button className="flex items-center gap-2 text-blue-500">
                <FaEye />
                Xem chi tiết
              </button>
              <button className="flex items-center gap-2">
                <SlNote />
                Chỉnh sữa
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* GÓI THÀNH VIÊN */}
      <div className="p-10 text-center">
        <div className="inline-flex items-center gap-20 pb-10">
          <p className="text-2xl font-bold">Yêu câu tư vấn</p>
          <button className="flex items-center gap-2 rounded-xl bg-blue-500 p-2 text-white">
            <GrUpdate />
            Lịch sử tư vấn
          </button>
        </div>

        <div className="">
          {/* GÓI STANDARD */}
          <div className="space-y-7 rounded-2xl border border-gray-300/25 px-[3em] pt-[2em] pb-[3em] text-xl shadow-xl">
            <div className="space-y-3.75">
              <label htmlFor="bacSi" className="flex items-center gap-2">
                Bác sĩ
              </label>
              <select
                type="text"
                className="w-full rounded-lg border border-gray-300 p-2"
                id="bacSi"
              >
                <option value="Bs. Nguyen Van A">Bs. Nguyen Van A</option>
                <option value="Bs. Nguyen Van B">Bs. Nguyen Van B</option>
                <option value="Bs. Nguyen Van C">Bs. Nguyen Van C</option>
                <option value="Bs. Nguyen Van D">Bs. Nguyen Van D</option>
              </select>
              <label htmlFor="vanDe" className="flex items-center gap-2">
                Mô tả vấn đề
              </label>
              <textarea
                type="text"
                className="w-full min-h-28 resize-none rounded-lg border border-gray-300 p-2"
                id="vanDe"
              />
            </div>
            <button className="w-full rounded-lg bg-blue-500 px-4 py-3 text-white">
              Gửi yêu cầu
            </button>
          </div>
        </div>
      </div>

      {/* BLOG CHIA SẼ KINH NGHIỆM */}
      <div className="p-10">
        <p className="p-10 text-center text-2xl font-bold">
          Blog chia sẽ kinh nghiệm
        </p>
        <div className="grid grid-cols-3 gap-3">
          {/* BLOG 1 */}

          <div className="w-[20rem]">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1739467444239-840b9b3c2480?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="rounded-xl"
              />
              <p className="p-2 text-xl font-bold">
                5 cách giúp trẻ ngủ ngon hơn
              </p>
              <button className="flex items-center gap-2 pl-2 text-blue-500">
                xem thêm
                <FaArrowRight className="font-xl" />
              </button>
            </figure>
          </div>
          {/* BLOG 2 */}

          <div className="w-[20rem]">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1739467444239-840b9b3c2480?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="rounded-xl"
              />
              <p className="p-2 text-xl font-bold">
                5 cách giúp trẻ ngủ ngon hơn
              </p>
              <button className="flex items-center gap-2 pl-2 text-blue-500">
                xem thêm
                <FaArrowRight className="font-xl" />
              </button>
            </figure>
          </div>
          {/* BLOG 3 */}
          <div className="w-[20rem]">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1739467444239-840b9b3c2480?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="rounded-xl"
              />
              <p className="p-2 text-xl font-bold">
                5 cách giúp trẻ ngủ ngon hơn
              </p>
              <button className="flex items-center gap-2 pl-2 text-blue-500">
                xem thêm
                <FaArrowRight className="font-xl" />
              </button>
            </figure>
          </div>
        </div>
      </div>
      {/* CÂU HỎI HAY GẶP */}
      <div className="p-10 text-center">
        <p className="p-10 text-2xl font-bold">Câu hỏi thường gặp</p>
        <div className="space-y-5">
          <div className="border border-gray-400/25 p-2 shadow-sm">
            <button>Làm sao để đăng ký gói thành viên?</button>
          </div>
          <div className="border border-gray-400/25 p-2 shadow-sm">
            <button>Làm sao để đăng ký gói thành viên?</button>
          </div>
          <div className="border border-gray-400/25 p-2 shadow-sm">
            <button>Làm sao để đăng ký gói thành viên?</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
