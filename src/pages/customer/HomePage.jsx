import React from "react";
import hinh1 from "../../assets/hinh1.png";
import hinh2 from "../../assets/hinh2.png";
import {
  FaArrowRight,
  FaChartBar,
  FaChartLine,
  FaShareAlt,
} from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { PiBellSimpleZFill } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
const HomePage = () => {
  return (
    <div className="mt-2">
      <div className="bg-sky-100 px-15 py-5">
        <ul className="grid grid-cols-2 items-center text-gray-600">
          <li className="space-y-10 text-lg">
            <p className="text-3xl font-bold">
              Một hệ thống, một gói thành viên, một hành trình phát triển toàn
              diện
            </p>
            <p className="">
              Chỉ cần đăng ký một lần, bạn có thể theo dõi sự phát triển của trẻ
              từ sơ sinh đến trưởng thành.
            </p>
            <button className="rounded-lg bg-blue-500 px-4 py-3 text-white">
              Đăng ký ngay
            </button>
          </li>
          <li>
            <figure>
              <img src={hinh1} alt="" />
            </figure>
          </li>
        </ul>
      </div>

      <div className="px-15 py-25">
        <ul className="grid grid-cols-2">
          <li className="space-y-10">
            <p className="text-2xl font-bold">
              Tất cả tính năng bạn cần trong một gói thành viên duy nhất
            </p>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <FaChartLine className="text-blue-500" />
                Theo dõi cân nặng, chiều cao, BMI theo thời gian
              </p>
              <p className="flex items-center gap-2">
                <FaChartBar className="text-blue-500" />
                Biểu đồ tăng trưởng trực quan, dễ hiểu{" "}
              </p>
              <p className="flex items-center gap-2">
                <PiBellSimpleZFill className="text-blue-500" />
                Nhận cảnh báo về sức khỏe (suy dinh dưỡng, thừa cân)
              </p>
              <p className="flex items-center gap-2">
                <FaUserDoctor className="text-blue-500" />
                Tư vấn trực tiếp từ bác sĩ chuyên môn
              </p>
              <p className="flex items-center gap-2">
                <MdGroups3 className="text-blue-500" />
                Theo dõi nhiều trẻ cùng lúc
              </p>
              <p className="flex items-center gap-2">
                <FaShareAlt className="text-blue-500" />
                Chia sẻ dữ liệu sức khỏe với bác sĩ
              </p>
            </div>
          </li>
          <li>
            <figure>
              <img src={hinh2} alt="" />
            </figure>
          </li>
        </ul>
      </div>

      {/* GÓI THÀNH VIÊN */}
      <div className="p-10 text-center">
        <p className="p-10 text-2xl font-bold">Gói thành viên</p>
        <div className="grid grid-cols-2 gap-3 px-1">
          {/* GÓI STANDARD */}
          <div className="space-y-7 rounded-2xl border border-gray-300/25 px-[3em] pt-[2em] pb-[3em] text-xl shadow-xl">
            <div className="space-y-3.75">
              <p className="text-2xl font-bold">Gói standard</p>
              <p>
                <b className="text-2xl text-blue-500">599.000</b>/năm
              </p>
              <p className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                Theo dõi BMI
              </p>
              <p className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                Theo dõi cân nặng
              </p>
              <p className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                Theo dõi vòng đầu
              </p>
              <p className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                Theo dõi chế độ ăn uống
              </p>
            </div>
            <button className="w-full rounded-lg bg-blue-500 px-4 py-3 text-white">
              Đăng ký ngay
            </button>
          </div>

          {/* GÓI VIP */}
          <div className="space-y-7 rounded-2xl border bg-gradient-to-r from-purple-700 via-purple-500 to-blue-500 px-[3em] pt-[2em] pb-[3em] text-xl text-white shadow-xl">
            <div className="space-y-2">
              <p className="text-2xl font-bold">Gói Vip</p>
              <p>
                <b className="text-2xl">999.000</b>/năm
              </p>
              <p className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                Tất cả tính năng của gói Standard
              </p>
              <p className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                Gửi yêu cầu tư vấn đến bác sĩ{" "}
              </p>
              <p className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                Tư vấn trực tuyến 1:1 với bác sĩ qua Google Meet{" "}
              </p>
              <p className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                Nhận lời khuyên chuyên sâu từ bác sĩ{" "}
              </p>
              <p className="flex items-center gap-2">
                <TiTick className="text-green-500" />
                Hỗ trợ ưu tiên 24/7{" "}
              </p>
            </div>
            <button className="w-full rounded-lg bg-white px-4 py-3 text-blue-500">
              Đăng ký ngay
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
              <p className="text-xl font-bold">5 cách giúp trẻ ngủ ngon hơn</p>
              <button className="flex items-center gap-2 text-blue-500">
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
              <p className="text-xl font-bold">5 cách giúp trẻ ngủ ngon hơn</p>
              <button className="flex items-center gap-2 text-blue-500">
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
              <p className="text-xl font-bold">5 cách giúp trẻ ngủ ngon hơn</p>
              <button className="flex items-center gap-2 text-blue-500">
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
          <div className="p-2 border border-gray-400/25 shadow-sm">
            <button>Làm sao để đăng ký gói thành viên?</button>
          </div>
          <div className="p-2 border border-gray-400/25 shadow-sm">
            <button>Làm sao để đăng ký gói thành viên?</button>
          </div>
          <div className="p-2 border border-gray-400/25 shadow-sm">
            <button>Làm sao để đăng ký gói thành viên?</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
