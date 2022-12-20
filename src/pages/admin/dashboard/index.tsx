import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SlideBar from "../../../../components/slideBar/slideBar";
import StaticCard from "../../../../components/staticCard/staticCard";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import {
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  Area,
} from "recharts";
import AdminScreen from "../../../layouts/AdminScreen";
const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];
const Dashboard = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <AdminScreen>
      <Head>admin | dashboard</Head>
      <StaticCard />
      <div className="h-full ml-14 my-4 md:ml-64 p-4 gap-4">
        <div className="flex flex-col lg:flex-row gap-5 ">
          <div className="w-full lg:w-[25%] bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md  p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex items-center justify-between ">
              <h1 className="text-base font-medium font-[Nunito,_sans-serif]">
                Total Revenue
              </h1>
              <MoreVertIcon fontSize="small" />
            </div>
            <div className="flex flex-col items-center justify-center gap-3.5 font-[Nunito,_sans-serif]">
              <div className="h-24 w-24 font-[Nunito,_sans-serif]">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
              </div>
              <p className="font-medium ">Total sales made today</p>
              <p className="text-3xl font-[Nunito,_sans-serif]">$420</p>
              <p className="text-center text-xs font-light ">
                Previous transactions processing. Last payments may not be
                included.
              </p>
              <div className="flex w-full items-center justify-between font-[Nunito,_sans-serif]">
                <div className="text-center font-[Nunito,_sans-serif]">
                  <div className="text-sm ">Target</div>
                  <div className="mt-2.5 flex items-center text-sm text-[rgba(255,0,0,1)]">
                    <KeyboardArrowDownIcon fontSize="small" />
                    <div className=" font-[Nunito,_sans-serif]">$12.4k</div>
                  </div>
                </div>
                <div className="text-center font-[Nunito,_sans-serif]">
                  <div className="text-sm ">Last Week</div>
                  <div className="mt-2.5 flex items-center text-sm text-[rgba(0,128,0,1)]">
                    <KeyboardArrowUpOutlinedIcon fontSize="small" />
                    <div className=" font-[Nunito,_sans-serif]">$12.4k</div>
                  </div>
                </div>
                <div className="text-center font-[Nunito,_sans-serif]">
                  <div className="text-sm ">Last Month</div>
                  <div className="mt-2.5 flex items-center text-sm text-[rgba(0,128,0,1)]">
                    <KeyboardArrowUpOutlinedIcon fontSize="small" />
                    <div className=" font-[Nunito,_sans-serif]">$12.4k</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[75%] bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md  p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div className="mb-[20px]">Last 6 Months (Revenue)</div>
            <ResponsiveContainer aspect={2 / 1}>
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="gray" />
                <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Total"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#total)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="h-full ml-14 my-4 md:ml-64 p-4 gap-4">
        <div className="md:max-w-full md:w-full overflow-auto font-[Nunito,_sans-serif] bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md  p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group ">
          <div className="mb-3.5 font-medium">Latest Transactions</div>
          <div className="w-full overflow-x-auto rounded  shadow-[rgba(0,_0,_0,_0.2)_0px_2px_1px_-1px,_rgba(0,_0,_0,_0.14)_0px_1px_1px_0px,_rgba(0,_0,_0,_0.12)_0px_1px_3px_0px]">
            <table
              className="table w-full border-collapse font-[Nunito,_sans-serif] min-w-[650px]"
              aria-label="simple table"
            >
              <thead className="table-header-group font-[Nunito,_sans-serif]">
                <tr className="table-row align-middle text-inherit font-[Nunito,_sans-serif]">
                  <th
                    className="table-cell text-left text-sm font-medium leading-6 tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif]"
                    scope="col"
                  >
                    Tracking ID
                  </th>
                  <th
                    className="table-cell text-left text-sm font-medium leading-6 tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif]"
                    scope="col"
                  >
                    Product
                  </th>
                  <th
                    className="table-cell text-left text-sm font-medium leading-6 tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif]"
                    scope="col"
                  >
                    Customer
                  </th>
                  <th
                    className="table-cell text-left text-sm font-medium leading-6 tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif]"
                    scope="col"
                  >
                    Date
                  </th>
                  <th
                    className="table-cell text-left text-sm font-medium leading-6 tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif]"
                    scope="col"
                  >
                    Amount
                  </th>
                  <th
                    className="table-cell text-left text-sm font-medium leading-6 tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif]"
                    scope="col"
                  >
                    Payment Method
                  </th>
                  <th
                    className="table-cell text-left text-sm font-medium leading-6 tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif]"
                    scope="col"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="table-row-group font-[Nunito,_sans-serif]">
                <tr className="table-row align-middle text-inherit font-[Nunito,_sans-serif]">
                  <td className="table-cell text-left text-sm font-normal tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif] leading-[1.43]">
                    1143155
                  </td>
                  <td className="table-cell text-left text-sm font-normal tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif] leading-[1.43]">
                    <div className="flex items-center font-[Nunito,_sans-serif]">
                      <img
                        className="mr-2.5 h-8 w-8 font-[Nunito,_sans-serif] rounded-[50%]"
                        alt=""
                        src="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg"
                      />
                      Acer Nitro 5
                    </div>
                  </td>
                  <td className="table-cell text-left text-sm font-normal tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif] leading-[1.43]">
                    John Smith
                  </td>
                  <td className="table-cell text-left text-sm font-normal tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif] leading-[1.43]">
                    1 March
                  </td>
                  <td className="table-cell text-left text-sm font-normal tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif] leading-[1.43]">
                    785
                  </td>
                  <td className="table-cell text-left text-sm font-normal tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif] leading-[1.43]">
                    Cash on Delivery
                  </td>
                  <td className="table-cell text-left text-sm font-normal tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif] leading-[1.43]">
                    <span className="rounded font-[Nunito,_sans-serif] text-[rgba(0,128,0,1)] bg-[rgba(0,128,0,0.153)]">
                      Approved
                    </span>
                  </td>
                </tr>
                <tr className="table-row align-middle text-inherit font-[Nunito,_sans-serif]">
                  <td className="table-cell text-left text-sm font-normal tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif] leading-[1.43]">
                    2235235
                  </td>
                  <td className="table-cell text-left text-sm font-normal tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif] leading-[1.43]">
                    <div className="flex items-center font-[Nunito,_sans-serif]">
                      <img
                        className="mr-2.5 h-8 w-8 font-[Nunito,_sans-serif] rounded-[50%]"
                        alt=""
                        src="https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg"
                      />
                      Playstation 5
                    </div>
                  </td>
                  <td className="table-cell text-left text-sm font-normal tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif] leading-[1.43]">
                    Michael Doe
                  </td>
                  <td className="table-cell text-left text-sm font-normal tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif] leading-[1.43]">
                    1 March
                  </td>
                  <td className="table-cell text-left text-sm font-normal tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif] leading-[1.43]">
                    900
                  </td>
                  <td className="table-cell text-left text-sm font-normal tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif] leading-[1.43]">
                    Online Payment
                  </td>
                  <td className="table-cell text-left text-sm font-normal tracking-normal  font-[Roboto,_Helvetica,_Arial,_sans-serif] leading-[1.43]">
                    <span className="rounded font-[Nunito,_sans-serif] text-[rgba(218,165,32,1)] bg-[rgba(189,189,3,0.1)]">
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminScreen>
  );
};

export default Dashboard;
