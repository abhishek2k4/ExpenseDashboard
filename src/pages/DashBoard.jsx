import DataDownloadBtn from "../components/DataDownloadBtn";
import ExpenseTable from "../components/ExpenseTable";
import PieChart from "../components/PieChart";
import TotalSpent from "../components/TotalSpent";

function DashBoard() {
  return (
    <div className="flex flex-col gap-3 mx-5">
      <TotalSpent />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        <div className="h-50 md:h-120 w-full lg:col-span-2 p-6 rounded-xl bg-white">
          <h2 class="text-xs font-semibold text-gray-400 uppercase">
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
