import React from "react";
import { Card, Typography, Button } from "@material-tailwind/react";

const TABLE_HEAD = ["Bác sĩ", "Ngày khám", "Giờ khám", "Google Meet", "Mã Pin", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
    time: "18:00",
    admin: true,
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
    time: "11:00",
    admin: true,
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
    time: "01:00",
    admin: false,
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
    time: "20:00",
    admin: true,
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
    time: "12:00",
    admin: true,
  },
];

const BookingHistory = () => {
  return (
    <>
      <div className="flex h-screen justify-center bg-gray-100">
        <div className="mt-10 flex w-[80%] h-fit items-center ">
          <Card className="h-full w-full overflow-scroll rounded-xl">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ name, job, date, time, admin }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {job}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {time}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {admin}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Button
                          className={
                            admin
                              ? "w-[60%] bg-blue-500"
                              : "w-[60%] bg-gray-600"
                          }
                          disabled={!admin}
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal text-white"
                          >
                            {admin ? "Xem kết quả" : "Chờ khám"}
                          </Typography>
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BookingHistory;
