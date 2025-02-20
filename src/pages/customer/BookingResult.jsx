import React from "react";

const BookingResult = () => {
  return (
    <div className="px-10 md:px-80 py-5 shadow-sm bg-gray-100">
      <div className="space-y-5 py-8 pb-20 bg-white px-5 rounded-sm">
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Kết quả khám bệnh</p>
          <p>Ngày 10 Tháng 2 Năm 2025</p>
        </div>
        <div className="flex justify-between">
          <div>
            <p>
              <b>Họ và tên</b>: Dương Văn A
            </p>
            <p>
              <b>Giới tính</b>: Nam
            </p>
            <p>
              <b>Năm sinh</b>: 2004
            </p>
          </div>
          <div>
            <p>
              <b>Chẩn đoán</b>
            </p>
            <p className="text-green-500">Tình trạng kết quả bình thường</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-bold">Kết Luận</p>
          <p>Tình trạng sức khỏe bình thường.</p>
        </div>
        <div className="space-y-2 pb-10">
          <p className="font-bold">Tư vấn</p>
          <p>Nên cho bé ăn nhiều rau xanh...</p>
        </div>
        <hr />
        <div className="flex items-center gap-2">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1739372425274-d41281e72c5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3DF"
              alt=""
              className="h-12 w-12 rounded-full"
            />
          </figure>
          <div>
            <p> Bác sĩ tư vấn</p>
            <p className="font-semibold">Lâm Thị B</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingResult;
