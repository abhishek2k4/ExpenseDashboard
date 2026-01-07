import DashBoard from "./pages/DashBoard";
import { RiGithubFill } from "@remixicon/react";


function App() {
  return (
    <div className="bg-linear-to-t from-purple-200 to-indigo-200 flex flex-col pb-8 min-h-screen relative">
      <center className="my-5">
        <h2 className="text-2xl font-bold text-blue-800">
          &lt;&lt; December 2024 &gt;&gt;
        </h2>
      </center>
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
