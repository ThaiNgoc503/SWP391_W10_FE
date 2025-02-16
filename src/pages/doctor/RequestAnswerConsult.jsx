import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const RequestAnswerConsult = () => {
    const navigate = useNavigate();

    const toChart = () => navigate("/customer/chart");
    return (
        <div className="bg-gray-50 flex justify-center h-screen">
            <div className="w-[75%] h-[450px] flex flex-col justify-center bg-white p-5 mt-20 shadow">
                <div className="flex items-center">
                    <p className="font-bold text-base">Thông tin cá nhân</p>
                    <Button 
                        className="w-17 h-17 bg-yellow-400 text-brown-500 ml-[525px] hover:text-red-500 hover:shadow"
                        onClick={toChart}
                    >
                        Charts
                    </Button>
                </div>
                <p className="text-[11pt]">Họ và tên</p>
                <input
                    type="text"
                    placeholder="Nhập họ và tên"
                    className="w-[650px] border-b-2 border-gray-300 border-bottom focus:outline-none"
                />
                <p className="text-[11pt]">Giới tính</p>
                <div className="flex gap-6">
                    <div className="flex gap-2">
                        <input type="checkbox"/>
                        <p>Nam</p>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox"/>
                        <p>Nữ</p>
                    </div>
                </div>
                <p>Năm sinh</p>
                <input
                type="number"
                placeholder="Năm sinh"
                className="w-[150px] border-b-2 border-gray-300 border-bottom focus:outline-none"
                />
                <p className="font-bold mt-4">Chẩn đoán</p>
                <textarea className="border-b-2 border-gray-300 border-bottom focus:outline-none p-2 w-[600px] h-[250px]">

                </textarea>
                <p className="font-bold mt-4">Phản hồi tư vấn</p>
                <textarea className="border-b-2 border-gray-300 border-bottom focus:outline-none p-2 w-[600px] h-[250px]"></textarea>
                <Button className="bg-blue-500 text-white py-3 my-3 rounded-md">Gửi phản hồi</Button>
            </div>     
        </div>
    )
}

export default RequestAnswerConsult;
