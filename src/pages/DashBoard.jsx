import { useState } from "react";
import DataDownloadBtn from "../components/DataDownloadBtn";
import ExpenseTable from "../components/ExpenseTable";
import MonthHeader from "../components/MonthHeader";
import PieChart from "../components/PieChart";
import TotalSpent from "../components/TotalSpent";
import data from "../data/transactions.json";

function DashBoard() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 11));
  return (
    <div className="flex flex-col gap-3 mx-5">
      <div className="flex justify-center p-4">
        <MonthHeader
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
      </div>
      <TotalSpent transactions={data} currentDate={currentDate} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        <div className="w-full lg:col-span-2 p-6 rounded-xl bg-white">
          <h2 className="left-6 top-6 text-xs font-semibold mb-2 text-gray-400 uppercase">
            EXPENSES BY CATEGORY
          </h2>
          <PieChart />
        </div>
        <div className="lg:col-span-3 md:h-120 bg-white p-2 rounded-xl">
          <ExpenseTable />
          <center>
            <DataDownloadBtn />
          </center>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
