import MonthHeader from "./components/MonthHeader";
import DashBoard from "./pages/DashBoard";
import { RiGithubFill } from "@remixicon/react";


function App() {
  return (
    <div className="bg-linear-to-t from-purple-200 to-indigo-200 flex flex-col pb-8 min-h-screen relative">
      
      <DashBoard />
      <br />
      <footer className="absolute bottom-0 p-1 w-full bg-purple-200">
        <div className="flex justify-center items-center w-full">
          <RiGithubFill size={16} /><p className="text-gray-600"> Github/abhishek2k4</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
