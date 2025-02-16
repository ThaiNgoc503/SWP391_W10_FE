import React from "react";
import { FaUserAstronaut } from "react-icons/fa";

const ConsultResponse = () => {
    return (
        <div className="bg-gray-50 flex justify-center h-screen">
            <div className="w-[50%] h-fit mt-20 bg-white shadow">
                <div className="grid grid-cols-2 p-5">
                    <div>
                        <h3 className="text-lg font-bold my-4">Kết quả tư vấn</h3>
                        <p>Họ và tên:  Nguyễn Văn A</p>
                        <p>Giới tính: Nam</p>
                        <p>Năm sinh: 2025</p>
                        <h3 className="text-lg font-bold my-2">Kết luận</h3>
                        <p className="p-3">Tình trạng sức khỏe bình thường</p>
                        <h3 className="text-lg font-bold my-2">Tư vấn</h3>
                        <p className="p-3">Nên cho bé ăn nhiều rau xanh</p>
                    </div>
                    <div>
                        <p className="mt-14">Chẩn đoán</p>
                        <p className="text-green-400 text-sm">Không có chẩn đoán</p>
                    </div>
                </div>
                <hr className="text-gray-100 w-[85%] justify-center"/>
                <div className="flex mb-5 mt-5">
                    <button className="rounded-full border border-blue-500 p-2 text-blue-500 hover:bg-blue-100 ml-3 h-10 w-10">
                        <FaUserAstronaut className="h-5 w-5" />
                    </button>
                    <div className="ml-5">
                        <p>Bác sĩ tư vấn</p>
                        <p>Lâm Thị B</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsultResponse;
