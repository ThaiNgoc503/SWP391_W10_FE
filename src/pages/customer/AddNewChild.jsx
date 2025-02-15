import React from "react";

const AddNewChild = () => {
  return (
    <div className="flex h-screen justify-center bg-gray-50">
      <div className="mt-[8%] h-1/2 w-1/2 rounded-2xl bg-white shadow-xl">
        <div className="mx-8 my-5">
          <div className="my-3 text-xl font-semibold"> Thêm mới trẻ em</div>
          <div className="">Điền thông tin chi tiết của trẻ</div>
          <div className="">Họ và tên</div>
          <input className=""></input>
        </div>
      </div>
    </div>
  );
};

export default AddNewChild;
