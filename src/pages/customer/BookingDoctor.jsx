import { Button, Select, Option, ButtonGroup } from "@material-tailwind/react";
import React, { useState } from "react";

const BookingDoctor = () => {
  const [pickDate, setPickDate] = React.useState(null);
  const handlePickDate = (day) => {
    setPickDate(day);
  };
  const [pickTime, setPickTime] = React.useState(null);
  const handlePickTime = (day) => {
    setPickTime(day);
  };

  return (
    <>
      <div className="flex h-screen flex-col bg-gray-100">
        <div className="mx-4 mt-10 flex h-[10%] w-full items-center bg-white">
          <p className="ml-[10%] text-2xl font-semibold">
            Đặt lịch khám bác sĩ trực tuyến
          </p>
        </div>
        <div className="ml-[70%] mt-[3%] h-[8%] w-[20%]">
          <Button className="size-full" color="light-green">
            Lịch sử khám bệnh
          </Button>
        </div>
        <div className="ml-[20%] mt-[3%] h-fit w-[70%] rounded-2xl bg-white shadow-xl">
          <div className="mx-8 my-5 flex flex-col">
            <p className="">Chọn bác sĩ</p>
            <div className="mt-[2%] w-[80%]">
              <Select label="Select Version">
                <Option>Nguyeenx Van A</Option>
                <Option>Tran Van B</Option>
                <Option>Dinh Thi C</Option>
                <Option>Tran Minh D</Option>
                <Option>Ho Van E</Option>
              </Select>
            </div>
            <div className="mt-[5%]">
              <p>Chọn ngày và giờ</p>
              <ButtonGroup fullWidth variant="outlined" className="mt-[2%]">
                {["CN", "T2", "T3", "T4", "T5", "T6", "T7 "].map((day) => (
                  <Button
                    key={day}
                    className={`${pickDate === day ? "bg-black text-white" : ""}`}
                    onClick={() => {
                      handlePickDate(day);
                    }}
                  >
                    {day}
                  </Button>
                ))}
              </ButtonGroup>
              <div className="mt-8 flex w-[100%] justify-around gap-4">
                {[
                  "08:00",
                  "09:00",
                  "10:00",
                  "13:00",
                  "14:00",
                  "15:00",
                  "16:00",
                ].map((time) => (
                  <Button
                    key={time}
                    className={`${pickTime === time ? "bg-black text-white" : ""} w-[15%]`}
                    variant="outlined"
                    onClick={() => {
                      handlePickTime(time);
                    }}
                    disabled={
                      time === "09:00" || time === "13:00" || time === "14:00"
                    }
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-16 flex w-[100%] justify-center">
              <Button className="h-[20%] w-[40%] bg-light-blue-600 text-xl">
                Xác nhận đặt lịch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDoctor;
