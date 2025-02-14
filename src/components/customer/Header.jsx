import React from "react";
import Logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="border-b border-b-gray-400/25 py-[0.5em] pl-[2.5em]">
      <ul className="grid grid-cols-3 items-center">
        <li className="flex items-center">
          <figure className="w-[4em]">
            <img src={Logo} alt="" />
          </figure>
          <p className="text-xl font-bold">GrowthTrack</p>
        </li>
        <li>
          <ul className="flex gap-4 text-lg">
            <li>Trang chủ</li>
            <li>Blog</li>
            <li>Câu hỏi thường gặp</li>
          </ul>
        </li>
        <li className="flex gap-5">
          <button
            className="rounded-lg border-1 border-blue-500 px-3 py-2 text-blue-500"
            type="button"
          >
            Đăng nhập
          </button>
          <button
            className="rounded-lg bg-blue-500 px-3 py-2 text-white"
            type="button"
          >
            Đăng ký
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
